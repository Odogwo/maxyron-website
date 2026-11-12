import 'server-only';
/** No secret values, connection strings or internal service hostnames are returned. */
export type ReadinessCheck={name:string;ready:boolean};
export function inspectLearningReadiness(env:NodeJS.ProcessEnv=process.env):{ready:boolean;checks:ReadinessCheck[]}{
 const authUrl=env.NEON_AUTH_BASE_URL;
 let authUrlValid=false;
 try{if(authUrl){const url=new URL(authUrl);authUrlValid=url.protocol==='https:'&&Boolean(url.hostname)&&!url.username&&!url.password&&!url.search&&!url.hash;}}catch{}
 const db=env.LEARNING_DATABASE_URL;
 let dbValid=false;
 try{
  if(db){const url=new URL(db);dbValid=['postgres:','postgresql:'].includes(url.protocol)&&Boolean(url.hostname)&&Boolean(url.username)&&url.searchParams.get('sslmode')==='verify-full';}
 }catch{}
 const checks:ReadinessCheck[]=[
  {name:'backend_enabled',ready:env.LEARNING_BACKEND_ENABLED==='true'},
  {name:'https_auth_base_url',ready:authUrlValid},
  {name:'auth_cookie_secret',ready:typeof env.NEON_AUTH_COOKIE_SECRET==='string'&&env.NEON_AUTH_COOKIE_SECRET.length>=32},
  {name:'verified_tls_database_url',ready:dbValid},
  {name:'development_only_activation',ready:env.LEARNING_DEPLOYMENT_TIER==='development'},
 ];
 return {ready:checks.every(c=>c.ready),checks};
}
