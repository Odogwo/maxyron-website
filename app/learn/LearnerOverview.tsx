'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
type Overview={state:'checking'|'disabled'|'signed_out'|'ready'|'error';noteCount:number};
export default function LearnerOverview(){
 const [view,setView]=useState<Overview>({state:'checking',noteCount:0});
 useEffect(()=>{
  let cancelled=false;
  async function check(){
   try{
    const identity=await fetch('/api/learning/me',{cache:'no-store',credentials:'same-origin'});
    if(cancelled)return;
    if(identity.status===503){setView({state:'disabled',noteCount:0});return;}
    if(identity.status===401){setView({state:'signed_out',noteCount:0});return;}
    if(!identity.ok){setView({state:'error',noteCount:0});return;}
    const response=await fetch('/api/learning/notes',{cache:'no-store',credentials:'same-origin'});
    if(!response.ok){if(!cancelled)setView({state:'error',noteCount:0});return;}
    const data:unknown=await response.json();
    if(!data||typeof data!=='object'||!('notes' in data)||!Array.isArray(data.notes))throw Error('invalid_response');
    if(!cancelled)setView({state:'ready',noteCount:data.notes.length});
   }catch{if(!cancelled)setView({state:'error',noteCount:0});}
  }
  void check();return ()=>{cancelled=true;};
 },[]);
 return <section aria-label="Learner account overview" style={{border:'1px solid #c9ded3',borderRadius:12,background:'white',padding:20,margin:'24px 0'}}>
  <h2>My learning account</h2>
  {view.state==='checking'&&<p role="status">Checking learner session…</p>}
  {view.state==='disabled'&&<p>Personalized learning is not enabled in this environment. The workspace below remains an architecture preview.</p>}
  {view.state==='signed_out'&&<p><Link href="/learn/sign-in">Sign in</Link> to view your private journal.</p>}
  {view.state==='error'&&<p role="alert">Personal learning data is currently unavailable. No saved progress is claimed.</p>}
  {view.state==='ready'&&<><p><strong>{view.noteCount}</strong> saved journal notes returned by the learning API (up to 100 most recent).</p><p><Link href="/learn/journal">Open private journal</Link> · <Link href="/learn/sign-out">Sign out</Link></p></>}
 </section>;
}
