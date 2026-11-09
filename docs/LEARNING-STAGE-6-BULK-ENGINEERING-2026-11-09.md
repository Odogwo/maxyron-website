# MAXYRON Learning — Stage 6A–6G bulk engineering handoff
Date: 2026-11-09. Scope: development only. No production merge or deployment.

## Source audit
- Website: `Odogwo/maxyron-website`, `feature/learning-shell-r1`.
- Database: Neon project `little-butterfly-72114147`; development branch `br-empty-bar-zan6axg9`; production branch `br-fancy-leaf-zaqvjes2` untouched.
- Auth provider: Neon Auth / Better Auth, development only, email verification required. No trusted origins configured. Localhost allowed.
- Existing database: `db/learning/001_initial.sql` applied on development; 5 tables with RLS enabled and no policies at start of this batch.
- Existing `002_owner_policies.sql` is a gated template and has NOT been applied as part of this batch yet.

## Source changes committed (implementation awaiting CI and live validation)
- `app/learn/server/neon-session.ts`: Neon Auth server-side session lookup; require verified email and unexpired session; deterministic internal UUID mapping from trusted provider subject; fail-closed when config missing.
- `app/learn/server/postgres-storage.ts`: restricted-role PostgreSQL pool; one transaction per operation; transaction-local `app.verified_user_id` and `app.verified_subject`; idempotent learner provisioning, notes with optimistic version control, events with idempotency keys.
- `app/learn/server/learning-api.ts`: no-store gated learner endpoints, validated note/event bodies, no user-supplied owner identity.
- `app/api/learning/me/route.ts`, `notes/route.ts`, `events/route.ts`: API integration, default disabled.
- `app/api/auth/[...path]/route.ts`: gated Neon Auth proxy.
- `app/learn/auth-client.ts`, `app/learn/sign-in/page.tsx`, `app/learn/sign-up/page.tsx`: initial sign-in and registration screens. These are not evidence of functioning login.
- `db/learning/003_authenticated_provisioning.sql`: development runtime-role grants and self-provisioning policy; must apply after 002 and only when validated.
- `tests/learning/rls-provisioning.sql`, `scripts/test-learning-persistence-boundaries.mjs`: two-learner database isolation and source-boundary tests. CI updated.
- `package.json`: pin `@neondatabase/auth@0.7.0-beta`, add `pg` and `@types/pg`. All attempted SDK releases rejected Next.js 15 via peer dependency constraints; development-only Next.js 16.4.5 upgrade is now under CI validation. No production upgrade authorized.

## Safety and known constraints
- Runtime must use dedicated `maxyron_learning_runtime_dev` role, NEVER `neondb_owner`.
- RLS GUC values are only secure if server code exclusively controls SQL; never expose raw SQL or database credentials to browsers.
- Session verification relies on the supported Neon Auth server adapter, not untrusted JWT parsing or a client-supplied user ID.
- Neon Auth cookie signing secret must be >=32 random characters; never commit it.
- The development provider has no trusted origin configured, so browser end-to-end login cannot yet be claimed.
- Do not enable `LEARNING_BACKEND_ENABLED` until CI, RLS policy validation, role grants, and actual session/DB tests succeed.
- Auth UI is preliminary; account recovery, sign-out UX and verification flow require end-to-end tests.
- `sessionDataTtl:0` intended to avoid stale session-cache authorization; confirm SDK behavior in integration testing.
- Unverified items remain blockers, not completed deliverables.

## Required final evidence
1. Green GitHub Actions build and Learning Verification workflow for latest source commit.
2. Disposable PostgreSQL provisioning/isolation tests pass.
3. Review and apply 002 and 003 on isolated development branch; verify policies and restricted grants.
4. Configure verified development preview origin and secret in secure deployment settings; no secrets in Git.
5. Real user A and user B sign in and confirm own-note persistence, cross-user denial, expired/revoked session rejection, and reconnect isolation.
6. Final review before any merge or deployment.

## CI dependency incident
Initial SDK install attempts at 0.7.0-beta, 0.5.0-beta and 0.2.0-beta.1 failed with npm ERESOLVE: SDK peer requires Next.js 16 while website used Next.js 15. We did not use --force or --legacy-peer-deps. A Next.js 16 upgrade was committed to the development branch; it is conditional on full route/build/security CI. This is a compatibility intervention, not a validated production upgrade.

## Build and security-test repair log
- Initial Next.js 16 build reached TypeScript and failed because Neon Auth proxy handler requires a route context argument. Fixed by forwarding the Next.js catch-all context to GET/POST handlers.
- Existing `verify-learning-security.mjs` assumed the old disabled route implementation contained inline `status:503` and `no-store`. Updated to assert the shared gated API's `learningConfigured()`, no-store, and server session verification; this preserves the security intent without requiring duplicated guards in each route.
- Restricted development runtime role previously had broad table privileges; migration 003 now explicitly REVOKEs all direct table privileges before granting only required operations.
- New tests and Next.js build remain subject to the latest CI result; do not report green until read back.

## Latest CI evidence
- GitHub MAXYRON Website CI run `42615659707` passed after Next.js 16 upgrade and Neon Auth handler context fix.
- Learning Website Verification run `42615659535` failed in PostgreSQL tests because the first RLS test left schema/policies committed, and the second test attempted to recreate the same function. Test runner corrected to use a separate disposable database for the provisioning test; rerun required.

## CSRF and data input guard
All learner POST operations now require an Origin header exactly matching the request origin; cross-origin and missing-origin POSTs fail closed with HTTP 403. JSON request bodies are length-limited and validated before database writes. This is a source-level implementation and must still be exercised by integration tests.

## Verified Stage 6 results — development only
- Latest code commit `0bd27732807f526e5978053d831d3131ed0b0b8c`: GitHub Learning Website Verification run `42616014154` **success**, MAXYRON Website CI run `42616014145` **success**. Includes CSRF origin guard, Next.js 16 compatibility, API/storage code and PostgreSQL test suite.
- On Neon development branch `br-empty-bar-zan6axg9`, applied `002_owner_policies.sql` and `003_authenticated_provisioning.sql` equivalent statements in a single transaction. Production branch not targeted.
- Neon read-back: six RLS policies (users SELECT/INSERT, enrollments SELECT, notes ALL, events SELECT/INSERT). Runtime grants narrowed to users SELECT/INSERT; enrollments SELECT; notes SELECT/INSERT/UPDATE; events SELECT/INSERT; no course access and no DELETE grants.
- Runtime role `maxyron_learning_runtime_dev` read-back: `rolsuper=false`, `rolbypassrls=false`, `rolcreaterole=false`.
- Development database `learning.users`, `learning.learner_notes`, `learning.learning_events` have zero records. Unauthenticated runtime role sees zero users and notes.
- Disposable CI PostgreSQL tests cover two-user RLS isolation, forged ownership, anonymous deny, and event idempotency. They do not substitute for real Neon Auth browser sessions.

## Remaining release blockers
1. Configure exact development preview trusted origin in Neon Auth and secure deployment variables `NEON_AUTH_BASE_URL`, `NEON_AUTH_COOKIE_SECRET`, `LEARNING_DATABASE_URL` using the restricted role; do not enable production.
2. Verify Neon Auth SDK `getSession()` behavior and revocation under live browser login/logout/email verification. A real session has not yet been exercised.
3. Run two authenticated browser users through note create/read/update, event submission, cross-user denial, expired/revoked session, and pooled-connection isolation against the isolated development database.
4. Verify deployment platform's secret handling and same-origin behavior; ensure no owner credentials in the application.
5. Review Next.js 16 upgrade compatibility and final security review before any merge or production deployment.

## Stage 6H — development activation safeguards
- Added `app/learn/server/learning-readiness.ts` with strict HTTPS auth URL, nonempty verified-TLS PostgreSQL URL, >=32-character cookie secret, enabled flag and explicit `LEARNING_DEPLOYMENT_TIER=development` gate.
- `learningConfigured()` now delegates to the same readiness gate; production tier cannot activate learner persistence using this branch's code.
- Added `/api/learning/readiness`: reports only boolean readiness checks; no secret values or connection URLs. Returns HTTP 503 when incomplete and disables caching.
- Added source-level readiness checks to Learning Website Verification CI and updated example environment file.
- No actual hosting secrets or trusted preview origin were supplied through the available connectors. No browser accounts or external emails were created. No login or end-to-end persistence claims.
- Activation remains blocked until a real development deployment with securely injected secrets and exact trusted origin is available.

## Stage 6I — learner data integrity
- Implemented uniqueness of one learner note per resource. Concurrent first-write attempts use `ON CONFLICT (user_id,resource_ref) DO NOTHING` and return an explicit note version conflict; subsequent writes require an expected version.
- Added migration `db/learning/004_note_uniqueness.sql`. Applied unique index to the isolated Neon development branch and read-back verified its definition; production unchanged.
- Reusing an event idempotency key with different resource, type, occurrence time or payload now raises `event_idempotency_conflict` and maps to HTTP 409 rather than silently accepting a different event.
- Added `scripts/test-learning-integrity.mjs` to Learning Verification CI. These are static boundary checks; live concurrent request and two-browser-user tests remain required.
- Stage 6H CI results: Website run `42616980561` passed; Learning Verification run `42616980651` passed.
