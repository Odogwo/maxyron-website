/** Neon Auth development provider configuration; server-only and fail-closed. */
export type NeonAuthConfiguration = Readonly<{issuer:string;jwksUrl:string;audience:string}>;
export function readNeonAuthConfiguration(env:Record<string,string|undefined>):NeonAuthConfiguration|null {
 if(env.LEARNING_BACKEND_ENABLED!=='true') return null;
 const issuer=env.LEARNING_AUTH_ISSUER?.trim();
 const jwksUrl=env.LEARNING_AUTH_JWKS_URL?.trim();
 const audience=env.LEARNING_AUTH_AUDIENCE?.trim();
 if(!issuer||!jwksUrl||!audience) return null;
 try {
  const base=new URL(issuer);
  const keys=new URL(jwksUrl);
  if(base.protocol!=='https:'||keys.protocol!=='https:'||base.username||base.password||keys.username||keys.password) return null;
  if(base.origin!==keys.origin) return null;
  if(!keys.pathname.startsWith(base.pathname.replace(/\/$/,'')+'/')) return null;
  if(!keys.pathname.endsWith('/.well-known/jwks.json')) return null;
  return {issuer:base.href.replace(/\/$/,''),jwksUrl:keys.href,audience};
 } catch {return null;}
}
/** A valid configuration is not an authenticated user. Never use it as proof of a session. */
