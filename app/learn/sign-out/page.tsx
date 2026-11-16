'use client';
import {useState} from 'react';
import {learningAuthClient} from '../auth-client';
export default function LearningSignOut(){
 const [busy,setBusy]=useState(false),[error,setError]=useState('');
 async function signOut(){
  setBusy(true);setError('');
  try{
   const result=await learningAuthClient.signOut();
   if(result.error){setError('Could not confirm sign-out. Please try again.');return;}
   window.location.assign('/learn/sign-in');
  }catch{setError('Sign-out is currently unavailable.');}
  finally{setBusy(false);}
 }
 return <main style={{maxWidth:480,margin:'4rem auto',padding:'1rem'}}><h1>MAXYRON Learning — Sign out</h1><p>End the current learner session.</p><button type="button" disabled={busy} onClick={signOut}>{busy?'Signing out…':'Sign out'}</button>{error&&<p role="alert">{error}</p>}</main>;
}
