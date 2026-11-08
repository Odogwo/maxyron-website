# MAXYRON Website — Stage 5A Source, CI and Deployment Audit

Date: 2026-11-08
Authority: R1 in `docs/strategy/CURRENT-RECONCILED-ARCHITECTURE.md`
Scope: corporate website routes, sitemap, CI structural checks, integration manifest and deployment evidence.
Status: SOURCE DEFECT REPAIRED; INDEPENDENT CI AND LIVE RECHECK PENDING.

## Evidence and audit results

- Inspected default-branch website source at commit `dda740f903a55279c3c7526ec31fcf0b1bde4a3e` before repair.
- All five route source files exist: `app/page.tsx`, `app/services/page.tsx`, `app/products/page.tsx`, `app/learning/page.tsx`, `app/research/page.tsx`.
- `app/sitemap.ts` lists all five routes.
- Source inspection found direct `mailto:hello@maxyron.com?subject=MAXYRON%20enquiry` contact navigation in all five page files, with no `href="#contact"` navigation destinations observed in those pages.
- Four canonical services remain AI Engineering, Intelligent Automation, Knowledge Architecture, Research & Advisory.
- `.github/workflows/website-ci.yml` invokes `npm run build`, `node scripts/verify-site-structure.mjs` and `node scripts/validate-integration-registry.mjs` on push/PR/manual dispatch.
- Integration manifest `docs/integrations/systems.json` records eight systems and preserves only the previously approved diagnostic public application link; SEKA and Psychology corporate integration remain paused.
- GitHub combined status on pre-repair commit `dda740f903a55279c3c7526ec31fcf0b1bde4a3e` returned `Vercel: success`. This is not proof of live route behavior or independent GitHub Actions success.
- The available GitHub workflow-run lookup only reports PR-triggered runs. No independent passing workflow result was established.

## Verified defect and correction

**Defect:** `scripts/verify-site-structure.mjs` used over-escaped regular-expression tokens `[\\s\\S]*?<\\/nav>` in a JavaScript regex literal. The over-escaped closing slash makes the literal syntactically invalid; the structural check could not execute as written.

**Fix:** Replaced that expression with `/<nav aria-label="Main navigation">[\s\S]*?<\/nav>/` while retaining the same navigation, sitemap, stylesheet and four-service checks.

**Fix commit:** `6cf966d02f9ca8e359a0acb3017ce8045badb6e6`.
**Readback:** fixed source expression fetched and verified from GitHub.
**Risk:** limited to CI test code; no website pages, routes, styling, R1 authority or integration permissions were changed.

## Unverified items / gates

1. Confirm GitHub Actions CI run on the repair commit or later: dependency installation, Next.js build, structural check and integration registry validation.
2. Confirm Vercel deployment is successful for the repair commit or later; pre-repair Vercel success is insufficient.
3. Browser-test `https://maxyron.com/`, `/services`, `/products`, `/learning`, `/research` and `/sitemap.xml` on desktop and mobile.
4. Confirm navigation and direct Contact action on every route; verify correct email recipient/subject.
5. Check the diagnostic external link and reciprocal return navigation; do not resume paused SEKA/Psychology corporate integrations without user direction.
6. Check keyboard navigation, mobile overflow, contrast, basic SEO metadata and route-level canonical tags.
7. Record browser screenshots, tested browser/device, deployed commit and CI run URL before marking Stage 5A complete.

## Decision

Do not broaden website scope or change R1 service taxonomy. Resume Stage 5B visual/commercial refinement only after CI and production acceptance gates are recorded. Preserve independent application boundaries and private infrastructure.
