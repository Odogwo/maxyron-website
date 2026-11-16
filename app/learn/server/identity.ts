/**
 * Trusted learner identity boundary. No provider is connected in this preview.
 * An adapter must validate issuer, audience, signature, expiry and session state.
 */
export type VerifiedLearner = Readonly<{
 learnerId:string;
 providerSubject:string;
 sessionExpiresAt:string;
}>;
export type LearnerIdentityResult =
 | Readonly<{authenticated:true;learner:VerifiedLearner}>
 | Readonly<{authenticated:false;reason:'not_configured'|'unauthenticated'|'expired'}>;
export interface LearnerIdentityAdapter {
 resolve(request:Request):Promise<LearnerIdentityResult>;
}
/** Deny by default. Never derive identity from request JSON or headers. */
export const disabledLearnerIdentity: LearnerIdentityAdapter = {
 async resolve(_request:Request):Promise<LearnerIdentityResult>{
  return {authenticated:false,reason:'not_configured'};
 }
};
