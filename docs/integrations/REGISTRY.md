# MAXYRON Integration Portfolio

Last reviewed: 2026-11-02. Evidence levels below are explicit; no automated synchronization is claimed.

| ID | Application | Product repository | Deployment | MAXYRON integration | Integration status | Product status | Next action |
|---|---|---|---|---|---|---|---|
| MX-APP-001 | AI Verification Capacity Diagnostic | [ai-verification-capacity-diagnostic](https://github.com/Odogwo/ai-verification-capacity-diagnostic) | https://maxyron-ai-verification.vercel.app/ | Homepage `#diagnostic`, navigation and CTA | **VERIFIED — user confirmed link works** | v0.1 live; v0.2 draft PR #2, latest CI passing, not yet released | Visually review PDFs, release v0.2, verify production |
| MX-APP-002 | Psychology Knowledge Mastery | [Psychology-Knowledge-Mastery](https://github.com/Odogwo/Psychology-Knowledge-Mastery) | https://psychology-knowledge-mastery.vercel.app/ | No MAXYRON integration verified | **DISCOVERED — candidate** | User previously reported website working; current release unverified | Inspect repo and site; decide whether this belongs in public MAXYRON portfolio |

## Verified integration record: MX-APP-001
- Website source: `Odogwo/maxyron-website/app/page.tsx`, homepage diagnostic section and external CTA.
- MAXYRON integration commit: `1fb414fe2b0f0ee7ddd2eaf58aaaf1148e636db3`.
- User confirmed the website integration worked in conversation.
- Diagnostic product: v0.1 production; v0.2 draft PR https://github.com/Odogwo/ai-verification-capacity-diagnostic/pull/2 .
- v0.2 latest observed test results: diagnostic regression **success**; browser verification **success** on commit `687f2d2995865e005f3f0186bd77ed62ecd0ed2b`.
- Important: passing CI is not proof of visual quality or a deployed release.

## Intake fields for future sites
ID; application name; business purpose; product owner; GitHub repository; production URL; hosting provider; integration type; MAXYRON page/route; integration status; product release status; last verified date; evidence; next action; priority; commercial readiness.

## Portfolio decisions pending
1. Decide which websites are public MAXYRON demonstrations, independent brands, internal tools or client-specific deployments.
2. Decide whether future apps should be linked from a dedicated MAXYRON **Products & Demonstrations** page rather than expanding the homepage indefinitely.
3. Decide naming conventions for eventual subdomains; do not configure DNS without a reason and deployment plan.

## 2026-11-02 — GitHub candidate discovery (not integrated)
GitHub owner repository listing returned 94 repositories. README inspection identified the following **candidates**, not verified public deployments or approved integrations:

| Candidate | Repository | Evidence from README | Classification / next check |
|---|---|---|---|
| MX-APP-003 | [kemas-learning-system](https://github.com/Odogwo/kemas-learning-system) | Python local web application for knowledge extraction and mastery; production deployment explicitly not implemented | DEVELOPMENT CANDIDATE; assess product maturity and hosting before integration |
| MX-APP-004 | [commitment-experiment-system](https://github.com/Odogwo/commitment-experiment-system) | Standalone commitment experiment product; MVP tracker/web app described as intended component | DEVELOPMENT CANDIDATE; verify implemented app and deployment |
| MX-APP-005 | [maxyron-ai-hub](https://github.com/Odogwo/maxyron-ai-hub) | Canonical AI knowledge, engineering and commercial platform architecture | STRATEGIC PLATFORM; determine whether a public website exists or is intended |
| MX-APP-006 | [thesisSoftware](https://github.com/Odogwo/thesisSoftware) | README identifies thesis software app without implementation evidence | NEEDS INSPECTION; determine ownership, code maturity and integration relevance |
| MX-APP-007 | [Commitment-Intelligence-Assurance-System](https://github.com/Odogwo/Commitment-Intelligence-Assurance-System) | README provides name only | NEEDS INSPECTION; establish scope before registering as a public product |

These candidate IDs are provisional registry IDs; **none is marked INTEGRATED or VERIFIED**. Avoid treating README aspirations as deployed functionality. Do not expose these as public MAXYRON offers without separate review.

## 2026-11-02 — Elite_KOS planned-platform discovery

**Sources of authority:** `Odogwo/Elite_KOS/Execution/Projects/REGISTRY - Projects.md`, `Execution/Commercial/Commercial Venture Registry/01 - REGISTER - All Commercial Ventures.md`, and `Meta-System/Repository Promotion - RPMA/REGISTER - Repository Promotions and Standalone Repositories.md`. These source registers remain authoritative for project state, venture hypotheses and repository promotion respectively. This section is a **discovery crosswalk**, not an assertion that websites are live.

| Provisional ID | System / opportunity | Elite_KOS source state | MAXYRON disposition |
|---|---|---|---|
| MX-APP-008 | ThesisForge | Migrated project under `Execution/Systems/`; software/product for academic research | Product candidate; inspect build and hosting |
| MX-APP-009 | Drawbridge Knowledge Platform | Active project; Stage 01 private website MVP reported | Separate-brand review; verify current site, rights and branding |
| MX-APP-010 | Enterprise Intelligence System | RPMA RPM-0014 incubating; standalone repository planned, not verified | Strategic platform candidate; do not claim deployed |
| MX-APP-011 | BLM Applied AI Engineering | RPMA RPM-0002 standalone programme repo; future website area | Education/programme candidate |
| MX-APP-012 | AI Efficiency Gap Diagnostic | Active project root | Diagnostic candidate; check overlap with AI Verification Capacity Diagnostic |
| MX-APP-013 | AI-Mediated Research Assurance System | Active project root | Research product candidate |
| MX-APP-014 | Knowledge-to-Product Opportunity Scorer | Commercial CV-CAND-008, unvalidated | Concept candidate; verify build and commercial gates |
| MX-APP-015 | Business Knowledge Assistant | Commercial CV-CAND-011, unvalidated | Concept candidate |
| MX-APP-016 | Lead Recovery Assistant | Commercial CV-CAND-001, unvalidated | Concept candidate |
| MX-APP-017 | Lead Conversion Dashboard | Commercial CV-CAND-006, unvalidated | Concept candidate |

**Do not automatically register all 22 commercial ventures as websites.** Services, research ideas and unbuilt concepts belong in the commercial register until an actual web product or deliberate website plan is established. No new MAXYRON site links have been published by this discovery update.

### Governance crosswalk
- **Elite_KOS ECVS / Commercial Venture Registry:** opportunity, viability, commercial stage, priority.
- **Elite_KOS RPMA:** repository promotion, provenance, authority and cutover.
- **Standalone product repository:** implementation, tests, release, product evidence.
- **MAXYRON integration registry:** MAXYRON placement, link/deployment verification, brand fit and customer-facing readiness.

### Next verification queue
1. Review ThesisForge and AI Efficiency Gap Diagnostic for working builds and duplication with existing diagnostic.
2. Verify Drawbridge's private MVP and determine whether to link, retain as independent brand or withhold.
3. Reconcile BLM and EIS planned website scope before any public listing.
4. Evaluate the remaining concept candidates only when they are selected for development.

## 2026-11-02 — Elite_KOS learning and mastery platform candidates

**Status: discovery only — not deployed or approved for public integration.** Strategic treatment and authority boundaries: [MAXYRON organization, product and mastery architecture](../strategy/MAXYRON-ORGANIZATION-PRODUCT-AND-MASTERY-ARCHITECTURE.md).

| Provisional ID | Candidate | Canonical source | Integration state |
|---|---|---|---|
| MX-APP-018 | AI Mastery | Elite_KOS `Execution/Learning/AIM - 05 - README - AI Mastery.md` | CANDIDATE |
| MX-APP-019 | Bible Knowledge & Memory Mastery | Elite_KOS `Bible Knowledge/PROGRAMME - Bible Memory Mastery.md` | CANDIDATE |
| MX-APP-020 | Vocabulary Intelligence & Mastery | Elite_KOS `Capabilities/Vocabulary/README.md` | CANDIDATE |
| MX-APP-021 | Learning Science Mastery | Elite_KOS `Execution/Learning Science Mastery/README - Learning Science Mastery.md` | CANDIDATE |
| MX-APP-022 | Mathematics & Physics Mastery Laboratory | Elite_KOS `Execution/Projects/Mathematics and Physics Mastery Laboratory/PROJECT - Mathematics and Physics Mastery Laboratory.md` | CANDIDATE |
| MX-APP-023 | Integrated Learning, Memory & Cross-Disciplinary Architecture | Elite_KOS `Ideas/IDEA-0008 - 20 - DEVELOPMENT - Integrated Learning, Memory and Cross-Disciplinary Architecture.md` | SHARED CAPABILITY CANDIDATE; not necessarily a website |

**Identity guardrail:** These candidates belong under a possible **Learning & Mastery Systems** product family. MAXYRON remains positioned as an intelligent systems engineering and research company, not an academy. Do not infer product readiness or learner mastery from canonical notes.

## 2026-11-02 — SEKA research architecture candidate

| Provisional ID | Project | Repository | Verified state | Proposed MAXYRON classification | Integration status |
|---|---|---|---|---|---|
| MX-APP-024 | SEKA — Source Evidence and Knowledge Architecture | [Odogwo/SEKA](https://github.com/Odogwo/SEKA) | README verified: documented source-grounded research protocols and NESTLE pilot; **not yet a standalone software application** | Research Products / Knowledge Platforms; future evidence-processing application candidate | CANDIDATE — no MAXYRON website link or deployed SEKA app verified |

SEKA's NESTLE pilot demonstrates a research workflow, not proof of a finished product or completed research verification. Keep SEKA's own project registry and evidence provenance authoritative. Any future MAXYRON product page must distinguish documented architecture, working software, deployment and verified outputs.


## 2026-11-06 — MX-APP-001 return navigation (implemented in product repository)

- **User verified MAXYRON corporate website:** all five public routes opened, layout looked correct and contact `mailto:` opened correctly (user report). Outstanding issue: AI Verification Capacity Diagnostic did not provide a clear link back to MAXYRON.
- **Product owner:** `Odogwo/ai-verification-capacity-diagnostic`; file `index.html`, commit `ca2ef8c44a22f0b3d9b268e90484ac6819410edc`.
- **Change:** added accessible, visible navigation before the diagnostic heading: **Back to MAXYRON Products** → `https://maxyron.com/products`; **MAXYRON Home** → `https://maxyron.com/`. Responsive inline links; the navigation is excluded from report print output.
- **Evidence:** updated `index.html` fetched back and checked for both destinations and `no-print` class. GitHub commit status **Vercel: success** for the above SHA, target `https://vercel.com/odogwos-projects/maxyron-ai-verification/4byuH1ud8JqctDJMhSntnjTbN4Xj`.
- **Separate pending check:** independently inspect rendered diagnostic URL on desktop/mobile, confirm return navigation from the questionnaire and results view, and confirm printing still omits the links. Successful deployment status alone does not prove each interaction.
- **Authority:** `Odogwo/maxyron-website` governs parent portfolio placement; the diagnostic application repository owns its interface and functional changes. Do not duplicate its code in the corporate repository.
