# SEKA → MAXYRON: integration-readiness audit

Date: 2026-11-06
Status: **SOURCE-AUDITED, NOT APPROVED FOR DIRECT PUBLIC APPLICATION LINK**
Portfolio item: MX-PORT-002; integration entry: MX-APP-024.
Parent: `Odogwo/maxyron-website`. Product: `Odogwo/SEKA`.
Authority: [Current reconciled architecture](../strategy/CURRENT-RECONCILED-ARCHITECTURE.md) and [Operational portfolio register](../portfolio/REGISTER.md).

## Trigger

The user confirmed that all five corporate MAXYRON pages open, layout is satisfactory, and contact email works. The AI Verification Capacity Diagnostic now links back to MAXYRON Products; the user confirmed the return link works. Next portfolio integration must be grounded in the product repository rather than presumed from the old integration registry.

## Verified repository evidence

1. `Odogwo/SEKA/README.md` presently describes **documented protocols and research pilot; not yet a standalone software application**. This appears **stale as a software-state summary** relative to current code and must be reconciled by SEKA's owner, not silently interpreted as a deployment conclusion.
2. `Odogwo/SEKA/apps/web/package.json` exists and declares a Next.js 15 app with build/start scripts.
3. `Odogwo/SEKA/apps/web/app/page.tsx` exists and displays an **authenticated research-project registry dashboard** by fetching an API using environment variables `SEKA_API_URL` and `SEKA_API_KEY`. The UI describes project creation as administrator-authorized and uploads, payments, client accounts and full task management as planned.
4. `Odogwo/SEKA/apps/api/app/main.py` exists as a FastAPI application with `/health`, API-key-gated project registry routes, project plan/governance/source-decision/continuity handlers, agent preflight and administrator-gated project creation. These are **source-code capabilities**, not end-to-end verified production behaviors.
5. Existing MAXYRON integration registry MX-APP-024 was based on earlier README evidence, and has not yet verified a current SEKA production build, public deployment, appropriate client-facing access or application integration.
6. This audit did not retrieve SEKA production pages or perform authenticated endpoint tests. Do not claim live availability from source inspection.

## Classification / decision

- **Primary:** Products → Research Products, **under development / integration candidate**.
- **Related:** Research & Advisory client service, and Research & Knowledge methods/academic provenance.
- **Corporate page behavior:** Maintain status-labelled SEKA candidate card on `/products`. Do **not** add an unverified external app link or user-login promise.
- **Evidence basis:** Code is more advanced than the old root README suggests; do not regress it to 'protocol only', and do not exaggerate it to 'fully autonomous operational research agent'.

## Gate to approve direct MAXYRON-to-SEKA linkage

- Reconcile SEKA's own README and handoff with current routes, releases and ownership.
- Verify deployment URL and intended audience (public demo vs authenticated researcher/admin).
- Verify website loads on desktop/mobile and that no private projects or client metadata are exposed publicly.
- Verify backend health with permitted means, authentication/access restrictions and relevant feature workflow.
- Establish return link to `https://maxyron.com/products`, following AI Verification's reciprocal-navigation pattern, without leaking sensitive route or credentials.
- Decide what product claims can be published, under human review; distinguish planning, evidence gathering, verified results and drafts.
- Update this integration registry and the portfolio register only after approval and real-world test.

## Integration risk controls

Never put SEKA API keys or administrator secrets in client-side code, this corporate repository or public documents. SEKA's project records may be client/research sensitive; no automatic indexing or mirroring onto MAXYRON. Preserve domain ownership, evidence governance, source rights and human oversight.

## Continuity

Next smallest engineering action: select/inspect a safe, publicly accessible SEKA landing or demonstration route, implement a reciprocal link on that *owning application* if appropriate, and obtain live user verification before MAXYRON makes the app a navigable product.
