# MAXYRON — Unified Website, Distributed Hosting and Infrastructure Integration

**Date:** 2026-11-07  
**Status:** Design proposal for the next MAXYRON hosting/integration stage. Not an implemented deployment, domain change, approved R2, or newly created infrastructure repository.  
**Current authority:** [MAXYRON Current Reconciled Architecture — R1](CURRENT-RECONCILED-ARCHITECTURE.md).  
**Related proposal:** [Infrastructure Authority, Product Ownership and Build-to-Mastery](PROPOSAL-MAXYRON-INFRASTRUCTURE-AND-BUILD-TO-MASTERY-2026-11-07.md).  
**Operational sources:** `docs/ARCHITECTURE.md`, `docs/STATUS.md`, `docs/integrations/REGISTRY.md`.  
**Security boundary:** This public strategy note contains neither secret keys, private node access details nor confidential client/research data.

## 1. User clarification

The intended MAXYRON ecosystem will eventually be discoverable and accessible through the MAXYRON website, with products, engineering implementations, research/knowledge publications and learning/mastery programmes integrated into one coherent experience. The user asks what this means for **hosting** and whether an organisation-wide infrastructure repository should directly feed or host the website.

**Core answer:** One unified user experience does NOT require one repository, one application process, one server or one hosting provider. The public website is the **navigation, presentation and integration entry point**; separately governed products remain independently deployable; the future private infrastructure repository governs cross-product hosting, configuration inventory, availability and dependencies. Domain learning programmes are independently authored and selectively published via a MAXYRON learning portal or catalogue.

## 2. Verified baseline versus proposals

### Verified from connected repository / prior user tests
- Corporate website repository: `Odogwo/maxyron-website`, Next.js/React, Vercel deployment reported and MAXYRON domain configured in the existing website deployment records.
- Website has source routes for homepage, `/services`, `/products`, `/learning`, `/research`; user previously reported navigation working. `/learning` currently describes domains and programme maturity, not an operational learning-management system.
- AI Verification Diagnostic is independently hosted on a Vercel URL and its return link to MAXYRON Products was user-verified; it is not a certified assessment.
- SEKA product code and API exist but its public integration/maturity remains subject to authentication, runtime and release checks; do not assert it is already reachable through a MAXYRON subdomain.
- ELAB-N01: local Linux private lab, key-based SSH, local-only HTTP service and a tested Windows tunnel. It is a **private development/staging node**, not currently safe or configured for open internet product hosting.
- The proposed `Odogwo/maxyron-infrastructure` repository is not yet created or authorised; current ELAB-N01 operating records remain in private Elite_KOS.

### Planned, not implemented
- Product subdomains (`seka.maxyron.com`, `verify.maxyron.com`), interactive mastery portal (`learn.maxyron.com`), shared identity/SSO, integrated application data, cross-product monitoring, published public case-study paths and future domain-bound routing.
- Do not treat a proposed DNS name as verified or available until provider/DNS ownership, TLS, deployed version and actual browser check all pass.

## 3. Recommended logical topology

```text
PUBLIC VISITORS / LEARNERS
           |
        maxyron.com
   [Corporate Next.js/Vercel]
   Home | Services | Products | Learning | Research
           |
    verified navigation/approved interfaces
   ├── Product A: AI Verification (independent product deployment)
   ├── Product B: SEKA (independent app/frontend + API + governed data)
   ├── Product C: KEMAS (independent app/API, when ready)
   ├── Learning: domain catalogue → independent mastery applications
   └── Research: curated reviewed public knowledge

PRIVATE OPERATIONS / ENGINEERING (NOT PUBLIC ROUTES)
   ├── maxyron-infrastructure (proposed PRIVATE GitHub source registry)
   │     ├── runtime/deployment ownership map and release evidence
   │     ├── environments, provider/dependency mapping and health checks
   │     └── recoverability, access and monitoring standards
   ├── Product repositories (authoritative source/feature history)
   ├── Domain mastery repositories (authoritative pedagogy/assessments)
   └── ELAB-N01 (private local engineering/staging node)
```

GitHub source → build/test pipeline → deployment provider → approved domain/URL → MAXYRON navigation link. The public site does NOT simply browse private GitHub documentation, nor expose the Linux machine's administrative UI.

## 4. URL and hosting plan (illustrative; DNS not configured by this document)

| Surface | Recommended URL | Hosting approach | Current status |
|---|---|---|---|
| MAXYRON corporate | `https://maxyron.com` | Keep existing Next.js/Vercel frontend unless a verified reason to migrate arises | Existing/user-verified |
| Products catalogue | `https://maxyron.com/products` | Same corporate frontend, with readiness and safe links | Source route/user-tested |
| Learning catalogue | `https://maxyron.com/learning` | Same corporate frontend; approved domain/maturity listings | Source route/user-tested |
| Research/knowledge | `https://maxyron.com/research` | Same corporate frontend for approved public content | Source route/user-tested |
| AI Verification app | `https://verify.maxyron.com` *candidate* | Independent app deployment linked from Products, optional later custom domain | Custom domain NOT configured; current external app exists |
| SEKA app | `https://seka.maxyron.com` *candidate* | Independent authenticated frontend + API/database backend | Not a verified MAXYRON integration |
| Unified learning portal | `https://learn.maxyron.com` *candidate* | Standalone interactive mastery app, only if genuine cross-domain requirements warrant one | NOT implemented |
| Internal infrastructure/operations | no public URL by default | Private GitHub governance + restricted internal admin surfaces, provider consoles and approved internal networks | Proposed shared repo |

Provider choice is per workload. Vercel may host appropriate frontends; separately hosted APIs/databases can remain on suitable managed services where already provisioned and tested. A custom subdomain is a DNS/hosting configuration choice, **not** a requirement to merge source code or migrate services.

## 5. Integration phases and gates

### Phase A — Link-based integration: recommended first
- Retain existing MAXYRON corporate hosting and existing product deployment URLs.
- Centralize verified product cards in `/products`, mastery programmes in `/learning` and publications in `/research`.
- Every listing states status: live and verified / pilot / under development / private / proposed.
- Include reciprocal MAXYRON navigation in product apps only when user-approved; AI Verification is the initial validated example.
- Verify application URL, access controls, product deployment commit, browser behavior, mobile usability, privacy obligations and return navigation.
- No SSO, DNS migration, proxying or private infrastructure exposure is required.

### Phase B — Brand-consistent addresses: conditional
- Add verified subdomains **per product** using each hosting provider's domain configuration and DNS, maintaining app-level source and deployment isolation.
- Validate TLS, redirects, return links, cookies, auth callback origins, API CORS, internal redirects, indexing/robots and rollback.
- Do not force subdomains onto unfinished, private, or sensitive apps.
- Consider Vercel/Next.js rewrites only when a well-tested same-domain URL or API routing requirement exists; external rewrites and caching require careful auth/security review. Avoid introducing a reverse proxy merely to make branding look uniform.

### Phase C — Shared learning identity and experience: only when justified
- Learning catalogue remains corporate; interactive courses may be a separate `learn` app with programme enrolment, learner identity, assessments, progress and credentials *only after an explicit data and identity design*.
- Use trusted identity provider/SSO if multiple mature apps require cross-app sign-in; linking apps or using subdomains alone does not provide SSO or shared progress.
- Separate protected operational data and learner data, enforce least privilege, explicit consent, data retention and auditable assessment records.
- Domain owners author mastery content, shared learning runtime coordinates approved delivery and records actual evidence.
- Publish only sanitized, rights-cleared learning case studies; no internal network maps, credentials or client material.

## 6. Infrastructure repository is a control plane / source of truth, NOT public runtime

The proposed PRIVATE `maxyron-infrastructure` repository may hold:
- Systems register: system ID, authoritative product repository, owner, public/private classification, verified production URL, provider/project reference, runtime type, dependency and status;
- deployment architecture: what depends on what, routing plans, environments, external managed services, stage and last verification date;
- shared operational policy: secrets-handling standards, recovery, backups, monitoring, incident response, change/approval checkpoints;
- build-to-mastery **evidence link and extraction register**, but not all curricula or duplicate teaching material.

It should NOT contain production secrets, personal data, customer databases, raw privileged logs, duplicate full codebases, or live credentials. Hosted applications need deployable code and runtime environments; a documentation repository by itself does not run a website.

### Product-to-website integration contract
For every application, record:
```yaml
system_id: MX-APP-EXAMPLE
product_source_repo: owner/product-repository
product_authority: owner/product-repository/path
infrastructure_reference: private-registry-record-id
website_route: /products
public_url: null
hosting_provider: unverified
deployment_status: under-development
auth_requirement: review-pending
privacy_review: review-pending
reciprocal_navigation: not-verified
learning_extraction_id: null
latest_evidence: source-or-test-link
```
This is a proposed **shape**, not a real deployed record. The existing `docs/integrations/REGISTRY.md` remains the MAXYRON website integration evidence owner until explicitly reconciled.

## 7. Build-to-mastery hosting connection

```text
Product-specific source and evidence
      → governed Build-to-Mastery Extraction Record
      → domain authority (Computer-Science-OS / maxyron-ai / psychology etc.)
      → reviewed learning object + tests / rubrics
      → approved publishing or course-delivery pipeline
      → maxyron.com/learning catalogue
      → optional interactive learn.maxyron.com portal
      → protected learner assessment and progress data
```

One source build can feed multiple disciplines, but no copy of operational secrets reaches public courses. A functioning product is *evidence of engineering*, not evidence that someone has independently mastered its mechanics.

## 8. Implementation order and decisions deferred

1. **Do not move existing MAXYRON hosting or ELAB-N01** merely to implement a unified navigation experience.
2. Enhance the existing `docs/integrations/REGISTRY.md` per-product hosting verification fields and select one verified existing demonstration for phase A; AI Verification already provides the baseline. Next product integration should undergo release/authentication review before adding its public deep link.
3. If the owner approves, create `Odogwo/maxyron-infrastructure` as a private cross-product inventory/control-plane repository, with no copy of existing ELAB detailed runbooks until a separate reviewed cutover.
4. Publish a first linked *Linux Systems Engineering* learning example at the correct maturity level only after mapping the existing `Computer-Science-OS` track and sanitizing private runbook details.
5. Reassess need for a separate learning application, shared identity, product subdomains or cross-service routing after real user workflows and production boundaries are verified.
6. Prepare a future R1→R2 change matrix before changing one-current-authority website strategy. Nothing in this note is a migration, DNS edit or proof of an integration.

## 9. Rationale and sources

This preserves prior MAXYRON R1 architecture, the 2026-11-06 distinction between learning subject and physical infrastructure, and the 2026-11-07 cross-product operations proposal. It recognises established Vercel corporate deployment and existing independently hosted diagnostic integration, without asserting nonexistent integration of other systems. Vercel's current domain docs support per-project subdomains; its rewrites docs support same-origin path routing or external forwarding when justified, but this is optional, not the default.

Relevant official documentation:
- https://vercel.com/docs/domains/working-with-domains/add-a-domain
- https://vercel.com/docs/routing/rewrites

**Smallest next implementation:** audit the existing public Products and Learning page links and classify deployed applications by user-accessibility, verified URL, authentication/privacy and readiness before implementing additional website links.
