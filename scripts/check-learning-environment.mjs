import assert from 'node:assert/strict';
const enabled=process.env.LEARNING_BACKEND_ENABLED==='true';
const required=['LEARNING_AUTH_ISSUER','LEARNING_AUTH_AUDIENCE','LEARNING_AUTH_JWKS_URL','LEARNING_DATABASE_URL'];
if(!enabled){
 console.log('PASS: learner backend remains disabled; no credentials required.');
 process.exit(0);
}
const missing=required.filter(name=>!process.env[name]);
if(missing.length){
 console.error('FAIL: backend requested but required configuration missing: '+missing.join(', '));
 process.exit(1);
}
for(const name of required){
 assert.ok(!name.startsWith('NEXT_PUBLIC_'));
}
const issuer=new URL(process.env.LEARNING_AUTH_ISSUER);
const jwks=new URL(process.env.LEARNING_AUTH_JWKS_URL);
const database=new URL(process.env.LEARNING_DATABASE_URL);
if(issuer.protocol!=='https:'||jwks.protocol!=='https:'||!['postgres:','postgresql:'].includes(database.protocol)){
 console.error('FAIL: issuer/JWKS must use HTTPS and database must use PostgreSQL.');
 process.exit(1);
}
if(!database.searchParams.has('sslmode')||database.searchParams.get('sslmode')!=='verify-full'){
 console.error('FAIL: PostgreSQL connection must use sslmode=verify-full.');
 process.exit(1);
}
console.log('PASS: required backend configuration is present and passes basic URL checks; no connectivity/authentication tested.');
