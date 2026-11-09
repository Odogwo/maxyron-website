'use client';
import {useState} from 'react';
import Link from 'next/link';
import {learningAuthClient} from '../auth-client';
export default function LearningSignIn(){
 const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 async function submit(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();setBusy(true);setError('');
  try{
   const response=await learningAuthClient.signIn.email({email,password});
   if(response.error){setError('Sign-in failed. Verify your account and credentials.');return;}
   window.location.assign('/learn');
  }catch{setError('Authentication is unavailable in this environment.');}
  finally{setBusy(false);}
 }
 return <main style={{maxWidth:480,margin:'4rem auto',padding:'1rem'}}><h1>MAXYRON Learning — Sign in</h1><p>Development authentication is unavailable until the secure backend is enabled.</p><form onSubmit={submit}><label>Email<input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label><button disabled={busy} type="submit">{busy?'Signing in…':'Sign in'}</button></form>{error&&<p role="alert">{error}</p>}<p><Link href="/learn">Return to Learning</Link></p></main>;
}
