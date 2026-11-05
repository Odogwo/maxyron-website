# MAXYRON Website Implementation Blueprint — Stage 1

**Date:** 2026-11-05
**Status:** Stage 1 implementation specification; repository verification is distinct from production deployment.
**Authority:** [Current Reconciled Architecture R1](../strategy/CURRENT-RECONCILED-ARCHITECTURE.md).
**Current website:** Next.js App Router, `app/page.tsx`, `app/layout.tsx`, `app/globals.css`.
**Objective:** Preserve MAXYRON's organization-first positioning; build an actionable service discovery page as the first incremental route, without inventing new business divisions or implying that unbuilt products exist.

## Website information architecture

| Site area | Audience question | Content owner/source | Phase and proposed route |
|---|---|---|---|
| Home | What is MAXYRON and why work with it? | Corporate site | Existing `/` |
| Services | What client work can MAXYRON undertake? | `docs/SERVICE-OFFERS.md` | **Stage 1** `/services` |
| Products | What reusable systems can I try or evaluate? | `docs/integrations/REGISTRY.md`; each product repo | Stage 2 `/products` |
| Learning & Mastery | What skills and capabilities can I develop? | Domain mastery repos and Elite_KOS governance | Stage 3 `/learning` |
| Research & Knowledge | What evidence and insight support MAXYRON? | Domain knowledge authorities and approved articles | Stage 4 `/research` |
| About | Who is behind the work and what methods are used? | `docs/BRAND-DECISIONS.md` | Existing `/#about`, possible future `/about` |
| Contact | How do I enquire? | `mailto:hello@maxyron.com` | Existing `/#contact` |

**Navigation sequence:** Keep homepage's current navigation recognizable. Add a Services link first; do **not** expose empty Products/Learning/Research pages merely to match a long-term sitemap.

## Stage 1: Services scope

Keep the exact four service names and sequence, mirroring the current homepage:
1. AI Engineering.
2. Intelligent Automation.
3. Knowledge Architecture.
4. Research & Advisory.

Each category should explain a client problem, possible project deliverables, safeguards/boundaries and an enquiry action. These are **capabilities**, not claims of completed engagements. Site content must not imply accreditation, unverified qualifications, guaranteed outcomes, fictitious clients, or a fully autonomous service.

### Research & Advisory distinction
A **client engagement** to investigate, analyse, scope or advise belongs under Services → Research & Advisory. A publicly presented paper, conceptual framework or reflection belongs to future Research & Knowledge. Reusable research software belongs to Products. An instruction/method course belongs to Learning. Cross-link, do not duplicate ownership.

### Software and cybersecurity
Website/app building can be explained within engineering capability where appropriately scoped, but not silently promoted to a new headline division. Cybersecurity is a future knowledge/capability candidate, **not currently a security consultancy service**.

## Product/learning/research intake to prepare for later phases

For every candidate record: identifier, name, primary function, knowledge domain, repository owner, current verified stage, public URL if verified, target audience, demonstrated user value, responsible maintainer, evidence, permitted presentation and next step.

Initial candidates: AI Verification Diagnostic (existing verified MAXYRON link), SEKA (research product candidate), KEMAS (knowledge platform candidate), Psychology Knowledge Mastery (learning candidate), AI mastery, Bible-OS, mathematics/physics mastery, language/vocabulary mastery, spiritual consciousness reflection platform (proposed). **No new live integration is implied here.**

## Acceptance checks for Stage 1

- `app/services/page.tsx` exists and is a valid Next.js App Router page.
- Homepage main navigation and service section link to `/services`; `/#contact` remains usable from the services page.
- All four services appear in their authoritative order with grounded deliverables and appropriate limitations.
- Service page uses shared visual system and responsive styles, semantic headings and an accessible navigation landmark.
- No future routes are displayed as working links.
- Build and live production verification are marked separately, with evidence after testing.

## Next actions

1. Verify repository commit files.
2. Run `npm install`, `npm run build` and a local browser visual check in an appropriate development environment.
3. Confirm deployment commit in Vercel, visit `https://maxyron.com/services`, check desktop/mobile navigation and enquiry.
4. After Stage 1 is verified, begin product intake and a modest products catalogue, with maturity labels.

## Design history

- Nov 2: organization/product/mastery strategic architecture.
- Nov 5: organizational clarification v2.
- Nov 5: current reconciled R1 governs classification.
- Nov 5: Stage 1 implementation blueprint initiates website expansion from existing single-page services to a dedicated services route.

Do not replace the reconciled authority when implementing a route. Append new implementation evidence/status to project documentation.
