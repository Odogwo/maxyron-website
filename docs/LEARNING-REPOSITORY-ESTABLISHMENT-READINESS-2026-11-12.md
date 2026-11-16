# MAXYRON Learning — Repository Establishment Readiness (Stage 3A)
Date: 2026-11-12
Status: PREPARATION ONLY. Target repository not created; no migration or production changes.
Source: Odogwo/maxyron-website @ feature/learning-shell-r1
Predecessor: docs/LEARNING-ARCHITECTURE-AUDIT-STAGE-2A-2F-2026-11-12.md

## Verified baseline
The preceding Stage 2 audit commit `4f55905a5591d852e280ff3df813f5fdfacef1ff` passed both GitHub workflows (MAXYRON Website CI and Learning Website Verification). These checks verify the current website branch, not a standalone learning build.

## AI repository governance reconciliation
Read `Odogwo/maxyron-ai-hub/00-Governance/DECISION-REGISTER.md` and `STATE.md` (main). HUB-001 through HUB-006 explicitly designate AI Hub as the intended canonical AI-specific destination **after verified cutover**, and distinguish KEMAS/SEKA as independent systems. HUB-013–016 leave full inventory, product runtime boundaries, licences and migrations pending. Meanwhile `Odogwo/maxyron-ai/README.md` and `ARCHITECTURE.md` claim broad AI authority and incomplete source reconciliation. **Resolution for Learning:** neither repository is automatically superseded; learning integrates only explicitly approved, version-pinned AI programme releases. The AI ownership conflict must be resolved in AI governance before any AI content migration, but does not block independent Learning application establishment.

## Dependency and source closure (verified by fetch_file)
- `package.json`: Next.js ^16.4.5, React ^19.1.0, React DOM ^19.1.0, @neondatabase/auth 0.7.0-beta, pg ^8.13.0; dev TypeScript ^5.9.0, ESLint 9, eslint-config-next ^16.4.5, @types/pg ^8.11.0, Node/React types.
- `tsconfig.json` and `next.config.ts` exist; `next.config.mjs` not found.
- Learning shell: `app/learn/page.tsx`, `app/learn/layout.tsx`, `app/learn/[area]/page.tsx`, `app/learn/areas.ts`, `app/learn/learning.module.css`, `app/learn/LearnerOverview.tsx`, `app/learn/LearnerJournal.tsx`, `app/learn/data-contracts.ts`.
- Server: `app/learn/server/learning-api.ts`, `postgres-storage.ts`, `neon-session.ts`, `learning-readiness.ts`, `identity.ts`, `storage.ts`.
- API: `app/api/learning/me/route.ts`, `notes/route.ts`, `events/route.ts`, `readiness/route.ts`.
- DB: `db/learning/002_owner_policies.sql`, `003_authenticated_provisioning.sql` verified; the earlier guessed `001_schema.sql`, `001_learning_schema.sql`, `001_schema_and_rls.sql` were not found. The exact schema foundation filename must be established from the workflow/test SQL and full tree before migration.
- Test/CI: `.github/workflows/learning-verification.yml` contains a PostgreSQL 16 service and executable checks for shell, security, data contracts, disabled adapters, Neon Auth, session claims, overview, journal, idempotency, integrity, readiness, persistence, SQL RLS, TypeScript and production build. Transfer all referenced scripts, fixtures and SQL rather than cherry-picking.
- `.env.learning.example` exists; example only. Never transfer actual secrets.
- Corporate website README, shared global CSS, imports, fonts, middleware, package lock, ESLint and root layouts require explicit dependency scan before independent build.
- No recursive Git tree API was available in this pass. This list is a verified core-path inventory, **not** a full file or history manifest.

## Proposed target ownership and migration table
| Source | Proposed target | Disposition |
|---|---|---|
| app/learn/** | app/learn/** initially | Copy after complete inventory, then refactor |
| app/api/learning/** | app/api/learning/** | Copy and verify |
| db/learning/** | db/learning/** | Copy exact full directory, retain migration order |
| tests/learning/** | tests/learning/** | Copy all fixtures/tests |
| scripts/*learning* | scripts/ | Copy referenced files and dependency closure |
| .github/workflows/learning-verification.yml | .github/workflows/learning-verification.yml | Adapt triggers/branch names |
| docs/LEARNING-* | docs/history/ or docs/engineering/ | Preserve originals and commit references |
| root Next.js/config/package files | target root | Reconstruct minimal independent application |
| unrelated maxyron corporate routes | none | Remain source-owned |
| runtime learner records / secrets | none | Never copy into Git |

## Acceptance gates
G0 target repo created private with explicit owner; G1 source file/branch/tag and licence inventory complete; G2 exact mapping and checksum evidence; G3 independent install, typecheck, tests, SQL RLS and build pass; G4 separate protected preview, branch-scoped env, secret hygiene and origin review; G5 live verified auth, notes and ownership isolation; G6 reviewed corporate-site link and MAXYRON Infrastructure portfolio registration; G7 optional source-shell retirement only after acceptance and separate approval.

## Preservation and recovery
Do not delete or rename original branches, production routes, databases, Vercel project or source history. GitHub copies do not automatically preserve full original commit ancestry; use an explicit git history-preserving migration strategy if ancestry is required, and verify tags/branches/commit references. Chat history may be reconstructed into decision records but is not a complete verbatim transcript without an export. The original Stage 7B–7C source evidence remains in the existing branch.

## Immediate next action
Create private `Odogwo/maxyron-learning` with README; inspect target, complete recursive source and licence inventory, then prepare a migration PR. No target repository exists in the previously checked inventory.
