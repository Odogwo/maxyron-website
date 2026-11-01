# MAXYRON Commercial Readiness Audit — 2026-11-01

## Scope and evidence
Inspected repository `Odogwo/maxyron-website` on default branch `main`: `README.md`, `package.json`, `app/page.tsx`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `docs/README.md`, `docs/STATUS.md`, `docs/ARCHITECTURE.md`, `docs/OPERATIONS.md`, `docs/BRAND-DECISIONS.md`, and `docs/SERVICE-OFFERS.md`.
User-supplied Google Search Console screenshots dated 2026-11-01 show homepage indexed, HTTPS, sitemap success with one discovered page. These supersede older pending-indexing notes in STATUS.md. This is a source/document audit, **not** a fresh performance, accessibility, mobile, or production HTTP test.

## Verified implementation
- Next.js 15 / React 19 / TypeScript; single-page App Router site.
- Four public service areas: AI Engineering, Intelligent Automation, Knowledge Architecture, Research & Advisory.
- Organization JSON-LD, metadata/canonical, robots and one-URL sitemap in source.
- CTA uses `mailto:hello@maxyron.com?subject=MAXYRON%20enquiry`.
- No contact form backend or CRM evidenced in inspected source.
- Internal service-offer documentation defines deliverables, safeguards, and engagement stages.
- Existing project status documents Vercel/Zoho setup as user-confirmed, not fully independently tested.

## Findings
### CR-01 — Email conversion is a critical dependency (P0)
External test email sent according to status history, but inbound Zoho arrival, outbound sender identity, and website CTA remain unverified.
**Acceptance:** message sent to hello@ arrives in intended inbox; reply arrives externally with correct sender; desktop/mobile CTA opens correct recipient.

### CR-02 — Business intake relies on user's email client (P1)
Mailto is a lightweight MVP, but not a complete lead intake system.
**Acceptance:** document inquiry fields and response process; consider accessible contact form only after privacy, spam, storage, and notification design.

### CR-03 — Public proof absent (P1)
No verified published demonstrations or case studies in inspected code. `docs/SERVICE-OFFERS.md` proposes four possible demos.
**Acceptance:** publish one accurately labeled independent demonstration with problem, approach, screenshots, verification, limitations, and links. Never invent client results.

### CR-04 — SEO foundations present; search performance unknown (P1)
Homepage indexed and sitemap successfully processed per user screenshots. No evidence yet of rankings, conversions, impressions, or additional indexed pages.
**Acceptance:** collect Search Console performance data when available; confirm production metadata/canonical and internal links before expanding URLs.

### CR-05 — Legal identity / group ownership not finalized (P0 before legal claims)
Maxyron Limited incorporation is in progress; Drawbridge Automation Limited is registered but future parent-subsidiary ownership has not been implemented or verified.
**Acceptance:** do not publish Maxyron CAC registration or parent-company claims before legal confirmation and qualifying ownership filings.

### CR-06 — Technical quality audit outstanding (P1)
No current Lighthouse, WCAG, keyboard navigation, Core Web Vitals, or cross-device test evidence was inspected.
**Acceptance:** run build/lint, mobile and desktop QA, keyboard/contrast checks, Lighthouse and live HTTP verification; document actual results rather than estimates.

## Recommended delivery sequence
1. P0: Test hello@ email inbound/outbound and mailto CTA; record evidence in STATUS.md.
2. P0: Confirm current legal status; avoid unverified corporate claims.
3. P1: Validate live page title, canonical, structured data, and actual displayed commercial copy.
4. P1: Produce one honest independent demo and a clear inquiry workflow.
5. P1: Run performance, accessibility and responsive tests and fix verified defects.
6. P2: Add useful service/project/contact pages only when content and maintenance capacity justify them; update sitemap automatically.
7. P2: Monitor Search Console impressions, queries, CTR, and indexing; measure inquiries without collecting unnecessary personal data.

## Constraints
Do not claim a deployed change merely because a GitHub commit exists. Do not publish private operational documentation, credentials, fabricated testimonials, unverified outcomes, or regulated service claims. Preserve existing brand tagline and service taxonomy unless a new decision explicitly changes them.

## Next smallest step
Verify that an external email to `hello@maxyron.com` arrives and can be replied to successfully; then update `docs/STATUS.md` with date and evidence.
