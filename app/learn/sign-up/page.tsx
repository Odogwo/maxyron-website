'use client';
import {useState} from 'react';
import {learningAuthClient} from '../auth-client';
export default function LearningSignUp(){
 const [name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[message,setMessage]=useState(''),[busy,setBusy]=useState(false);
 async function submit(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();setBusy(true);setMessage('');
  try{
   const result=await learningAuthClient.signUp.email({name,email,password});
   setMessage(result.error?'Registration unavailable or rejected.':'Registration submitted. Complete email verification before signing in.');
  }catch{setMessage('Registration is unavailable in this environment.');}
  finally{setBusy(false);}
 }
 return <main style={{maxWidth:480,margin:'4rem auto',padding:'1rem'}}><h1>MAXYRON Learning — Register</h1><form onSubmit={submit}><label>Name<input required value={name} onChange={e=>setName(e.target.value)}/></label><label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input required type="password" minLength={12} value={password} onChange={e=>setPassword(e.target.value)}/></label><button disabled={busy}>{busy?'Submitting…':'Register'}</button></form>{message&&<p role="status">{message}</p>}</main>;
}
