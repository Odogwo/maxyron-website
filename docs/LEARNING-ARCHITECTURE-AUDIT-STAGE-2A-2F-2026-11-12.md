# MAXYRON Learning — Architecture Audit 2A–2F
Status: EVIDENCE-BASED PRE-MIGRATION AUDIT; no repository creation, source transfer or production change.
Date: 2026-11-12. Source branch: `feature/learning-shell-r1`.

## 2A — Existing repository inventory and verified boundaries
- `Odogwo/maxyron-csem` (private, main): README and STATE.md identify CSEM as computing/software engineering disciplinary mastery authority, including Linux and ELAB-N01 track. Historical migration is explicitly incomplete. ELAB-N01 operational authority remains Elite_KOS.
- `Odogwo/maxyron-ai` (private, main): README and ARCHITECTURE.md describe AI knowledge, engineering, mastery, memory, tutoring and organisational solutions; implementation and reconciliation remain incomplete.
- `Odogwo/maxyron-ai-hub` (private, main): README claims intended canonical AI field/engineering/education hub and an initial verified curriculum source migration. Its relationship to `maxyron-ai` is UNRESOLVED; do not automatically declare either superseded.
- `Odogwo/kemas-learning-system` (private, main): README and docs/CANONICAL_PRODUCT_BLUEPRINT.md and docs/FOUNDATIONAL_LEARNING_ARCHITECTURE.md define source-grounded extraction, seven knowledge dimensions and a ten-stage knowledge-to-mastery journey. README says authentication, classrooms, production deployment and independent mastery verification are not implemented.
- `Odogwo/Memory-Learning-OS` (private, main): README defines cross-domain mnemonics, retrieval and transferable learning protocols. Source migration pending.
- `Odogwo/Learning-Notes` (private, master): repository present in accessible inventory; README.md fetch returned 404. CONTENT NOT AUDITED; no claim that repository is empty.
- `Odogwo/maxyron-website` (public, main): corporate website. Its `feature/learning-shell-r1` branch contains the learner application. No source extraction yet.
- `Odogwo/Elite_KOS` and `Odogwo/maxyron-infrastructure` retain global knowledge governance and portfolio registry respectively.
- Other potentially related repositories `BLM-AI-Engineering`, `AI-Building-OS`, `ai-engineering-from-scratch` need deeper content/rights inspection before source migration.

## 2B — Learning implementation migration manifest (source read-back)
**Application:** `app/learn/page.tsx`, `app/learn/areas.ts`, `app/learn/LearnerOverview.tsx`, `app/learn/LearnerJournal.tsx`, `app/learn/data-contracts.ts`, `app/learn/learning.module.css` (CSS path inferred from import; independently verify before copy).
**API:** `app/api/learning/me/route.ts` GET; `app/api/learning/notes/route.ts` GET/POST; `app/api/learning/events/route.ts` POST; `app/api/learning/readiness/route.ts` GET.
**Server:** `app/learn/server/learning-api.ts`, `postgres-storage.ts`, `neon-session.ts`, `learning-readiness.ts`, `storage.ts`, `identity.ts` (identity path inferred from import).
**Database:** `db/learning/003_authenticated_provisioning.sql` verified; it references `002_owner_policies.sql`. Enumerate entire `db/learning/` before migration; guessed filenames `001_schema.sql` and `002_rls.sql` returned 404.
**CI/tests:** `.github/workflows/learning-verification.yml`, `tests/learning/rls-integration.sql`, `tests/learning/rls-provisioning.sql`, `scripts/test-learning-idempotency-jsonb.mjs`; enumerate remaining test scripts and package dependencies before copy.
**Evidence:** `docs/LEARNING-STAGE-7-BULK-ENGINEERING-2026-11-09.md` on feature branch. Latest previously verified workflows for SQL fix `fea2c85cb4b063a1c5e7d2697e3142f76181667a`: Website CI 42632442056 and Learning Verification 42632442253, both success. These are not a fresh full migration test.
**Environment:** Preview branch scoped encrypted `LEARNING_BACKEND_ENABLED=false`, `LEARNING_DEPLOYMENT_TIER=development`, `NEON_AUTH_BASE_URL`. Development Neon Auth trusted preview origin. Missing `LEARNING_DATABASE_URL` and `NEON_AUTH_COOKIE_SECRET`; live auth/persistence not verified.
**Exclusions:** unrelated corporate website routes, production domains, production database, credentials, private learner records and third-party content without rights verification.

## 2C — Authority and duplication resolution
- **MAXYRON Learning (proposed new repo):** shared learner/instructor/admin experience, course delivery, enrolment, assessment execution, session-derived ownership, learner progress and evidence records.
- **CSEM:** computing curriculum, Linux track, subject-specific competency and educational source assets; not general user accounts.
- **AI authority:** `maxyron-ai` versus `maxyron-ai-hub` requires a separate explicit governance decision before any AI content cutover.
- **KEMAS:** knowledge intake/extraction, source provenance, structured knowledge candidates and proposed mastery pedagogy. Integrate via a versioned service/contract; do not duplicate its engine or claim its proposed mastery features operational.
- **Memory-Learning-OS:** retrieval and mnemonic protocols; optional integration, not learner identity store.
- **Elite_KOS:** cross-system governance and source authority; **MAXYRON Infrastructure:** project registry and status.
- Mastery criteria live with disciplinary owners; assessed learner evidence lives with Learning; KEMAS may generate or assist learning objects, never autonomously certify mastery without validated policy.

## 2D — Proposed educational repository integration contract v0 (DESIGN ONLY)
A programme release manifest must declare `schema_version`, `programme_id`, `owner_repository`, `source_commit`, `release_id`, `licence`, `visibility`, `title`, `modules`, `prerequisites`, `competency_ids`, `assessment_refs` and `content_checksums`.
Import workflow: source repo approval -> immutable commit pin -> schema/rights/security validation -> staging preview -> editorial approval -> published release -> learner enrolment -> evidence recorded against exact release and competency version.
Boundaries: GitHub owns approved source definitions, code and history; secure runtime DB owns private learner identity, submissions, journal, progress and evidence. No credentials in manifests. Use stable IDs, provenance, explicit versioning, signed/validated access as needed, no automatic publication of private content.
Integration interface: initially pull validated manifest from approved repo at pinned commit via server-side GitHub access; later expose a restricted service API/event interface if necessary. No arbitrary untrusted repository execution. No cross-repo writes or learner data export by default.
Conflict rule: if the same learning object exists in multiple repos, mark `authority_pending` until owner decision; do not silently overwrite.

## 2E — Historical continuity and decision record
Evolution from conversation (user-described, not independently verified Git history): Linux Mastery -> CSEM as broader computing discipline -> recognition of learner login/study/assessment requirements -> Learning platform shell inside maxyron-website -> proposal to separate Learning as independently governed application. Preserve the earlier larger vision: Code Bank, knowledge journal, tutoring, mastery analytics, teaching/cohorts, learner/instructor/admin portals and eventual integrations. These are roadmap capabilities, NOT all implemented.
Decision PROPOSED: dedicated private `Odogwo/maxyron-learning`, with independently secured CI, preview deployment, database ownership, explicit upstream content contracts and website navigation link. No repo has been created by this batch. Preserve original Git history and file provenance during extraction; do not claim full verbatim chat export from a reconstructed summary.

## 2F — Migration readiness and roadmap
1. Resolve AI Hub vs MAXYRON AI authority and inspect `Learning-Notes` using repository tree/metadata access; enumerate source tree and full dependency closure.
2. Establish target repository privately; preserve provenance and licence records; create a non-destructive copy/extraction branch, never delete source before cutover acceptance.
3. Migrate learning code, tests, documentation and historical evidence with exact path-to-path mapping and checksum manifest. Refactor relative imports and independent Next.js config.
4. Configure separate protected Vercel preview and least-privilege Neon development credentials; never reuse production secrets or expose private data.
5. Verify lint/type/build, SQL RLS isolation, identity, journal persistence, regression, access controls and origin protection in target preview.
6. Connect main website through an explicit reviewed link after preview acceptance; register repository in maxyron-infrastructure following PROJECT-PORTFOLIO.md and JSON registry procedure.
7. Only after verified cutover consider retiring duplicated shell code through a separate review. Preserve source repository and historical commits.

## Audit limitations
This is a targeted audit of accessible READMEs, selected architecture/state files and source paths, not a recursive inventory of every branch, tag, file, dependency or third-party licence. No production, GitHub main, existing repo ownership or secrets modified. Every uninspected item remains open.
