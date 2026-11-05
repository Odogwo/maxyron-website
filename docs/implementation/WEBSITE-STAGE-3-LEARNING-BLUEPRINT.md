# MAXYRON Website — Stage 3 Learning & Mastery Blueprint

Date: 2026-11-06
Status: Working implementation specification, not production-release evidence.
Authority: [Current Reconciled Architecture R1](../strategy/CURRENT-RECONCILED-ARCHITECTURE.md).
Purpose: Make MAXYRON's learning and mastery work discoverable as a product-capability family, **without portraying MAXYRON as a school or accredited academy**, duplicating domain knowledge, or promising completed programmes.

## Information architecture

- Parent company: MAXYRON — intelligent systems engineering and research organization.
- Client delivery: **Services** (four current offerings, including Research & Advisory).
- Reusable solutions: **Products** (differentiate demonstration, candidate, under development).
- Human capability development: **Learning & Mastery** (this new page).
- Evidence and conceptual foundations: **Research & Knowledge** (future bounded page).
- Domains provide content/curricula, not a separate parent corporate division.

## Stage 3 public page: /learning

Provide:
1. Plain-language explanation of learning versus demonstrated mastery.
2. One properly scoped example of an AI engineering programme with its real canonical repository and status.
3. Domain cards showing interest/portfolio candidates: Bible & Scripture; Mathematics & Physics; English/Vocabulary; Psychology; Memory & Learning Science; Spiritual Reflection & Practical Living.
4. Explicit status distinction between **programme under development**, **migration in progress**, **migration pending**, **prototype/application candidate**, and **proposed**.
5. No launch, certificates, enrolment, subscription, academic accreditation, or guaranteed learner competence claim.
6. No links to private repositories or unverified deployed domains, no new authentication or database.

## Domain ownership crosswalk

| Domain | Source | Observed README status (2026-11-06) | Public treatment |
|---|---|---|---|
| AI engineering mastery | `Odogwo/BLM-AI-Engineering`; `Odogwo/maxyron-ai` | 12-week programme foundation in progress; MAXYRON AI foundation and reconciliation open | Featured programme *in development*, no enrolment implication |
| Bible knowledge and memory | `Odogwo/Bible-OS` and Elite_KOS source | Migration in progress, canonical cutover pending | Domain in migration |
| Mathematics | `Odogwo/Mathematics-OS` | Migration pending | Planned learning domain |
| English / vocabulary | `Odogwo/English-Language-OS` | Migration pending | Planned learning domain |
| Psychology Knowledge Mastery | `Odogwo/Psychology-Knowledge-Mastery` | Source code foundation, website/product integration unverified | Application candidate |
| Memory and learning science | `Odogwo/Memory-Learning-OS` | Migration pending | Shared capability / planned |
| Spiritual consciousness | Proposed `Odogwo/maxyron-spiritual-consciousness` | Starter package proposed, remote and deployment unverified | Proposed interdisciplinary reflection/learning platform |

## Learning outcomes and integrity

- Lesson completion is not evidence of mastery.
- Memory and retrieval are not sufficient evidence of understanding.
- A useful mastery claim requires explanation, application, error diagnosis, reconstruction/transfer and suitable delayed assessment.
- Domain-specific authorities remain in domain repositories; MAXYRON website owns descriptions, links and verified public integration metadata only.
- No sensitive learning records on this corporate page.

## Site acceptance criteria

- `app/learning/page.tsx` and `app/learning/learning.css` exist.
- Four existing services and product status remain intact.
- Home, Services and Products navigation all connect to Learning.
- Mobile navigation remains usable with an expanded link count.
- CSS and content are semantic and accessible.
- Source readback, build verification and live deployment are tracked separately.

## Later stages

Stage 4 — Research & Knowledge (approved evidence-grounded publishing only).
Stage 5 — Shared mastery engine only if multiple real applications establish requirements.
Deployment gate — Next.js build, Vercel commit match, desktop/mobile test, functioning navigation, external URLs/status check.

## Continuity

Resume by reading `docs/strategy/CURRENT-RECONCILED-ARCHITECTURE.md`, this blueprint, `docs/STATUS.md`, and each domain's own README/STATE. Never infer a working programme, a deployed page, or authority cutover from its mere inclusion in this catalogue.
