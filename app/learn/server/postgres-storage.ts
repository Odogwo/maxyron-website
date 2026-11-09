import 'server-only';
import { Pool, type PoolClient } from 'pg';
import { randomUUID } from 'node:crypto';
import type { VerifiedLearner } from './identity';
import type { LearnerStorage, StoredLearnerNote, StoredLearningEvent } from './storage';
import type { LearnerNoteInput, LearningEventInput } from '../data-contracts';
let pool:Pool|undefined;
function getPool():Pool {
 const url=process.env.LEARNING_DATABASE_URL;
 if(process.env.LEARNING_BACKEND_ENABLED!=='true'||!url||!url.includes('sslmode=verify-full')) throw new Error('learner_database_unavailable');
 return pool??(pool=new Pool({connectionString:url,max:5,connectionTimeoutMillis:5000,idleTimeoutMillis:10000}));
}
async function inLearnerTransaction<T>(learner:VerifiedLearner,action:(client:PoolClient)=>Promise<T>):Promise<T> {
 const client=await getPool().connect();
 try {
  await client.query('BEGIN');
  await client.query('SELECT set_config($1,$2,true),set_config($3,$4,true)', ['app.verified_user_id',learner.learnerId,'app.verified_subject',learner.providerSubject]);
  await client.query('INSERT INTO learning.users(id,auth_subject) VALUES($1,$2) ON CONFLICT (auth_subject) DO NOTHING',[learner.learnerId,learner.providerSubject]);
  const mapped=await client.query('SELECT id FROM learning.users WHERE id=$1 AND auth_subject=$2',[learner.learnerId,learner.providerSubject]);
  if(mapped.rowCount!==1) throw new Error('learner_identity_mapping_failed');
  const result=await action(client);
  await client.query('COMMIT');
  return result;
 } catch(error) {
  await client.query('ROLLBACK');
  throw error;
 } finally {client.release();}
}
const note=(r:any):StoredLearnerNote=>({id:r.id,resourceRef:r.resource_ref,content:r.content,version:r.version,updatedAt:new Date(r.updated_at).toISOString()});
const event=(r:any):StoredLearningEvent=>({id:r.id,resourceRef:r.resource_ref,eventType:r.event_type,occurredAt:new Date(r.occurred_at).toISOString()});
export const postgresLearnerStorage:LearnerStorage={
 async listNotes(learner,resourceRef){
  return inLearnerTransaction(learner,async client=>{
   const r=resourceRef
    ?await client.query('SELECT id,resource_ref,content,version,updated_at FROM learning.learner_notes WHERE user_id=$1 AND resource_ref=$2 ORDER BY updated_at DESC LIMIT 100',[learner.learnerId,resourceRef])
    :await client.query('SELECT id,resource_ref,content,version,updated_at FROM learning.learner_notes WHERE user_id=$1 ORDER BY updated_at DESC LIMIT 100',[learner.learnerId]);
   return r.rows.map(note);
  });
 },
 async saveNote(learner,input:LearnerNoteInput){
  return inLearnerTransaction(learner,async client=>{
   if(input.expectedVersion!==undefined) {
    const current=await client.query('SELECT id FROM learning.learner_notes WHERE user_id=$1 AND resource_ref=$2 ORDER BY updated_at DESC LIMIT 1',[learner.learnerId,input.resourceRef]);
    if(current.rowCount!==1) throw new Error('note_version_conflict');
    const r=await client.query('UPDATE learning.learner_notes SET content=$1,version=version+1,updated_at=now() WHERE id=$2 AND user_id=$3 AND version=$4 RETURNING id,resource_ref,content,version,updated_at',[input.content,current.rows[0].id,learner.learnerId,input.expectedVersion]);
    if(r.rowCount!==1) throw new Error('note_version_conflict');
    return note(r.rows[0]);
   }
   const r=await client.query('INSERT INTO learning.learner_notes(id,user_id,resource_ref,content) VALUES($1,$2,$3,$4) RETURNING id,resource_ref,content,version,updated_at',[randomUUID(),learner.learnerId,input.resourceRef,input.content]);
   return note(r.rows[0]);
  });
 },
 async recordEvent(learner,input:LearningEventInput){
  return inLearnerTransaction(learner,async client=>{
   const r=await client.query('INSERT INTO learning.learning_events(id,user_id,resource_ref,event_type,idempotency_key,occurred_at,payload) VALUES($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (user_id,idempotency_key) DO NOTHING RETURNING id,resource_ref,event_type,occurred_at',[randomUUID(),learner.learnerId,input.resourceRef,input.eventType,input.idempotencyKey,input.occurredAt,JSON.stringify(input.payload)]);
   if(r.rowCount===1) return event(r.rows[0]);
   const existing=await client.query('SELECT id,resource_ref,event_type,occurred_at FROM learning.learning_events WHERE user_id=$1 AND idempotency_key=$2',[learner.learnerId,input.idempotencyKey]);
   if(existing.rowCount!==1) throw new Error('event_idempotency_failed');
   return event(existing.rows[0]);
  });
 }
};
