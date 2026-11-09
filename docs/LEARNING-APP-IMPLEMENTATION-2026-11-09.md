# MAXYRON Learning website — architecture implementation handoff
Date: 2026-11-09
Branch: `feature/learning-shell-r1`
Status: source implementation, build and browser acceptance unverified.

## Scope and source authority
The corporate Next.js 15 website remains in `Odogwo/maxyron-website`; existing homepage remains unchanged. The learning specification, systems reconstruction extension and Code Intelligence Bank extension are canonical in `Odogwo/maxyron-csem/Meta-System/`. Infrastructure governance remains in `maxyron-infrastructure`.

## Implemented in development branch
- `app/learn/layout.tsx`: learning shell with shared top navigation, sidebar and content region.
- `app/learn/areas.ts`: typed, single-source registry of nine learning areas and their UI sections and intended journeys.
- `app/learn/page.tsx`: dashboard shell with navigable cards.
- `app/learn/[area]/page.tsx`: dynamic area routes; `generateStaticParams`, metadata and unknown-route 404.
- `app/learn/learning.module.css`: responsive CSS module.
- Learning route metadata disallows indexing while preview status is in effect.
The learning area routes are /learn/courses, /learn/concepts, /learn/memory, /learn/laboratory, /learn/systems, /learn/code-bank, /learn/assessments, /learn/mastery and /learn/journal.

## Explicitly not implemented
No authentication, learner accounts, database, server APIs, session persistence, flashcard scheduling, command execution, quizzes, simulation engine, mastery promotion, credentials, production deployment or live navigation link from corporate homepage. No build, lint, browser or CI result was available in this operation.

## Next engineering steps
1. Check build, lint and responsive keyboard navigation in a disposable local checkout or CI.
2. Replace generic route modules with shared real interface components and local non-sensitive demonstration state.
3. Choose application ownership and authenticated backend boundaries; avoid storing learner secrets in the public website.
4. Implement persisted session/lesson vertical slice with API contracts and authorization.
5. Verify deployment in preview, then obtain approval before production integration.
6. Preserve content-specific development for later; continue website structure first.

## Guardrails
No changes to `main` or the production homepage in this stage. Branch-only source changes do not prove deployment. Preserve canonical educational and infrastructure authority. Never expose private ELAB runtime details or keys.

## Increment — reusable interactive workspace component
Added `app/learn/WorkspacePreview.tsx` and wired it to all nine dynamic area pages. The client-side module selector, controlled notes textarea, draft-length check, clear action and accessible feedback are demonstrable UI behaviors only. Notes are ephemeral and intentionally not persisted. Responsive module navigation and focus-visible styling were added to `app/learn/learning.module.css`. This is UI scaffolding, not an assessment engine or database. Pending: build/lint/browser verification, backend architecture and identity boundaries.

## Verification gate and review PR
Added `scripts/verify-learning-shell.mjs` for route registry and component-contract smoke assertions, and `.github/workflows/learning-verification.yml` for Node 22 installation, smoke checks, TypeScript `--noEmit` and Next.js production build. Since no package-lock was found in inspected main, CI uses `npm install` rather than `npm ci`; generate and commit a reproducible lockfile before production approval. Draft PR: https://github.com/Odogwo/maxyron-website/pull/1. At initial check, no associated GitHub Actions workflow runs were returned and Vercel status was pending. Thus no build or deploy success is asserted. Do not merge without successful independent checks.

## Read-only API and backend boundary scaffold
Added public read-only `/api/learning/catalog` and `/api/learning/health` Next.js route handlers. They return static architectural metadata, explicitly state preview status, and do not accept writes or expose learner data. Added `docs/LEARNING-DATA-AND-IDENTITY-BOUNDARIES.md` to define proposed identity, persistence, authorization, privacy and migration gates before real learner records. Updated Learning CI path triggers for the API. These changes do not establish authentication or persistence. The earlier corporate build audit succeeded and Learning workflow's route/TypeScript checks succeeded while its build was still running at observation time; new commits require fresh verification.

## Authenticated workflow foundation
Previous commit `02a4f4d` returned successful Vercel and two successful GitHub Actions workflows. New branch work adds PostgreSQL schema draft `db/learning/001_initial.sql` and explicitly unavailable, no-write learner API endpoints `/api/learning/me`, `/api/learning/notes` and `/api/learning/events`. Security design in `docs/LEARNING-AUTHENTICATED-VERTICAL-SLICE.md`. The SQL has not been applied and identity/storage are not connected. New commits require fresh CI verification.

## Security verification and RLS policy design
Prior commit `7200ab8` passed Vercel and two GitHub Actions runs. Added draft owner policies `db/learning/002_owner_policies.sql`, source-level checks `scripts/verify-learning-security.mjs`, and `docs/LEARNING-SECURITY-TEST-PLAN.md`. CI now executes the security source checks. These are design/static checks only; no SQL migration, authenticated runtime or integration isolation test has run. New commits require independent CI results.

## Verified database test milestone and next adapter contract
Commit `9516819` had two successful GitHub Actions workflows; prior PostgreSQL isolation test job `129033554824` also completed successfully. Added `app/learn/data-contracts.ts`, source contract checks, and `docs/LEARNING-PERSISTENCE-ADAPTER-DECISION.md`. These prepare payload limits and provider-neutral types but do not enable authentication or persistence. Latest changes require new CI verification. Provider provisioning and credentials remain pending an isolated MAXYRON development environment.

## Development environment provisioning gate
Commit `4b0092c` passed two GitHub Actions workflows and Vercel. Added `.env.learning.example`, `scripts/check-learning-environment.mjs`, and `docs/LEARNING-DEVELOPMENT-PROVISIONING-RUNBOOK.md`. CI checks disabled-by-default configuration and rejection of an enabled backend missing required credentials. No identity tenant or database has been provisioned, and no live connection is claimed. Latest changes await CI.

## Live Neon development database migration — 2026-11-09
Neon project `little-butterfly-72114147` (`maxyron-developmen`), isolated branch `br-empty-bar-zan6axg9` (`learning-development`), database `neondb`, PostgreSQL 18.6. Verified no `learning` tables existed before migration. Applied the thirteen non-comment SQL statements from `db/learning/001_initial.sql` in one transaction. Read-back verified five tables (`users`, `courses`, `enrollments`, `learner_notes`, `learning_events`) each have RLS enabled and zero policies. FORCE RLS is not yet enabled. This is a fail-closed schema foundation for non-owner roles, not proof that the owner role is restricted. `002_owner_policies.sql` intentionally NOT applied because its source requires reviewed trusted auth and a non-owner runtime role. No application connection string was configured; production branch unchanged. Next: review least-privilege role, ownership and OIDC session binding before policy migration and API activation.

## Neon restricted runtime role verification
Created role `maxyron_learning_runtime_dev` on development branch `br-empty-bar-zan6axg9` with Neon scoped `read_write` access to database `neondb`, schema `learning`. Verified from `pg_roles`: LOGIN true, SUPERUSER false, BYPASSRLS false, CREATEROLE false, CREATEDB false. The five learning tables remain owned by `neondb_owner`, not the runtime role. Verified `SELECT count(*) FROM learning.users` as runtime role succeeds and returns zero rows; because table is empty, this is **not** a two-user RLS isolation test. Scoped read_write grants SELECT/INSERT across all five tables, including courses/users; RLS currently has zero policies, so non-owner runtime access remains default-denied for rows. Review narrowing table grants before enabling API endpoints. No credential values recorded. Do not activate runtime writes until trusted OIDC auth, owner policies and live two-user isolation tests are complete.

## Neon Auth development provisioning — 2026-11-09
Provisioned Neon Auth `better_auth` on isolated branch `br-empty-bar-zan6axg9`, database `neondb`. Read-back verified provider `better_auth`, auth base URL `https://ep-summer-leaf-zaw44ju4.neonauth.c-2.eu-west-2.aws.neon.tech/neondb/auth` and JWKS `https://ep-summer-leaf-zaw44ju4.neonauth.c-2.eu-west-2.aws.neon.tech/neondb/auth/.well-known/jwks.json`. Verified `neon_auth` schema tables: account, invitation, jwks, member, organization, project_config, session, user, verification. Current Neon Auth config at inspection: no trusted origins; localhost allowed; email/password and signup enabled; email verification NOT required; shared Google OAuth available. These are provider defaults and require security review before public access. Website auth SDK/session verification, learner identity mapping, transaction-scoped RLS, trusted origins, and actual note persistence NOT implemented. Production branch unchanged. Do not activate public learner login before reviewing signup/email verification and allowed origins.

## Neon Auth verification hardening — 2026-11-09
On development branch `br-empty-bar-zan6axg9` updated and read-back verified email/password settings: `require_email_verification=true`, `verify_email_on_sign_up=true`, `verify_email_on_sign_in=true`, `revoke_sessions_on_password_reset=true`, OTP verification; email/password and sign-up still enabled. `trusted_origins=[]` and `allow_localhost=true` remain as inspected; set explicit preview domain before browser auth integration. No website authentication code, verified-session-to-UUID mapping, or live two-user test has been completed. Do not interpret provider provisioning as deployed website login.

## Website Neon Auth configuration foundation — 2026-11-09
Added `app/learn/server/neon-auth-config.ts` (server-only configuration parser, disabled by default, requires explicit backend enablement, HTTPS issuer/JWKS, same-origin JWKS within issuer path, audience) and `scripts/test-learning-neon-auth-config.mjs` (executable positive/negative test cases). These files are committed to `feature/learning-shell-r1`; they do not enable sessions, login, storage or deployment. Tests are authored but have not yet been executed or wired into CI. Next: integrate tests into CI, confirm token format and issuer/audience semantics for Neon Auth, implement trusted session verification with expiry/revocation checks, map provider subject to learner UUID, then apply RLS policies and run two-user isolation tests. Keep API fail-closed until complete.

## CI confirmation — 2026-11-09
Commit `f0abac5f67c7a922ee5487df7fecd8a92803c701`: GitHub Actions `Learning Website Verification` run `42598131792` completed `success`; `MAXYRON Website CI` run `42598131718` completed `success`. Confirms the added Neon Auth configuration test runs in CI. Does not validate real user sessions, authentication token signature, or database RLS isolation.

## Verified-session contract foundation
Added `app/learn/server/session-claims.ts` and `scripts/test-learning-session-claims.mjs`; CI workflow updated at commit `68ab6d384d06b031480536b146c9997aef96ad10`. The validator checks claim shape, issuer, audience, expiration, issuance and not-before constraints **only after** a trusted signature/session verifier; it does not authenticate raw tokens. API routes remain disabled. Tests added to CI; check new workflow result before reporting pass. Next: determine Neon Auth actual session/token semantics and implement server-side signature verification plus active-session validation, without trusting request headers or client-supplied learner IDs.
