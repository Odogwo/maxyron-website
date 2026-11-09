/** Strict claim-shape validation AFTER trusted signature and session verification.
 * This module never verifies a JWT or authenticates a request by itself.
 */
export type VerifiedSessionClaims = Readonly<{
 subject:string;
 issuer:string;
 audience:string;
 expiresAt:number;
 issuedAt:number;
}>;
export type ExpectedSessionClaims = Readonly<{issuer:string;audience:string}>;
export function validateVerifiedSessionClaims(
 claims:unknown,expected:ExpectedSessionClaims,nowSeconds:number
):VerifiedSessionClaims|null {
 if(!claims||typeof claims!=='object'||Array.isArray(claims)) return null;
 const c=claims as Record<string,unknown>;
 if(typeof c.sub!=='string'||!c.sub.trim()||c.sub.length>512) return null;
 if(c.iss!==expected.issuer) return null;
 if(typeof c.aud!=='string'||c.aud!==expected.audience) return null;
 if(typeof c.exp!=='number'||!Number.isSafeInteger(c.exp)||c.exp<=nowSeconds) return null;
 if(typeof c.iat!=='number'||!Number.isSafeInteger(c.iat)||c.iat>nowSeconds+60||c.iat>c.exp) return null;
 if(c.nbf!==undefined&&(typeof c.nbf!=='number'||!Number.isSafeInteger(c.nbf)||c.nbf>nowSeconds)) return null;
 return {subject:c.sub,issuer:c.iss as string,audience:c.aud,expiresAt:c.exp,issuedAt:c.iat};
}
