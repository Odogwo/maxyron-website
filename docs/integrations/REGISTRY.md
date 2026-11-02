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
