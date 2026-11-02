# Bible Systems Audit and MAXYRON Integration Roadmap
Date: 2026-11-02
Status: **Discovery and architecture recommendation, not exhaustive recursive audit, migration approval or software deployment**

## Executive finding
Elite_KOS already contains a substantive Bible Knowledge Architecture (BKA), canonical Bible content, Scripture discovery, thematic/semantic knowledge, Bible memory, Sabbath School and study systems. A standalone `Odogwo/Bible-OS` repository already exists and is **migration-in-progress**. **Do not copy all Bible folders into MAXYRON or create another Bible repository.** MAXYRON should act as product catalog and eventual application integration layer, while domain authority is resolved in Bible-OS/Elite_KOS.

## Confirmed authoritative sources
- `Odogwo/Elite_KOS/Bible Knowledge/README - Bible Knowledge.md`: canonical Bible content territory.
- `Odogwo/Elite_KOS/Meta-System/Bible - BKA/META - Bible Knowledge Architecture.md`: domain governance, canonical identities and epistemic boundaries.
- `Odogwo/Elite_KOS/Ideas/IDEA-0005 - 00 - CORE - Bible Knowledge Architecture.md`: design provenance, status implemented-architecture-validating.
- `Odogwo/Elite_KOS/Meta-System/Bible - BKA/REGISTER - BKA - Audit and Technical Debt.md`: open reconciliation and compatibility authority retirement.
- `Odogwo/Bible-OS/README.md`: standalone migration, source provenance and ownership warning.
- `Odogwo/Elite_KOS/Bible Knowledge/PROGRAMME - Bible Memory Mastery.md`: memory programme, learning_state not-started.
- `Odogwo/Elite_KOS/Meta-System/Bible - BKA/PROTOCOL - BKA - Sabbath School Knowledge.md`: curriculum-driven lesson identity.
- `Odogwo/Elite_KOS/Meta-System/Bible - BKA/REGISTER - BKA - Scripture Discovery Registry.md`: coordinate hierarchy and developed-object discovery.

## Audited territories and proposed treatment
| Territory | Function | Treatment |
|---|---|---|
| `Bible Knowledge/` | Canonical Scripture, studies, tags, developed biblical objects, Sabbath School | Keep under Bible domain authority; application reads/derives approved structured content |
| `Meta-System/Bible - BKA/` | Governance, registries, naming, coordinate and semantic rules | Preserve as governing contract, do not fork |
| `Capabilities/Memory Systems/` | Shared personal book/number images, scene architecture | Reference/adopt versioned banks; no independent duplicates |
| `Ideas/IDEA-0005*` | BKA origin and validation | Provenance, not runtime content |
| `Ideas/IDEA-0008*` | Shared learning and cross-domain memory | Cross-product architecture, not Bible content |
| `Resources/Bible Related/` | Earlier biblical wisdom/content architectures | Inspect for overlap and legacy status before promotion |
| `Dashboards/DASH - Bible.md` | Navigation | Design reference |
| `Content_Studio/` | Scripture-themed publication content | Distinct publication workflow and permissions |
| `Truth House/` | Bible-related web/content experiments | Separate product discovery; do not silently absorb |
| `Mastery/` | Mastery portfolio and state | Learning programme governance, not proof of deployed app |

## Existing Bible-OS migration: critical
The `Odogwo/Bible-OS` README reports an initial **42 Bible Knowledge files + 30 BKA governance files + 2 adopted mnemonic reference banks**, with an exact manifest and dependency audit. It explicitly says this is a **preservation copy**, **migration-in-progress**, not canonical cutover; Elite_KOS remains active source. Do not independently edit both. This count is from that repository's documented migration snapshot, **not a current full file count**. Before any cutover read `AI_BOOTSTRAP.md`, `STATE.md`, `Meta-System/Migration/manifest.json` and `dependency-audit.json`; compare current Elite_KOS changes and confirm ownership.

## BKA rules to preserve in software
1. BKA governs rules; Bible Knowledge owns content.
2. One canonical Scripture identity, many linked meanings, studies, functions and interpretations.
3. Canonical Scripture coordinate `TBB-CCC-VVV` and BOOK-default storage. Do not precreate one file per verse.
4. Semantic BC/BP/BM/BS objects with stable IDs and neutral bands; dedicated Bible Tag registry; registration required for creation.
5. Distinguish `SCRIPTURE ≠ SOURCE CLAIM ≠ ANALYSIS ≠ INTERPRETATION ≠ THEOLOGICAL SYNTHESIS ≠ PERSONAL INSIGHT ≠ PERSONAL REFLECTION`.
6. `BIBLE STUDY` is subject-driven; `SABBATH SCHOOL` is curriculum-driven, with SOURCE/VERSES/ANALYSIS roles and year-quarter-lesson identity.
7. Mnemonic recall supports retrieval, not exegesis or mastery; authoritative images/banks must be verified.
8. Source-bound SERMON/LECTURE/TEACHING/BIBLE CLASS/COMMENTARY preservation does not mean agreement.
9. Translation provenance, copyright permissions and citation boundaries must be resolved before publishing Scripture or curriculum texts.

## Discovered content and capability groups
- Scripture objects: BOOK, VERSE, PASSAGE, PSALM and developed Scripture notes; coordinate discovery registry.
- Semantic knowledge: BIBLE CONCEPT, PRINCIPLE, MECHANISM, STRUCTURE; BIBLE TAG; semantic object and band registries.
- Study: BIBLE STUDY; Sabbath School Q3 2026 SOURCE, VERSES, ANALYSIS artifacts.
- Memory: 66-book identity and position mappings; number image bank; memory scenes; Bible Memory Mastery stages.
- Theology/teaching: source-bound sermons/teachings/commentary and earlier Biblical Wisdom Content Architecture.
- Operations: BKA standards, Scripture storage, tagging, semantic banking, audit/technical debt, migration and legacy reconciliation.

## Known technical debt
BKA audit describes governance as sound with controlled content-level debt. Legacy THEORY/FRAMEWORK/PATTERN/PROCESS and related labels require contextual reconciliation, not mechanical renaming. Compatibility predecessor registries and links require audit before retirement. Selected Scripture/study reconciliations are recorded as completed, while remaining historical cases persist.

## Recommended MAXYRON product architecture (proposal only)
`maxyron.com` (company + Products catalog) → optional Bible Knowledge & Mastery product application → governed Bible-OS content/API layer → BKA identity/semantic registries → optional shared learning/memory services. Keep Bible study, memory and Sabbath School as modules of a coherent experience, while preserving independent domain and source authority. The app's working name and public audience are undecided. MAXYRON is not a school.

### Potential MVP
A Bible reference explorer with canonical book/chapter/verse addressing, governed developed-note search, source-vs-interpretation labels, links to concepts and themes, and a limited memory quiz using authoritative images. Do **not** promise a full Bible text corpus, automatic theological correctness, or verified learner mastery.

## Phased continuation plan
**Phase 0 — Complete inventory:** obtain Git tree/path listing and compare all Bible-related territories, including legacy and standalone repos; classify files by owner/status; no premature migration.
**Phase 1 — Authority and cutover audit:** inspect Bible-OS manifest, STATE, dependency audit and current Elite_KOS differences; resolve canonical authority and stale links; record explicit cutover approval.
**Phase 2 — Product specification:** audience, permissions, Bible translation licensing, modules, MVP use cases, navigation and acceptance tests.
**Phase 3 — Data and interface design:** Scripture coordinate schema, typed semantic objects, source provenance, versioning, query and search endpoints, memory-bank adapters.
**Phase 4 — Bounded MVP:** one book/passage, a few verified semantic objects, one Sabbath School family and a small memory practice; compare results against canonical files.
**Phase 5 — Validation:** source accuracy, coordinate uniqueness, provenance separation, accessibility, learning assessments, security, performance and copyright checks.
**Phase 6 — MAXYRON integration:** only after validation add product catalog link, domain routing, documentation, operations and status in `docs/integrations/REGISTRY.md`.

## Open decisions
- Who is the initial user: private personal learning, public study, teachers, church groups or subscription customers?
- Is the first product a Bible study knowledge explorer, Bible memory trainer or integrated Bible mastery platform?
- Which Scripture translation(s) may be displayed, with what licensing?
- What is the exact Bible-OS cutover and versioning strategy?
- Should Truth House remain a distinct publishing product?

## Continuity
Start future work from this note, the BKA audit/technical debt register and Bible-OS migration records. Preserve source paths, evidence and approval state. Never claim all Bible files have been migrated or all planned capabilities are live.
