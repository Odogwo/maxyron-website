# MAXYRON Learning — Trusted Session Integration Gate

Status: DESIGN GATE; NOT DEPLOYED. Development branch only.

## Verified infrastructure
- Neon Auth Better Auth is provisioned on Neon development branch `br-empty-bar-zan6axg9`, database `neondb`.
- Provider endpoint: `https://ep-summer-leaf-zaw44ju4.neonauth.c-2.eu-west-2.aws.neon.tech/neondb/auth`.
- JWKS endpoint: `https://ep-summer-leaf-zaw44ju4.neonauth.c-2.eu-west-2.aws.neon.tech/neondb/auth/.well-known/jwks.json`.
- Email verification required and password reset revokes sessions (provider config read-back verified).
- `learning` runtime database role is non-owner and has no BYPASSRLS privilege.
- Website endpoints `/api/learning/me`, `/api/learning/notes`, `/api/learning/events` remain fail-closed.

## Unresolved protocol details — verify before implementation
1. Determine supported Neon Auth Next.js SDK and documented server-side session-validation mechanism; do not assume browser cookies are JWTs or that JWKS alone validates active sessions.
2. Establish exact token issuer, audience, signature algorithm, subject and expiration semantics from the configured provider, and whether tokens are revoked on logout/reset. Never set a guessed audience as production truth.
3. Establish verified preview website origin and trusted redirect URI allowlist; currently no trusted origins configured. Localhost is currently allowed only in the development auth branch.
4. Map provider subject to `learning.users.id` UUID on the trusted server, never from a user-controlled request field. Define idempotent provisioning and collision handling.
5. Use one database transaction per learner request, set verified learner ID only inside that transaction after server verification, enforce RLS and ensure connections cannot leak identity across pooled requests.
6. Narrow database grants, apply reviewed owner policies, and test unauthenticated access, expired/revoked sessions, forged identity, cross-user read/write, connection reuse and replay.

## Release gate
Do not enable learner login or persistent notes until all six items have tested evidence. Provider provisioning, claim-shape tests, and green website CI are not evidence of live session verification.
