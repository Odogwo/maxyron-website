'use client';
import {useCallback,useEffect,useState} from 'react';
import Link from 'next/link';
type Note={id:string;resourceRef:string;content:string;version:number;updatedAt:string};
type SessionState='checking'|'disabled'|'signed_out'|'ready'|'error';
export default function LearnerJournal(){
 const [status,setStatus]=useState<SessionState>('checking');
 const [notes,setNotes]=useState<Note[]>([]);
 const [resourceRef,setResourceRef]=useState('journal/general');
 const [content,setContent]=useState('');
 const [version,setVersion]=useState<number|undefined>();
 const [busy,setBusy]=useState(false);
 const [feedback,setFeedback]=useState('');
 const load=useCallback(async()=>{
  try{
   const session=await fetch('/api/learning/me',{credentials:'same-origin',cache:'no-store'});
   if(session.status===503){setStatus('disabled');return;}
   if(session.status===401){setStatus('signed_out');return;}
   if(!session.ok){setStatus('error');return;}
   const response=await fetch('/api/learning/notes',{credentials:'same-origin',cache:'no-store'});
   if(!response.ok){setStatus('error');return;}
   const result:unknown=await response.json();
   if(!result||typeof result!=='object'||!('notes' in result)||!Array.isArray(result.notes)){setStatus('error');return;}
   setNotes(result.notes as Note[]);setStatus('ready');
  }catch{setStatus('error');}
 },[]);
 useEffect(()=>{void load();},[load]);
 function select(note:Note){setResourceRef(note.resourceRef);setContent(note.content);setVersion(note.version);setFeedback('Editing saved note version '+note.version);}
 async function save(){
  setBusy(true);setFeedback('');
  try{
   const response=await fetch('/api/learning/notes',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({resourceRef,content,...(version===undefined?{}:{expectedVersion:version})})});
   if(response.status===401){setStatus('signed_out');return;}
   if(response.status===409){setFeedback('Conflict: reload notes before editing. Your draft remains in this form.');return;}
   if(!response.ok){setFeedback('Save was not confirmed. Your draft remains in this form.');return;}
   const result=await response.json() as {note?:Note};
   if(result.note){setVersion(result.note.version);setFeedback('Saved and verified by the learning API.');await load();}
   else setFeedback('Save response was incomplete.');
  }catch{setFeedback('Network failure. Your draft remains in this form.');}
  finally{setBusy(false);}
 }
 return <section aria-label="Persistent learning journal" style={{marginTop:32,padding:20,border:'1px solid #c9ded3',borderRadius:12,background:'white'}}>
  <h2>My learning journal</h2>
  {status==='checking'&&<p role="status">Checking secure learner access…</p>}
  {status==='disabled'&&<p role="status">Persistent journal is not enabled in this environment. No note has been saved. The architecture preview remains available.</p>}
  {status==='signed_out'&&<p>Sign in to use your private journal. <Link href="/learn/sign-in">Sign in</Link></p>}
  {status==='error'&&<p role="alert">Journal is unavailable. No persistence is claimed. <button type="button" onClick={()=>void load()}>Retry</button></p>}
  {status==='ready'&&<>
   <p>Private notes are stored only after a successful authenticated API response. Choose an existing note or start a new resource.</p>
   <label style={{display:'block',marginTop:12}}>Resource reference<input style={{display:'block',width:'100%',padding:9}} value={resourceRef} maxLength={200} onChange={e=>{setResourceRef(e.target.value);setVersion(undefined);}} /></label>
   <label style={{display:'block',marginTop:12}}>Learning note<textarea style={{display:'block',width:'100%',minHeight:140,padding:10}} value={content} maxLength={20000} onChange={e=>setContent(e.target.value)}/></label>
   <div style={{display:'flex',gap:10,marginTop:12}}><button type="button" disabled={busy||!content.trim()} onClick={()=>void save()}>{busy?'Saving…':version?'Update note':'Save note'}</button><button type="button" disabled={busy} onClick={()=>{setContent('');setVersion(undefined);setResourceRef('journal/general');setFeedback('New draft. Nothing saved yet.');}}>New draft</button><button type="button" disabled={busy} onClick={()=>void load()}>Reload</button></div>
   <p role="status" aria-live="polite">{feedback}</p>
   <h3>Saved notes</h3>
   {notes.length===0?<p>No saved notes.</p>:<ul>{notes.map(n=><li key={n.id}><button type="button" onClick={()=>select(n)}>{n.resourceRef} — version {n.version} ({new Date(n.updatedAt).toLocaleDateString()})</button></li>)}</ul>}
  </>}
 </section>;
}
