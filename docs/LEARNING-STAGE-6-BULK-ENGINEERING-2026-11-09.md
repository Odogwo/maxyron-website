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
