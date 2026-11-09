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
