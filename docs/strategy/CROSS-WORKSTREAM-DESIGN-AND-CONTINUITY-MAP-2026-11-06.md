# MAXYRON — Cross-Workstream Design and Continuity Map

**Established:** 2026-11-06
**Status:** VERIFIED CROSS-REFERENCE / DEVELOPMENT HISTORY; NOT a replacement for R1 strategy, a new organizational division, proof of deployment, or approved canonical cutover.
**Purpose:** Preserve the complete map connecting the corporate MAXYRON website, engineering/computer-science learning and infrastructure, spirituality/philosophy writing, and AI/cross-domain knowledge mastery. A future conversation must recover what was proposed, actually built, rejected, retained, and remains unresolved without depending on chat history.

## 1. What areas are covered?

The conversation used three principal subject threads and one closely related cross-cutting system. **These are workstreams, not four separate MAXYRON companies or public services.**

| Workstream | Design question and scope | Primary authority | Actual state at this review |
|---|---|---|---|
| **A. MAXYRON corporate organisation and website** | What is MAXYRON? Which services, products, learning and research sections belong on its public website? What is verified and offered? | This repo: `docs/strategy/CURRENT-RECONCILED-ARCHITECTURE.md` (R1); `docs/portfolio/REGISTER.md`; `docs/STATUS.md` | Corporate pages `/`, `/services`, `/products`, `/learning`, `/research` implemented and user-tested; AI Diagnostic reciprocal navigation user-tested; latest direct Contact mailto change committed but Vercel reported build-rate-limit failure, so that last change **not yet production verified** |
| **B. Engineering, computer science and shared infrastructure** | Where do programming, Linux server experiment, web engineering, AI agent hosting, databases and operations belong without mixing curricula and runtime authority? | [Existing detailed engineering assessment](ASSESSMENT-SHARED-ENGINEERING-INFRASTRUCTURE-2026-11-06.md); `Odogwo/Computer-Science-OS` (discipline, migration ongoing), operational ELAB-N01 records as identified there; `Odogwo/maxyron-ai` for AI-specific engineering | Three-role split proposed and documented; not a new public service, autonomous server or new repository by default |
| **C. Spirituality, philosophy, faith and human reflection** | How can long-lived canonical essays on spiritual consciousness, Scripture, prayer, philosophy, morality and lived experience evolve through careful versioned revisions without multiplying overlapping notes? | R1 classification under Knowledge & Research; `Odogwo/Bible-OS` for Bible-specific knowledge (migration not cut over); proposed `Odogwo/maxyron-spiritual-consciousness` for interdisciplinary essays **not found in accessible GitHub** | Design and editorial methodology recorded; no verified stand-alone spiritual repository, site or production publication claimed |
| **D. AI and cross-disciplinary learning/mastery** | How do learning programmes, retrievable knowledge, tests, student performance and AI tutoring extend the domains without duplicating each source? | `Odogwo/maxyron-ai` (AI platform foundation); `Odogwo/BLM-AI-Engineering` (applied learning programme); `Odogwo/Elite_KOS` (existing governance); individual domain repos and `docs/portfolio/REGISTER.md` | Architecture and learning examples exist; shared mastery platform, learner identity and AI tutor are not established as deployed |

**Important terminological clarification:** These four **workstreams** are not the four **organizational functions** in R1 (Services, Products, Learning & Mastery, Knowledge & Research), and neither grouping is the four public **client services** (AI Engineering, Intelligent Automation, Knowledge Architecture, Research & Advisory). Do not mix their counts or labels.

## 2. Core organizational decisions (MAXYRON)

- Identity: MAXYRON is an **intelligent systems engineering and research organization** with the tagline **Engineering Intelligent Systems**, not simply a content site or university.
- Four service categories retain their names/order; service delivery has a client and requirements, not just a broad subject.
- Product families: Business/AI Solutions, Research Products, Knowledge Platforms, Learning & Mastery Systems. A product entry requires status/evidence; a GitHub repo does not imply public availability.
- Website routes: corporate Home; Services for client engagements; Products for reusable systems; Learning for competency programmes; Research for knowledge and inquiry. About/Contact can remain homepage sections rather than empty routes.
- Diagnostic is the present supported demonstration. Return navigation from its app to MAXYRON Products was added and user-confirmed. Contact in corporate navigation was changed from two-click `#contact` jump to direct `mailto:hello@maxyron.com?subject=MAXYRON%20enquiry` in five route sources; latest deployment was rate-limited when checked, so verify after deploy before declaring it live.
- SEKA and KEMAS are potential product integrations; use explicit maturity states. SEKA's current repo code is more advanced than its outdated root README but production behavior/permissions need independent verification. Consult the [SEKA audit](../integrations/SEKA-INTEGRATION-READINESS-AUDIT-2026-11-06.md).
- Distinguish GitHub commit, CI success, Vercel status, live browser verification and user acceptance; each has a separate evidence threshold.
- The [operational portfolio register](../portfolio/REGISTER.md) is a subordinate, maintained lookup; R1 strategy is the one organizational authority.

## 3. Engineering design (computer science vs infrastructure vs product)

**Three-role ownership model:**
1. **Disciplinary learning** — operating systems, Linux, programming, computer science, software architecture, databases, networking, security and assessment belong under `Computer-Science-OS` and relevant domain curricula (migration authority must be checked).
2. **Operational infrastructure** — ELAB-N01 (older MacBook/Linux lab) as a MAXYRON shared compute experiment, tracking asset, OS runtime, power/cooling, remote access, backup/restore, service health and security, but NOT falsely claiming a production 24/7 server. Keep private operational details in their existing protected source.
3. **Application/product implementations** — AI agents in `maxyron-ai`; corporate web app in `maxyron-website`; scholarly research app in SEKA; KEMAS in its product repo; app-specific infrastructure and credentials remain with authorised product owners.

**Concrete examples:**
- Linux web server: a Computer Science educational case and an operational compute node; no full duplicated system.
- PostgreSQL: data modelling is a learning topic; database host/recovery is infrastructure; each app's schema belongs to that app.
- AI agent: prompt, evaluation, RAG and code in AI/domain owner; deployment health on infrastructure; research evidence and client data stay under project authority.
- Python foundation used in several courses: one canonical general foundation with linked subject exercises and independent mastery evidence.

**Alternatives already assessed:** do not move all ELAB files into `maxyron-ai`, all operational files into public `maxyron-website`, or create a universal cross-domain repo. A dedicated infrastructure repo is deferred until justified by multiple assets and strong ownership/operations needs.

**Read the detailed engineering note** rather than rebuilding it: [Computer Science, Shared Infrastructure and Cross-Disciplinary Learning](ASSESSMENT-SHARED-ENGINEERING-INFRASTRUCTURE-2026-11-06.md).

## 4. Spirituality and canonical article design

**Purpose and boundaries:** Develop a coherent, thoughtful, evolving knowledge/publication system for spiritual consciousness, prayer, religion, life issues, philosophy, psychology and practical reflection. The aim is a connected, version-controlled corpus of deep but readable articles, not an ungoverned list of every idea. Bible-specific exegesis, Scripture memory and teaching remain under Bible-OS (whose source migration/cutover is pending); an interdisciplinary essay may link to it without claiming canonical Bible ownership.

**Canonical Article Evolution protocol:**
1. Choose a stable, broad-but-bounded **governing theme and question**.
2. Build one well-structured, vivid **canonical article v1** with thesis, mechanisms/reasoning, concrete examples, distinctions, practical implications, limitations and conclusion.
3. For each new observation, analogy, evidence, question, opposing argument or reflection, first compare to the governing question: does it refine this article, merit a distinct article with its own governing question, or belong in a source bank?
4. If it refines the article, produce **v2/v3** of the *same* piece: integrate and restructure, reconcile contradictions, remove repetition, preserve roughly disciplined length and a natural human voice. Do **not** endlessly append paragraphs or spawn topic duplicates.
5. Preserve source provenance and epistemic type: Scripture/theological interpretation, philosophical reasoning, psychological/empirical support, and personal reflection are different bases. Do not disguise opinion as experimental proof or fabricate citations.
6. Keep version history/change log: what insight arrived, where it was integrated, what was retained/replaced/rejected, why, and which sources support it.
7. Publication gate: attribution/copyright/permission checks, accuracy, reader clarity, version identification and any needed human review. Save canonical content in its approved domain owner and link from MAXYRON's Research section only when publication is intended and verified.

**Subject relationships, not automatically new divisions:** spiritual consciousness may intersect prayer, faith, trust, forgiveness, justice, mortality, personal development and psychology; Bible-OS remains Scripture-specific; psychology application and any mental-health claims have their own scope and evidentiary boundaries. Cross-links do not make an AI opinion a biblical or clinical authority.

**Current source status:** `Odogwo/maxyron-spiritual-consciousness/README.md` returned GitHub NOT_FOUND on 2026-11-06. This **does not confirm a usable repository**, whether because absent or inaccessible; do not report a published spiritual website or GitHub save to that repo. Spiritual design is preserved in this MAXYRON strategy note and existing v2/R1. If a separate spiritual repository is later approved and accessible, establish a **single owner and explicit cutover**, preserve the design history, then crosslink it; no silent parallel copies.

## 5. Learning/mastery architecture and evidence

- Capability progression: Build → Learn → Master (applied AI engineering); learning should connect explanation, retrieval, authentic tasks, diagnosis, repair, reconstruction, transfer and delayed retention checks.
- A working AI-assisted project ≠ independent competence; a completed lesson ≠ mastery; a draft curriculum ≠ an operating programme.
- Separate underlying domain knowledge (Computer Science, AI, Bible, Mathematics, English, Psychology, Memory Science) from the reusable teaching method and from the software engine that may implement it.
- Use the corporate `/learning` catalogue to accurately describe candidate domains; don't build a monolithic academy or learner database before real shared requirements exist.
- `maxyron-ai` foundation and authority reconciliation remain active; older `maxyron-ai-hub` cannot be assumed superseded without audit.
- Shared AI tutor/progress/assessment/SSO is **later**, conditional on verified multiple programme needs and explicit data privacy design.

## 6. Design history, statuses and handoff

| Item | Evidence source | Current disposition |
|---|---|---|
| Corporate architecture v1/v2 → R1 | Strategy index and R1 | R1 current; previous versions historical |
| Website Stages 1–4 | `docs/implementation/WEBSITE-STAGE-{1,2,3,4}-*.md` and app source | Implemented; browser pages user-confirmed, later Contact mailto edit pending deploy |
| AI Verification reciprocal link | `Odogwo/ai-verification-capacity-diagnostic/index.html`; integration registry | GitHub + Vercel success + user confirmed |
| Direct-contact navigation | `app/{page,services/page,products/page,learning/page,research/page}.tsx`; `docs/STATUS.md` | Source verified, last Vercel status build-rate limited; must recheck |
| Product portfolio and SEKA gate | `docs/portfolio/REGISTER.md`, integration registry + SEKA audit | Evidence labelled, no unsupported public integration |
| Engineering / ELAB-N01 | Engineering assessment linked above | Design record verified; runtime maturity unresolved |
| Spiritual publishing methodology | This note, v2, R1 | Design preserved; separate spiritual repo not verified |
| Domain learning ownership | `Computer-Science-OS`, `maxyron-ai`, `BLM-AI-Engineering`, `Bible-OS`, other domain repos | Repo existence/source noted; migrations and integration not implied complete |

**Next priority:**
1. Confirm Vercel permits deploy of the latest Contact mailto commit; browser-test contact navigation.
2. Inspect GitHub Actions independent build result rather than infer from Vercel success.
3. For engineering: reconcile the actual private ELAB-N01 source and measured runtime evidence, without publishing secrets.
4. For spirituality: determine exact approved canonical repo/ownership and recover any existing article/design notes before creating an independent website.
5. For AI/mastery: reconcile source authority before integration, new app creation or claims about a working tutor.

**Recovery sequence:** `docs/README.md` → `docs/strategy/README.md` → current R1 → **this cross-workstream map** → engineering assessment → portfolio register → integrations → status → relevant domain repo. When implementing, update the owning domain record and this cross-reference; never rely on this chat or on implied asynchronous persistence.
