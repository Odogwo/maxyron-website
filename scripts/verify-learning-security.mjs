import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = p => readFileSync(p,'utf8');
const initial = read('db/learning/001_initial.sql');
const policies = read('db/learning/002_owner_policies.sql');
const endpoints = ['me','notes','events'];
for(const name of endpoints){
 const code = read('app/api/learning/'+name+'/route.ts');
 assert.match(code,/status:503/,'Fail-closed status missing: '+name);
 assert.match(code,/no-store/,'Private API caching must be disabled: '+name);
 assert.doesNotMatch(code,/process\.env\.|DATABASE_URL|service_role/i,'Unexpected secret/database access in scaffold: '+name);
}
for(const table of ['users','enrollments','learner_notes','learning_events']){
 assert.match(initial,new RegExp('ALTER TABLE learning\\.'+table+' ENABLE ROW LEVEL SECURITY'),'RLS missing: '+table);
}
assert.match(policies,/current_setting\('app\.verified_user_id'/);
assert.match(policies,/WITH CHECK \(user_id = learning\.current_user_id\(\)\)/);
assert.match(initial,/UNIQUE\(user_id,idempotency_key\)/);
assert.doesNotMatch(policies,/^\\s*ALTER TABLE .* DISABLE ROW LEVEL SECURITY|^\\s*ALTER ROLE .* BYPASSRLS/im);
console.log('PASS: fail-closed learner API scaffold, RLS declarations, owner policy templates and idempotency constraint.');
