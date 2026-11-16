import 'server-only';
import { createNeonAuth } from '@neondatabase/auth/next/server';
import { createHash } from 'node:crypto';
import { inspectLearningReadiness } from './learning-readiness';
import type { VerifiedLearner, LearnerIdentityResult } from './identity';
/** Provider session is checked server-side for every learner operation.
 * No client-supplied subject or user ID is trusted.
 */
export function learningConfigured(env:NodeJS.ProcessEnv=process.env):boolean {
 return inspectLearningReadiness(env).ready;
}
export function learnerUuid(subject:string):string {
 const hash=createHash('sha256').update('maxyron-learning:neon-auth:v1:').update(subject).digest('hex');
 return hash.slice(0,8)+'-'+hash.slice(8,12)+'-8'+hash.slice(13,16)+'-a'+hash.slice(17,20)+'-'+hash.slice(20,32);
}
export async function resolveNeonLearner():Promise<LearnerIdentityResult> {
 if(!learningConfigured()) return {authenticated:false,reason:'not_configured'};
 try {
  const auth=createNeonAuth({baseUrl:process.env.NEON_AUTH_BASE_URL!,cookies:{secret:process.env.NEON_AUTH_COOKIE_SECRET!,sessionDataTtl:0}});
  const response=await auth.getSession();
  const user=response.data?.user;
  const session=response.data?.session;
  if(response.error || !user || !session || user.emailVerified!==true || typeof user.id!=='string' || !user.id || !session.expiresAt) return {authenticated:false,reason:'unauthenticated'};
  const expiry=new Date(session.expiresAt).getTime();
  if(!Number.isFinite(expiry)||expiry<=Date.now()) return {authenticated:false,reason:'expired'};
  const learner:VerifiedLearner={learnerId:learnerUuid(user.id),providerSubject:user.id,sessionExpiresAt:new Date(expiry).toISOString()};
  return {authenticated:true,learner};
 } catch {
  return {authenticated:false,reason:'unauthenticated'};
 }
}
