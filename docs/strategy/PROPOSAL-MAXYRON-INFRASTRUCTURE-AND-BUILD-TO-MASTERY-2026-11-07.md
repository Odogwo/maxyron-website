# MAXYRON — Infrastructure Authority, Product Ownership and Build-to-Mastery Architecture

**Date:** 2026-11-07  
**Status:** Proposed architecture / design record. Not an approved R2, not a created repository, not a deployment or migration instruction.  
**Current strategic authority:** [CURRENT-RECONCILED-ARCHITECTURE.md](CURRENT-RECONCILED-ARCHITECTURE.md) (R1).  
**Relationship:** Refines and extends [Shared Engineering Infrastructure and Cross-Disciplinary Learning Assessment](ASSESSMENT-SHARED-ENGINEERING-INFRASTRUCTURE-2026-11-06.md).  
**Confidentiality:** This is a public-facing *sanitized architecture proposal*; no device secrets, private addresses, credentials, confidential client records, recovery keys or sensitive infrastructure details belong here.

## 1. New design question and intent

MAXYRON is accumulating distinct products and implementations: a Linux lab (ELAB-N01), AI verification diagnostics, scholarly research software (SEKA), knowledge extraction systems, psychology mastery applications, and other current or proposed services. The owner asks whether one dedicated repository should hold the infrastructure documentation for the entire organisation, **while every product that is built can also be transformed into a reusable and assessable learning/mastery programme**.

This is broader than the original one-node decision. The former rationale deferred creating an additional infrastructure repository because ELAB-N01 alone did not require a separate corporate operations home. The current question introduces **cross-product infrastructure inventory, common operational controls, shared dependencies and a build-to-learning pathway**. This changes the recommended *design direction* but does not authorise a repository creation or cut over existing source authorities.

## 2. Recommendation

**Recommend a private dedicated repository `Odogwo/maxyron-infrastructure`**, with display name **MAXYRON Infrastructure & Platform Operations**, *subject to explicit creation approval and acceptance of its scope*. It would own the **shared organisational infrastructure registry and organisation-level runbooks**. It should NOT own all product source code, detailed product implementation histories, domain research, or complete curricula.

A central inventory is justified because cross-product operations must answer: What runs where? Which repo owns code? What deployment/environment dependencies exist? How are secrets handled without storing them? What backups and restorations have actually been tested? What will break if a shared node, account or service fails? Which evidence establishes a capability as working? What service/lesson can reuse the implementation?

No repository named `maxyron-infrastructure` was found in the accessible Odogwo repository list at the time of this recommendation. The target is proposed and has not been created.

**Authority rule:** One object has one authoritative owner; related repositories contain references, interface contracts, and purpose-specific derivatives, not full uncontrolled copies.

## 3. Four-layer responsibility architecture

| Layer | Responsibility | Canonical location | Examples |
|---|---|---|---|
| Shared infrastructure / platform operations | Cross-product runtime inventory, common environments, networks, hosting platform accounts, access controls, backup/restore standards, monitoring, incident protocol, capacity, dependency graph | Proposed private `maxyron-infrastructure` (after acceptance) | ELAB node entry, hosting-provider inventory, service dependency and recovery map |
| Product-specific engineering | Individual app code, architecture, features, tests, app-specific deployment instructions, release history, app DB migrations and owned domain data | Product's own repository | SEKA research workflow/backend/frontend; AI verification scoring and UI; psychology app |
| Domain learning and mastery | Competencies, prerequisites, concepts, guided practice, diagnosis, independent reconstruction, assessment rubrics, retention and transfer | Existing domain learning owner | `Computer-Science-OS` for OS/Linux/networking; `maxyron-ai` for AI-specific practice; psychology mastery in its governed domain |
| Corporate presentation / portfolio | Public products, services, learning catalogue and *approved* case studies | `maxyron-website` | Sanitized service/product page, links to validated learning examples |

**Existing ELAB-N01 exception during transition:** Its authoritative private operational files remain in `Elite_KOS/Execution/Systems/ELAB-N01` until a planned and verified authority handover. Creating a central catalogue does not itself move, duplicate, or deprecate them. ELAB-N01 already has a linked, planned Linux Systems Engineering mastery track in `Computer-Science-OS/Meta-System`. Computer-Science-OS migration/cutover is still in progress.

**Existing AI exception:** `maxyron-ai` retains AI-specific engineering, curricula, experiments and AI product architecture. Its internal operations area is not the default owner of unrelated corporate infrastructure.

## 4. Cross-product routing examples

| Source system | Operational/infrastructure view in the proposed shared repository | Product-authoritative records | Learning derivation |
|---|---|---|---|
| ELAB-N01 Linux MacBook | Node register, service inventory, external dependency/backup/health interface, common operations policy; link to current Elite_KOS runbook | Existing private Elite_KOS ELAB-N01 operational family until approved cutover | CS networking, Linux OS, SSH, systemd, secure tunnelling, reliability, troubleshooting |
| AI Verification Diagnostic | Hosting/deployment-provider reference, domain/TLS monitoring, release evidence link and recovery dependency | Actual diagnostic repository owns scoring, questionnaire, interface and release-specific instructions | AI verification methodology under AI learning; programming/testing practices under computing learning |
| SEKA | Environment and deployment topology, service/dependency register, monitoring/restore responsibility, links to authoritative app instructions | SEKA owns research protocols, domain behavior, application code and project data governance | AI agent/evaluation and software engineering units; scholarly methods where appropriate |
| Psychology Knowledge & Mastery | Hosting, authentication, data persistence/backup and deployment status references | Psychology application owns features, psychology content and application-specific tests | Psychology mastery remains in the psychology domain; Next.js/UI/application engineering learning belongs in software/CS |
| KEMAS | Platform/deployment/dependency links and operational risk references | KEMAS owns extraction workflows, source handling, models and code | Evidence extraction methodology, AI pipeline/evals, Python/API implementation according to learning domain |

Do not assert that every product is hosted on ELAB-N01. The shared repository inventories *actual* platforms, including third-party managed hosting, while the node is only one possible execution surface.

## 5. Every build becomes a learning source — not automatically a duplicate full course

**Mandatory light-weight capture:** Every meaningful build milestone produces a governed **Build-to-Mastery Extraction Record** (BMER), even when no full lesson is authored. This records:
- stable source system/product ID and owning repository; source commit or release; evidence date, verification status, author/rights;
- engineering problem, user value, decisions considered, design rationale, architecture and implementation boundaries;
- relevant technical concepts and their subject-domain owners;
- commands/code as safe educational fixtures, sanitized failure cases, troubleshooting and corrected misunderstandings;
- skills/prerequisites, proposed learning outcomes, skill levels, potential reuse across disciplines;
- quality/safety/privacy/licensing gate, and proposed destination learning-object IDs.

**Selective promotion:** Learning owner reviews each extraction record. One implementation can yield many domain-specific learning objects *linked to the same evidence*; one generic learning concept should be canonical in only one approved educational domain and referenced elsewhere as a prerequisite.

**Mastery progression:** `Build evidence → conceptual extraction → verified explanation → worked example → safe practice → predict/diagnose → independent reconstruction → transfer to another environment → delayed retrieval and assessment → mastery evidence`.

**Crucial boundary:** A successfully deployed product is engineering evidence; it is **not proof that the owner or a learner has mastered the underlying subject**. Mastery requires a separately evidenced assessment. A build may warrant only an extraction record or case study; it should not automatically trigger a large, redundant course.

**Illustration:** ELAB-N01 produces an infrastructure runbook (private operations), a Linux networking mastery unit (Computer Science), an application programming exercise (Web Engineering), an SSH trust-boundary case study (Security learning), and a potential sanitized public portfolio case study. All reference one verified source implementation and retain different purposes.

## 6. Recommended private repository structure (proposal, not yet created)

```text
maxyron-infrastructure/
  README.md
  ARCHITECTURE.md
  AGENTS.md
  STATE.md
  00_Governance/
    OWNERSHIP-AND-AUTHORITY.md
    CHANGE-AND-VERIFICATION-PROTOCOL.md
    PRIVACY-AND-SECRETS-POLICY.md
  01_Registers/
    SYSTEMS.csv
    NODES.csv
    SERVICES.csv
    DEPENDENCIES.csv
    ENVIRONMENTS.csv
    BACKUP-AND-RESTORE.csv
    LEARNING-EXTRACTION-INDEX.csv
  02_Shared-Architecture/
    DEPLOYMENT-AND-DEPENDENCY-MAP.md
  03_Operations/
    RUNBOOKS/
    HEALTH-AND-INCIDENTS/
  04_Security-and-Recovery/
    ACCESS-BOUNDARIES.md
    BACKUP-AND-RESTORE-STANDARDS.md
  05_Integrations/
    PRODUCT-INTERFACE-CONTRACTS.md
  06_Build-to-Mastery/
    EXTRACTION-PROTOCOL.md
    RECORDS/
  07_Decisions-and-History/
    DECISION-LOG.md
  08_Evidence/
    VERIFICATION-INDEX.md
```

Create files only when actually used; avoid empty scaffolding for symmetry. Registries may later be generated or validated from product-owned machine-readable manifests rather than hand-maintained duplications. Do not commit production secrets, internal addresses in public targets, personal/client research data, live authentication tokens, private keys or unreviewed full logs.

## 7. Minimal linkage and ownership schema

Every shared-system record should identify at minimum:
```yaml
system_id: SYS-EXAMPLE
display_name: Example System
kind: product | infrastructure-node | shared-service
owner_repo: owner/repository
operational_authority: owner/repository/path
code_authority: owner/repository/path
runtime_environment: verified | proposed | unknown
runtime_reference: sanitized-identifier
deployment_status: verified | historical | proposed | unknown
dependency_ids: []
evidence_refs: []
learning_source_refs: []
security_classification: internal
last_checked: YYYY-MM-DD
next_action: specific-unresolved-gate
```
The schema illustrates fields; validate formats and avoid copying credentials. For an actual database, choose explicit normalised tables and immutable audit events rather than free-form state duplication.

Learning-object mapping:
```text
SYS-ELAB-N01 → BUILD-ELAB-N01-ADDRESSING-001
             → CS-NET-01 (IP, DHCP and static addressing)
             → CS-SEC-01 (SSH, UFW)
             → CS-NET-02 (port forwarding)
             → CS-OPS-01 (systemd state)
```
Identifiers are examples of a proposed registry, not assertions that these objects or evidence IDs are deployed in a new shared repository.

## 8. Governance and migration gates

1. Keep the existing R1 strategy as the only current reconciled authority. This proposal is a candidate for future R2 consideration and does not amend MAXYRON public services.
2. Inventory all product and infrastructure authorities; check conflicts with the legacy final-repository reduction plan and explicitly document why one cross-product operations owner is justified.
3. Create the private repo only after approval; initialize a small registry, purpose, policies and verified owner links first. Avoid a bulk copy.
4. First pilot: enter ELAB-N01 as a *linked* node and select one independently hosted product to verify the cross-provider registry/ownership model.
5. Add a build-to-mastery extraction for the ELAB-N01 fixed-IP + SSH-tunnel implementation, then reconcile it with the already-existing `Computer-Science-OS` Linux track. Preserve lessons in that domain, not in the infrastructure repo.
6. Verify links, provenance, backreferences, access boundaries and repository readback. Make any future ELAB operational ownership transfer a separate explicit source-to-destination and rollback plan; do not delete originals on creation.
7. Only then add monitoring, backup checks, generated status data or automation, with tested permissions and no claim of production readiness until validated.

## 9. Decision history and smallest next action

- **Earlier view (2026-11-06):** separate shared infrastructure repo deferred because one functioning Linux node did not yet establish a multi-asset operations function. Learning discipline identified as Computer Science and operations in private Elite_KOS.
- **Expanded question (2026-11-07):** unified corporate infrastructure documentation across multiple independently owned products, with a universal build-to-learning extraction mechanism.
- **New recommendation:** a private `maxyron-infrastructure` as central *cross-product operational registry and shared operations authority*, while the existing operational documents remain authoritative pending migration and domain learning stays domain-owned.
- **Accepted state:** this is a proposal, not approval to create a repo, move files, rewrite R1 or deploy a mastery system.
- **Smallest next action:** approve or adjust the repository boundary and name; then create it with a minimal ownership registry and an ELAB-N01 plus one externally hosted product pilot.
