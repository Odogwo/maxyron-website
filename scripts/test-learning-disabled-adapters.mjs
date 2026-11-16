import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
const require=createRequire(import.meta.url);
const ts=require('typescript');
function load(path){
 const code=ts.transpileModule(readFileSync(path,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const exports={};
 runInNewContext(code,{exports,Error,Promise});
 return exports;
}
const identity=load('app/learn/server/identity.ts');
const storage=load('app/learn/server/storage.ts');
for(const request of [{headers:{'x-user-id':'attacker'}},{body:{learnerId:'attacker'}},{}]){
 const result=await identity.disabledLearnerIdentity.resolve(request);
 assert.equal(result.authenticated,false,'unconfigured adapter must deny access');
 assert.equal(result.reason,'not_configured','deny reason must be explicit');
}
const forgedLearner={learnerId:'attacker',providerSubject:'unverified',sessionExpiresAt:'2099-01-01T00:00:00Z'};
for(const [method,args] of [
 ['listNotes',[forgedLearner]],
 ['saveNote',[forgedLearner,{resourceRef:'linux/intro',content:'unsafe'}]],
 ['recordEvent',[forgedLearner,{resourceRef:'linux/intro',eventType:'lesson_opened',idempotencyKey:'event_123456',occurredAt:'2026-11-09T07:00:00Z',payload:{}}]]
]){
 await assert.rejects(storage.disabledLearnerStorage[method](...args),err=>err?.name==='LearnerStorageUnavailableError','disabled storage must reject '+method);
}
console.log('PASS: disabled learner identity and storage adapters reject runtime requests.');
