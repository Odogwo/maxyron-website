# MAXYRON Strategic Architecture Notes

These notes preserve MAXYRON's organizational identity, proposed product architecture and key design decisions independently of ChatGPT conversation history.

## CURRENT — one reconciled authority

**[MAXYRON Current Reconciled Architecture — R1](CURRENT-RECONCILED-ARCHITECTURE.md)** (2026-11-05) is the **current working strategic authority for portfolio classification and the next website build**. It reconciles the previous versions, provides one placement table for subjects, services, products, learning/mastery and research, and distinguishes **what is implemented NOW** from **proposed NEXT** and **conditional LATER**. **Read this first** for questions about what MAXYRON is, where any activity belongs, and how to structure the site.

## Dedicated Spirituality & Philosophy knowledge publishing plan

- [Spiritual Knowledge Repository & MAXYRON Publishing Plan — 2026-11-06](SPIRITUAL-KNOWLEDGE-REPOSITORY-AND-MAXYRON-PUBLISHING-PLAN-2026-11-06.md): approved design direction for a private source repository and reviewed public articles under Research & Knowledge. **Target repository not yet created; no live spiritual articles.**

## Cross-workstream continuity map

- **[MAXYRON / Engineering / Spirituality / AI & Mastery — Cross-Workstream Design and Continuity Map (2026-11-06)](CROSS-WORKSTREAM-DESIGN-AND-CONTINUITY-MAP-2026-11-06.md):** reconciles the distinct workstreams, design reasoning, canonical ownership, spiritual article evolution protocol, computer science/infrastructure division, implemented versus proposed features, repository status and next gates. This is a **continuity cross-reference**, not a new R2; R1 remains authoritative.

## One main MAXYRON website; independent connected applications — 2026-11-07

**User-confirmed decision:** One corporate website at `maxyron.com` is the entry point. All independent products and learning applications keep their own repositories, hosting and releases, connecting to the main MAXYRON site through governed links/integrations. See [hosting and integration design with ratification addendum](PROPOSAL-MAXYRON-HOSTING-AND-PLATFORM-INTEGRATION-2026-11-07.md). This decides the high-level hosting principle; subdomains, separate infrastructure repo creation and R2 strategy revision remain pending.

## Unified hosting and website integration proposal — 2026-11-07

- **[MAXYRON Unified Website, Distributed Hosting and Infrastructure Integration](PROPOSAL-MAXYRON-HOSTING-AND-PLATFORM-INTEGRATION-2026-11-07.md):** defines how the existing MAXYRON Vercel-hosted corporate website can act as the public entry point to independently hosted products, approved research and domain mastery applications; why private infrastructure governance is not a public website; optional future product subdomains, shared learning portal, identity, integration contracts and rollout gates. The design does **not** configure DNS, create infrastructure repositories or deploy new applications, and retains R1 as current architecture.

## 2026-11-07 — Cross-product infrastructure and build-to-mastery proposal

- **[MAXYRON Infrastructure Authority, Product Ownership and Build-to-Mastery Architecture](PROPOSAL-MAXYRON-INFRASTRUCTURE-AND-BUILD-TO-MASTERY-2026-11-07.md):** extends the earlier one-node decision into a proposed private, cross-product infrastructure/operations registry across ELAB-N01, AI Verification, SEKA, psychology and related applications. It specifies shared-versus-product ownership, a small candidate repository structure, system/learning identifiers, a build-to-mastery extraction contract and cautious migration gates. **No new repository has been created; existing owners and R1 remain authoritative.** It is a proposal for subsequent strategic reconciliation, not an implemented platform.

## Current assessment awaiting next reconciliation

- **[MAXYRON Development Record — Computer Science, Shared Infrastructure and Cross-Disciplinary Learning (2026-11-06)](ASSESSMENT-SHARED-ENGINEERING-INFRASTRUCTURE-2026-11-06.md):** full origin, alternative classifications, user clarification, disciplined three-role model (learning discipline / operational infrastructure / products), reusable learning and mastery progression, implementation examples, evidence boundaries, repository ownership, migration safeguards and next actions. **Current recommendation:** Linux web-server build is Computer Science/Systems Engineering learning, while ELAB-N01 is operational MAXYRON shared infrastructure. Previous broader cross-domain assessment is preserved as an appendix. This is not a competing active strategy, a new repo or a published feature; R1 remains authoritative.

## Continuing MAXYRON development capture protocol

**Goal:** Important design work must remain recoverable from GitHub without depending on ChatGPT conversations. The chat is a work surface, not the source of truth.

For every substantial MAXYRON idea, clarification, architecture refinement, proposed feature or engineering decision:

1. **Resolve the existing owner first:** start from this strategy index and current R1; inspect the appropriate domain/project repository and current state. Do not create a new document/repository simply because the conversation introduces a new term.
2. **Preserve the complete intellectual evolution:** problem and origin, user's exact underlying distinction, alternatives, rejected proposals, rationale, principles, mechanisms, dependencies, architecture, implementation examples/code where appropriate, evidence, risks, state and smallest next action.
3. **Update one correct canonical note:** extend an existing development record where the governing question remains the same; create a distinct note only if its scope and authority are independently justified. Keep historical versions/findings as provenance rather than silent rewrites.
4. **Separate recommendation and authority:** a development record does not itself replace the CURRENT reconciled strategy, modify the public website, certify mastery, establish a runtime service or approve a migration.
5. **Propagate discovery:** link the durable note here, reference it from `docs/README.md` when a major system is affected, and record material decisions in `docs/HISTORY.md`. Update domain owners' own states only when their actual responsibilities change.
6. **Verify persistence:** write to GitHub, obtain a commit, fetch/read back the changed file and check substantial content. Never report an unverified save as completed.

When a new reconciliation is approved, prepare an **R1 → R2** change matrix (retained / added / modified / superseded / deferred), preserve historical notes, and change this index to point at the one new active authority.

## Historical architecture — retained for provenance

1. [v1 — Organization, Product Portfolio & Mastery Systems Architecture](MAXYRON-ORGANIZATION-PRODUCT-AND-MASTERY-ARCHITECTURE.md) (2026-11-02): original parent identity, existing four services, proposed product families and shared mastery principles.
2. [v2 — Organizational Architecture: Services, Products, Knowledge & Mastery](MAXYRON-ORGANIZATIONAL-ARCHITECTURE-V2-2026-11-05.md) (2026-11-05): broad subject reach without content sprawl, four organizational functions and spiritual platform classification.
3. [Implemented website architecture](../ARCHITECTURE.md), [current operational status](../STATUS.md), [service offers](../SERVICE-OFFERS.md) and [integration register](../integrations/REGISTRY.md): evidence for current implementation and actual readiness.

## Future reconciliation rule

Each new strategy version v3/v4 must be compared to the CURRENT reconciled authority, and when approved a new R2/R3 reconciled architecture becomes the **one active reference**. Preserve prior versions and the change rationale. Update this index to point first to the latest reconciled authority; do not create multiple simultaneously active and contradictory architecture documents.

**Identity rule:** MAXYRON is an intelligent systems engineering and research **organization**, not a general-purpose content website or an academy by default. Its public four services remain AI Engineering, Intelligent Automation, Knowledge Architecture, and Research & Advisory. The four cross-cutting organizational functions (Services, Products, Learning & Mastery, Knowledge & Research) are not the same as the four service offerings.

**Governance:** A recorded recommendation is not a published product, approved rebrand, deployment or verified integration. Check source, live behavior and the portfolio registry before any public claim.
