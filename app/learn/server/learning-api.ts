import { NextResponse } from 'next/server';
import { resolveNeonLearner, learningConfigured } from './neon-session';
import { postgresLearnerStorage } from './postgres-storage';
import { validateLearnerNoteInput, validateLearningEventInput } from '../data-contracts';
export const noStore={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
const respond=(body:unknown,status:number)=>NextResponse.json(body,{status,headers:noStore});
export async function handleLearningRequest(kind:'me'|'notes'|'events',method:'GET'|'POST',request:Request){
 if(!learningConfigured()) return respond({error:'learner_backend_not_configured'},503);
 const identity=await resolveNeonLearner();
 if(!identity.authenticated) return respond({error:identity.reason==='not_configured'?'learner_backend_not_configured':'unauthenticated'},identity.reason==='not_configured'?503:401);
 const learner=identity.learner;
 try{
  if(kind==='me') return respond({learnerId:learner.learnerId,sessionExpiresAt:learner.sessionExpiresAt},200);
  if(kind==='notes'&&method==='GET'){
   const url=new URL(request.url);
   const ref=url.searchParams.get('resourceRef')??undefined;
   if(ref && !/^[a-z0-9][a-z0-9/_-]{0,199}$/.test(ref)) return respond({error:'invalid_resource_ref'},400);
   return respond({notes:await postgresLearnerStorage.listNotes(learner,ref)},200);
  }
  const length=Number(request.headers.get('content-length')||0);
  if(length>32768) return respond({error:'request_too_large'},413);
  let body:unknown;
  try {body=await request.json();}catch{return respond({error:'invalid_json'},400);}
  if(kind==='notes'&&method==='POST'){
   const result=validateLearnerNoteInput(body);
   if(!result.ok) return respond({error:'invalid_note',details:result.errors},400);
   try{return respond({note:await postgresLearnerStorage.saveNote(learner,result.value)},200);}
   catch(e){if(e instanceof Error&&e.message==='note_version_conflict') return respond({error:'note_version_conflict'},409);throw e;}
  }
  if(kind==='events'&&method==='POST'){
   const result=validateLearningEventInput(body);
   if(!result.ok) return respond({error:'invalid_event',details:result.errors},400);
   return respond({event:await postgresLearnerStorage.recordEvent(learner,result.value)},200);
  }
  return respond({error:'method_not_allowed'},405);
 }catch{return respond({error:'learner_operation_failed'},503);}
}
