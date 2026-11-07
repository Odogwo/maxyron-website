# MAXYRON — One-Website / Independent-Application Integration Standard

**ID:** MX-INT-STD-001  
**Effective design decision:** 2026-11-07 (user-confirmed one corporate website)  
**Status:** Active operational rule for inventory and release gating. Does not replace R1 organisational strategy, authorize public release, create SSO, change DNS or transfer source ownership.

## 1. Operating model

- `maxyron.com` is the **only corporate entry website**. It presents MAXYRON's services, approved products, research and learning offerings.
- Every distinct application remains independently owned, developed, versioned, hosted and deployed as appropriate. It can be discovered from the main site once reviewed. Do not duplicate product code in the corporate website.
- The owning application can provide a **return-to-MAXYRON** link. A backlink is an application-level change requiring its own verification; the registry alone does not implement it.
- The private MAXYRON infrastructure governance layer (proposed repository, not created here) inventories shared provider/deployment/runtime dependencies, backup ownership and platform risk. It is not a second corporate website and does not publicly expose internal nodes.
- Learning/mastery materials derive from verified builds using separate, domain-owned evidence/assessment. The public Learning catalogue only publishes approved materials and safe links.

## 2. Canonical division of responsibility

| Concern | Single authoritative source |
|---|---|
| Corporate identity/website presentation | `maxyron-website` |
| Product code, releases, product-specific architecture, access behavior | Individual product repository |
| Website-to-product link state and return link evidence | `maxyron-website/docs/integrations/systems.json` + dated evidence in this registry |
| Portfolio classification and business maturity | `maxyron-website/docs/portfolio/portfolio.csv` and portfolio register |
| Cross-product hosting/providers/backup/dependency ownership | Future private `maxyron-infrastructure` when expressly created; current owner records remain authoritative |
| Physical ELAB-N01 operating details and private runbooks | Existing private `Elite_KOS` ELAB family pending verified, authorised cutover |
| Computer Science, AI and domain learning objects | Existing domain learning repos; not copied into the corporate site |
| Live provider configuration | Actual hosting/DNS/provider consoles; GitHub records observed state and verification date, not live secrets |

Use explicit links and source IDs across authorities. Avoid round-trip copying between registers.

## 3. Machine-readable integration register

**File:** [systems.json](systems.json).

Each entry must record:
- `system_id`, `name`, `kind`, and `owner_repo`;
- hosting `provider`, reported or candidate address separately from an `approved_public_url`, and evidence state;
- entry point `website_route`, `state`, `source_file`, and `display_name` if actually present in website source;
- `return_navigation`: target back to MAXYRON, state and proof;
- `access`: public-demo, access-review, internal-only, etc.;
- `readiness`, `verified_on`, `evidence_refs`, `learning_owner` and specific `next_gate`.

**Evidence strength:** `source-verified` means source files inspected; `user-confirmed` means a user tested a behavior; `provider-status` means deployment status reported; `live-verified` means the exact public URL and interaction were freshly inspected; `unknown` means evidence is insufficient. Do not upgrade an entry's claim based only on a passed build. Web retrieval failures are inconclusive, not proof of outage.

**State vocabulary for website entry:**
- `linked-user-confirmed`: the link exists in corporate source and the user previously confirmed the pathway worked;
- `listed-only`: named on a corporate catalogue page **without a clickable external application URL**;
- `candidate`: possible future public entry, no integration approval;
- `private-not-public`: no public product/admin URL permitted;
- `corporate-self`: the MAXYRON main site, not an independent linked app.

**Return-navigation state:** `user-confirmed`, `source-only`, `pending`, `not-applicable`. The default target for approved public product apps is `https://maxyron.com/products`; learning apps can return to `https://maxyron.com/learning`. This target is **not proof of an implemented link**.

A `candidate_url` means an address appeared in a user report or prior project record and is not presently approved for publication. `approved_public_url` may be populated only after a reviewed intended audience, access/privacy determination and a verified public route. Existing grandfathered AI Verification entry retains its prior user-tested proof; fresh live checks remain separate.

## 4. Publication and two-way navigation acceptance

Before adding a live external link to `/products` or `/learning`, validate:
1. Product owner, source branch/commit and release claims; independent website status;
2. intended audience, authentication, no exposure of clients/research projects, personal data or admin-only actions;
3. exact HTTPS application URL, deployed version, successful browser open, mobile usability and error states;
4. main-site link opens the approved product URL without unsafe redirects; use `target="_blank"` with `rel="noopener noreferrer"` if a new tab is intended;
5. return navigation is visible and usable from the actual app, with the corporate target verified;
6. domain ownership, HTTPS/TLS and redirects, and any auth callback origins if custom domains are later adopted;
7. record commit, test evidence, date, approvals and rollback plan in the owning repo and integration register.

**Never infer** that a local demo, registered product, candidate URL, deployment success or app named on a page has passed these gates.

## 5. Build-to-mastery dependency

Each implemented build may produce a Build-to-Mastery Extraction Record (BMER) linked by source ID, owner repo and verification evidence. That record identifies competencies, mechanisms, safe examples, failure modes and proposed learning owners. A corresponding domain-owned learning object can then be reviewed for the MAXYRON Learning catalogue. Building a product is not itself proof of learner mastery.

## 6. Update process and safety

- Change the product's own repository for product-level navigation, UI, deployment, access and tests.
- Change `systems.json` plus dated `REGISTRY.md` evidence for the corporate integration and any approved external link in the corporate website source.
- Run `node scripts/validate-integration-registry.mjs` locally and in CI; do not mistake this **static integrity check** for live URL or authorization testing.
- Keep private network endpoints, raw client/project records, credentials, tokens and unreviewed server logs **out of this public repository**.
- Do not automatically promote old discovery candidates (MX-APP-004 through MX-APP-023 and others) to active public application links. The JSON is a focused audited initial set; historic candidates remain in the long-form discovery registry until individually reviewed.
- Backfill and reconcile conflicting source descriptions in owning repositories, retaining history and avoiding silent supersession.

## 7. First pilot and current limits

- **Pilot:** MX-APP-001 AI Verification — independent hosted application, corporate website link in source, and return navigation to MAXYRON user-verified on 2026-11-06. No claim that its scoring is independently validated or current production was freshly retested today.
- **Pipeline:** SEKA, KEMAS, Psychology Mastery and other independent apps remain labelled with their actual verified maturity. Privately operated ELAB-N01 is never linked to the public internet.
- **Next:** verify safe, intended public landing access for one additional independent product. Update its product repo and navigation under the above gate; only then make the MAXYRON site link public.
