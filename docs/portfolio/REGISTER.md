# MAXYRON — Operational Portfolio Register

**Registry ID:** MX-PORT-R1
**Established:** 2026-11-06
**Role:** CURRENT OPERATIONAL LOOKUP for where each capability, application, subject, programme, knowledge domain and service belongs.
**Strategic authority:** [Current Reconciled Architecture R1](../strategy/CURRENT-RECONCILED-ARCHITECTURE.md).
**Implementation evidence:** [Site status](../STATUS.md) · [Integration register](../integrations/REGISTRY.md) · [Service offers](../SERVICE-OFFERS.md).
**Machine-readable companion:** [portfolio.csv](portfolio.csv).

**Do not mistake this register for a new strategic architecture version.** This is the working classification and readiness inventory under R1. Keep earlier architecture v1/v2 and R1 intact. Future changes to organizational identity require an explicit reconciled R2; ordinary item additions/updates change this register, with history.

## A. What an item means

- **Service:** Client-specific work, project scoping and delivery.
- **Product:** A reusable system/application, regardless of whether it is concept, prototype, demonstration or market-ready.
- **Learning & Mastery:** A programme or tool designed to develop/test competence.
- **Research & Knowledge:** The evidence, concepts, methods, essays and interpretations that support other functions.
- **Shared capability / infrastructure:** Engineering, learning or operational mechanism that supports several functions, not automatically an advertised business unit.
- **External/separate brand:** Assets that require independent rights/ownership and placement decisions before claiming MAXYRON integration.

**A domain is not a product.** Mathematics may be a domain of knowledge and a mastery pathway; a mathematics tutor is a product; creating a custom tutor for a client is a service engagement. Cross-references do not duplicate authority.

## B. Current public service taxonomy — four and only four

| ID | Client-facing service | Actual site location | What belongs here | State |
|---|---|---|---|---|
| MX-SVC-001 | AI Engineering | `/services#ai-engineering` | AI apps, RAG, agents, evaluation, AI development | GitHub page implemented; delivery claims per project |
| MX-SVC-002 | Intelligent Automation | `/services#intelligent-automation` | Workflow architecture, tool integrations, approval/exception handling | GitHub page implemented |
| MX-SVC-003 | Knowledge Architecture | `/services#knowledge-architecture` | Repositories, knowledge models, taxonomy, retrieval, governance | GitHub page implemented |
| MX-SVC-004 | Research & Advisory | `/services#research-advisory` | Applied/academic research, methods, analysis, diagnosis, feasibility, advice and consulting | GitHub page implemented |

**Research & Advisory is a SERVICE.** Research & Knowledge is a separate KNOWLEDGE FUNCTION; research software (e.g. SEKA) is a PRODUCT.

## C. Cross-domain and portfolio placement

| ID | Item / subject | Primary function and family | Canonical or candidate owner | Site placement | Verified maturity / caution | Next gate |
|---|---|---|---|---|---|---|
| MX-PORT-001 | AI Verification Capacity Diagnostic | Product → Business/AI Solutions | `Odogwo/ai-verification-capacity-diagnostic` | `/products` and homepage diagnostic | Demo URL previously user-verified and integration recorded; not certification | Reverify current production and version |
| MX-PORT-002 | SEKA scholarly research agent | Product → Research Products | `Odogwo/SEKA` | `/products`; crosslink Research & Advisory | Under development; integration is not independently verified | Confirm current runtime/release and public permissions |
| MX-PORT-003 | KEMAS knowledge extraction system | Product → Knowledge Platforms | `Odogwo/kemas-learning-system` | `/products`; crosslink Learning | Development candidate; deployment unverified | Verify build/runtime and canonical ownership |
| MX-PORT-004 | Psychology Knowledge Mastery application | Learning & Mastery / candidate product | `Odogwo/Psychology-Knowledge-Mastery` | `/learning`, `/products` (candidate only) | Source foundation; independent live app was user-reported, MAXYRON integration unverified | Inspect deployed version, content and ownership |
| MX-PORT-005 | MAXYRON AI (AI mastery, engineering and agents) | Shared AI domain platform → Learning/Engineering | `Odogwo/maxyron-ai` | `/learning`; AI Engineering | Repo foundation, reconciliation pending; do not conflate with older hub | Reconcile AI authority and roadmap |
| MX-PORT-006 | BLM Applied AI Engineering | Learning & Mastery → Programme | `Odogwo/BLM-AI-Engineering` | `/learning` | 12-week programme foundation in progress; no enrolment/certification claim | Verify actual modules, tests and release |
| MX-PORT-007 | Bible knowledge, Scripture, Bible memory | Knowledge & Research / Learning domain | `Odogwo/Bible-OS` + source Elite_KOS pending cutover | `/learning`, `/research` | Bible-OS migration in progress; original source remains authoritative until cutover | Complete authority/cutover audit |
| MX-PORT-008 | Mathematics & Physics mastery | Learning & Mastery / science knowledge | `Odogwo/Mathematics-OS`; prior Elite_KOS sources | `/learning` | Destination established, migration pending | Identify and migrate canonical content |
| MX-PORT-009 | English language & vocabulary | Learning & Mastery / language knowledge | `Odogwo/English-Language-OS`; prior Elite_KOS sources | `/learning` | Destination established, migration pending | Audit source and vocabulary protocols |
| MX-PORT-010 | Memory & learning science | Shared learning capability / knowledge | `Odogwo/Memory-Learning-OS`; Elite_KOS sources | `/learning` | Migration pending, shared capability not launched | Reconcile generic vs domain-specific memory |
| MX-PORT-011 | Spiritual consciousness, prayer, religious reflection | Knowledge & Research → Spiritual/Human inquiry | Proposed `Odogwo/maxyron-spiritual-consciousness` (remote not confirmed) | `/research`; possible future learning platform | Proposed canonical-article platform; do not claim live or create duplicate Bible authority | Verify remote, editorial source and release |
| MX-PORT-012 | Philosophy, life issues and personal reflection | Knowledge & Research → Human understanding | `Elite_KOS` and appropriate proposed spiritual/psychology authority | `/research` | Content territory, not commercial service or product by default | Canonical topic/owner inventory |
| MX-PORT-013 | Personal development, habits, character | Knowledge & Research / potential mastery | `Odogwo/personal-development` (scope requires audit) | `/research` or `/learning`, depending on format | Domain opportunity, not therapeutic service | Audit existing repo before duplicate |
| MX-PORT-014 | Research methods, evidence, analysis | Knowledge & Research → Methods | Research project authority, SEKA where applicable | `/research` | Intellectual/methodological territory; public material must be reviewed | Publish one sourced canonical piece |
| MX-PORT-015 | Website design and software development | Service capability → Engineering | MAXYRON operational engineering work; owner to formalise | Under `/services` scope, not a fifth headline yet | Capability; specific commercial offer not approved | Define offer, demonstrable outputs, pricing and fit |
| MX-PORT-016 | Cybersecurity | Candidate technical/learning domain | Not yet assigned canonical owner | No dedicated service/product public listing | **Not** verified as specialist security consultancy | Skills, credentials, ethical scope and owner review |
| MX-PORT-017 | Workflow automation engineering | Service capability | `MX-SVC-002`; implementation repos individually | `/services` | Existing service scope | Build/verify case demonstration |
| MX-PORT-018 | AI engineering tools and technical knowledge | Engineering/learning shared domain | `Odogwo/maxyron-ai` subject to reconciliation | `/learning` and AI service | Domain content not itself a paid product | Authority and implementation audit |
| MX-PORT-019 | ThesisForge / thesis software | Product → Research Products (candidate) | Elite_KOS / `Odogwo/thesisSoftware` (reconcile) | Internal pipeline; not yet public | Concept/implementation evidence unclear | Inventory code, overlap and readiness |
| MX-PORT-020 | Commitment Experiment System | Product → Behaviour/Business Solutions candidate | `Odogwo/commitment-experiment-system` | Internal portfolio evaluation | Operating/deployment status needs product audit | Validate use, rights and category |
| MX-PORT-021 | Drawbridge Knowledge Platform | Separate-brand / potential knowledge product | Drawbridge project authority | Do not auto-publish under MAXYRON | Ownership/branding review pending | Verify relationship, rights and boundaries |
| MX-PORT-022 | MAXYRON corporate website | Shared organisational infrastructure | `Odogwo/maxyron-website` | `/`, `/services`, `/products`, `/learning`, `/research` | Source routes committed; previous Vercel status success; independent visual test pending | CI and browser/mobile audit |
| MX-PORT-023 | MAXYRON AI Hub (older) | Historical/parallel AI platform candidate | `Odogwo/maxyron-ai-hub` | Not an additional public AI brand by default | Authority overlap with `maxyron-ai` unresolved | Compare and consolidate non-destructively |

This register is **not exhaustive** of all repositories, knowledge records or ventures. Full venture and promotion authority remains in Elite_KOS, while `docs/integrations/REGISTRY.md` retains detailed deployment and integration evidence.

## D. Website routing map

| Visitor asks | Send them to | Why |
|---|---|---|
| “Can MAXYRON build an AI system for me?” | `/services#ai-engineering` | Client engagement |
| “Can MAXYRON develop my website?” | `/services` and scoped enquiry | Engineering capability pending dedicated offer |
| “Can MAXYRON conduct an analysis and advise?” | `/services#research-advisory` | Research & Advisory service |
| “What software has MAXYRON developed?” | `/products` | Reusable tools, status-labelled |
| “Can I learn mathematics, AI or Bible?” | `/learning` | Learning domains and programme maturity |
| “Where are philosophical or spiritual reflections?” | `/research` | Reviewed knowledge and interpretative inquiry |
| “Where are your research findings and methods?” | `/research` | Public knowledge, not client confidentiality |
| “Where does cybersecurity belong?” | Technical capability candidate in this registry | Not automatically a public service |

## E. Intake rule for every new item

**First classify, then publish.** Required fields: ID, exact name, primary function, family/domain, responsible canonical repo/owner, cross-links, site destination, current maturity, evidence, public permission, next verification and last review. Use one **primary** functional home and link other uses. Never infer release from code or a title.

**Readiness labels:** `existing-service`, `verified-demo`, `under-development`, `integration-candidate`, `migration-in-progress`, `migration-pending`, `proposed`, `requires-audit`, `separate-brand-review`. These are registry labels rather than claims of product certification.

**New research or wisdom insight:** Compare governing question and evidence with the existing canonical article; improve the existing article with version history when appropriate, do not generate duplicates simply because it spans Bible, psychology and philosophy.

**Future updates:** Keep this path stable (`docs/portfolio/REGISTER.md`), update rows/status as facts change and append dated reconciliation history. A new architecture R2 is required only for a genuine organizational policy change, not for a new product entry.

## F. Change / evidence log

- **2026-11-06 R1:** First operational crosswalk assembled from reconciled MAXYRON architecture, source/site service labels, integration registry, and inspected domain repo READMEs. Existing gaps marked explicitly. No site routes, products or legal claims newly authorised by creating this register.
