/**
 * Shared learner-data request contracts. Validation is necessary but never
 * substitutes for server-verified identity and ownership authorization.
 */
export const MAX_NOTE_LENGTH = 20_000;
export const MAX_RESOURCE_REF_LENGTH = 200;
export const MAX_IDEMPOTENCY_KEY_LENGTH = 128;
export const MAX_EVENT_PAYLOAD_BYTES = 4_096;

export type LearnerNoteInput = Readonly<{resourceRef:string;content:string;expectedVersion?:number}>;
export type LearningEventInput = Readonly<{resourceRef:string;eventType:'lesson_opened'|'recall_submitted'|'lesson_completed';idempotencyKey:string;occurredAt:string;payload:Record<string,unknown>}>;
export type ValidationResult<T> = {ok:true;value:T}|{ok:false;errors:string[]};
const isRecord=(value:unknown):value is Record<string,unknown>=>typeof value==='object'&&value!==null&&!Array.isArray(value);
const resourceRefOk=(value:unknown):value is string=>typeof value==='string'&&value.length>0&&value.length<=MAX_RESOURCE_REF_LENGTH&&/^[a-z0-9][a-z0-9/_-]*$/.test(value)&&!value.includes('..')&&!value.includes('//');
export function validateLearnerNoteInput(value:unknown):ValidationResult<LearnerNoteInput>{
 const errors:string[]=[];
 if(!isRecord(value))return {ok:false,errors:['body must be an object']};
 if(!resourceRefOk(value.resourceRef))errors.push('invalid resourceRef');
 if(typeof value.content!=='string'||value.content.length>MAX_NOTE_LENGTH)errors.push('invalid note content');
 if(value.expectedVersion!==undefined&&(!Number.isSafeInteger(value.expectedVersion)||Number(value.expectedVersion)<1))errors.push('invalid expectedVersion');
 if(Object.keys(value).some(k=>!['resourceRef','content','expectedVersion'].includes(k)))errors.push('unexpected field');
 if(errors.length)return {ok:false,errors};
 return {ok:true,value:{resourceRef:value.resourceRef as string,content:value.content as string,...(value.expectedVersion===undefined?{}:{expectedVersion:value.expectedVersion as number})}};
}
export function validateLearningEventInput(value:unknown):ValidationResult<LearningEventInput>{
 const errors:string[]=[];
 if(!isRecord(value))return {ok:false,errors:['body must be an object']};
 if(!resourceRefOk(value.resourceRef))errors.push('invalid resourceRef');
 const allowed=['lesson_opened','recall_submitted','lesson_completed'];
 if(typeof value.eventType!=='string'||!allowed.includes(value.eventType))errors.push('invalid eventType');
 if(typeof value.idempotencyKey!=='string'||value.idempotencyKey.length<8||value.idempotencyKey.length>MAX_IDEMPOTENCY_KEY_LENGTH||!/^[a-zA-Z0-9_-]+$/.test(value.idempotencyKey))errors.push('invalid idempotencyKey');
 if(typeof value.occurredAt!=='string'||!/^\d{4}-\d{2}-\d{2}T/.test(value.occurredAt)||!Number.isFinite(Date.parse(value.occurredAt)))errors.push('invalid occurredAt');
 if(!isRecord(value.payload)||JSON.stringify(value.payload).length>MAX_EVENT_PAYLOAD_BYTES)errors.push('invalid payload');
 if(Object.keys(value).some(k=>!['resourceRef','eventType','idempotencyKey','occurredAt','payload'].includes(k)))errors.push('unexpected field');
 if(errors.length)return {ok:false,errors};
 return {ok:true,value:{resourceRef:value.resourceRef as string,eventType:value.eventType as LearningEventInput['eventType'],idempotencyKey:value.idempotencyKey as string,occurredAt:value.occurredAt as string,payload:value.payload as Record<string,unknown>}};
}
