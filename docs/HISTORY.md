# Chronological History and Decision Log
## 2026-10-31 — Initial domain, website and email setup (reconstructed)
1. Brand selected: MAXYRON; tagline 'Engineering Intelligent Systems.'
2. Domain `maxyron.com` acquired via Namecheap (user confirmed).
3. GitHub repo `Odogwo/maxyron-website` established; Next.js brochure site built.
4. Vercel deployment connected; apex and www domains reported valid; website viewed on desktop/mobile.
5. Zoho Mail Free selected over paid email alternatives; organization and `martins@maxyron.com` super-admin created.
6. Namecheap DNS configured with Zoho verification TXT, Custom MX, SPF, DKIM; Zoho reported all verified.
7. Alias `hello@maxyron.com` added to primary mailbox (user confirmed). The alias form was reached after confusion with Zoho Accounts 'Login Email Address' screen.
8. Brand display-name convention decided: 'Maxyron' for email, 'MAXYRON' for logo.
9. Documentation initiative: move project architecture, decisions, infrastructure, processes, status and roadmap into repository so chat history is not required.

## Open verification
No completed end-to-end send/receive test for `hello@maxyron.com` is evidenced. Exact saved alias display name not independently confirmed. Vercel plan commercial-use suitability and legal entity relationship remain to be checked.

## Future entries
Append date, change, why, evidence (commit/deployment/screenshot), verification result, and follow-up. Do not rewrite earlier decisions without an explicit correction note.

## 2026-11-06 — MAXYRON long-term placement of Linux lab and discipline/mastery distinction

- **Origin:** 2011 MacBook became private Elite Lab Node 01, a working Linux engineering server; operational documentation stored in `Odogwo/Elite_KOS/Execution/Systems/ELAB-N01` with prior verified commits.
- **Initial architecture observation:** The same machine can support AI, data science, databases, Python/web programming and business workflows, so it has operational responsibility as shared engineering infrastructure.
- **User's clarification:** 'Cross-domain' should not become a universal topic repository or substitute for genuine cross-disciplinary learning; Linux/SSH/systemd and web-server creation are fundamentally Computer Science/Systems Engineering learning implemented for MAXYRON.
- **Refined recommended distinction:** (1) discipline/mastery owns subject knowledge, exercises and assessment; (2) MAXYRON shared infrastructure owns running machines, services, reliability, security and backups; (3) applications/products own their own deliverables/code; governance defines boundaries. Cross-domain signifies references and reuse, not duplicative ownership.
- **Repository routing:** Educational case candidate `Computer-Science-OS` (migration ongoing); private operational authority `Elite_KOS/Execution/Systems/ELAB-N01`; AI-specific work `maxyron-ai`; corporate public presentation `maxyron-website`; Data Science final curricular authority not yet determined.
- **Development record:** `docs/strategy/ASSESSMENT-SHARED-ENGINEERING-INFRASTRUCTURE-2026-11-06.md` revised with architecture model, learning flow, ownership matrix, decisions/alternatives, examples, evolution history, restoration instructions and the initial assessment preserved in the appendix.
- **Authority guardrail:** This is a durable strategy development record pending incorporation into a formally reconciled R2; current R1, four published service categories, source repositories, deployed applications and node runtime are unchanged by this documentation change.
- **Next:** Reconcile the current computing curriculum and ELAB teaching evidence; map shared mastery interfaces before new repositories or migrations; eventually propose R2 with explicit change table and approvals.

## 2026-11-07 — One website / independently hosted applications integration register

**User direction:** one public corporate MAXYRON website with independently developed and hosted products/learning applications linked back to the main website; shared infrastructure operations and product/domain learning remain separate responsibilities.

**Implementation:** Created an integration protocol (`docs/integrations/INTEGRATION-STANDARD.md`), a focused JSON source of integration truth (`docs/integrations/systems.json`, eight audited system records), a static source/privacy consistency validator (`scripts/validate-integration-registry.mjs`), and an extra step in website CI to run it. Updated the live documentation registry `docs/integrations/REGISTRY.md`, project knowledge index, and status. Historical candidate records were retained rather than relabeled as public deployments. AI Verification is the sole previously user-tested independent public product link in this audited set; other candidates are not newly exposed.

**Ownership:** The corporate website owns published integration records and navigation, independent product repositories own code/deployments and return-link implementation, the proposed private infrastructure layer owns cross-product operations if later approved, and domain repos own learning content. ELAB remains private.

**Verification:** GitHub commits and read-back succeeded for new/updated source; an independent static cross-check found JSON records consistent with source page labels and approved links. Remote CI and production browsing were not established in this session; the standalone validation command remains a next test. No frontend UI, DNS, hosting or authentication was changed by this documentation/governance implementation.

**Next:** Check remote CI status, verify an additional product's publicly safe landing route and intended audience, implement/verify reciprocal navigation within its owner repo, and only then publish its URL from MAXYRON.


## 2026-11-11 — Infrastructure shortcut

The /infrastructure route on the corporate website redirects to the owner-private MAXYRON Infrastructure Control Centre. The destination enforces ChatGPT sign-in. The redirect serves an empty response and is excluded from indexing. Operational records remain in the MAXYRON Infrastructure repository. Check the production response and destination access policy after deployment.
