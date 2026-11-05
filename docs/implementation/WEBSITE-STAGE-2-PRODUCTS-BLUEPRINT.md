# MAXYRON Website Stage 2 — Products Catalogue Blueprint

Date: 2026-11-05
Status: Implementation specification for a cautious Products landing page.
Authority: [Current Reconciled Architecture R1](../strategy/CURRENT-RECONCILED-ARCHITECTURE.md).
Registry: [Integration Portfolio](../integrations/REGISTRY.md).
Previous: [Services Stage 1](WEBSITE-STAGE-1-BLUEPRINT.md).

## Purpose
Provide a corporate-facing, evidence-based explanation of reusable systems and demonstrations built or being evaluated by MAXYRON. Do not confuse client services, knowledge articles, learning programmes, and saleable products. A GitHub repository or work-in-progress design does not imply a launched, supported product.

## Public content decision
- Show **AI Verification Capacity Diagnostic** as an *interactive demonstration*, linking to the previously user-verified demo URL `https://maxyron-ai-verification.vercel.app/`. Describe it accurately as a self-reported screening, not an audit or certification.
- List **SEKA** as a *research application under development / portfolio evaluation*. No live application link until deployment, rights and current state verified.
- List **KEMAS** as a *knowledge platform under development / portfolio evaluation*. No live link until deployment verified.
- List **Psychology Knowledge Mastery** as a *learning and mastery platform candidate*. Avoid asserting integration or current live release.
- Leave other conceptual ventures in the integration/venture registry, not the public catalogue, until maturity and positioning have been reviewed.
- Add `/products` to website header/footer only after a real page has been committed. Do not publish future Learning/Research navigation as working routes yet.

## Categories and ownership
| Candidate | Product family | External owner/evidence | Public presentation |
|---|---|---|---|
| AI Verification Capacity Diagnostic | Business/AI Solutions | `ai-verification-capacity-diagnostic`, integration registry MX-APP-001 | Interactive demonstration, not certification |
| SEKA | Research Products | `Odogwo/SEKA`, current state must be independently reconciled | Under development / evaluation |
| KEMAS | Knowledge Platforms | `Odogwo/kemas-learning-system`, stage must be rechecked | Under development / evaluation |
| Psychology Knowledge Mastery | Learning & Mastery Systems | `Odogwo/Psychology-Knowledge-Mastery`, integration unverified | Portfolio candidate |

## Acceptance criteria
- `/products` is a working App Router page in committed code.
- Public copy explicitly differentiates demonstration / development / candidate and does not assert commercial readiness.
- No links to unverified or potentially private app deployments.
- Header and footer link from existing homepage to `/products`.
- Retain existing main MAXYRON service order and organizational identity.
- Separate repository commits, build result, production deployment and live UX verification.

## Development continuation
Next: install/build and verify Stage 1 and Stage 2; inspect Vercel deployment commit, test live `/services` and `/products` on desktop and mobile. Then inventory Learning & Mastery candidates in their original repositories, with explicit ownership, progress/evidence and no duplication. Build the Learning page only when content and integration placement have been verified.
