# MAXYRON Website — Stage 5B Homepage Refinement

Date: 2026-11-11
Authority: `docs/strategy/CURRENT-RECONCILED-ARCHITECTURE.md` (R1)
Status: Source changes committed; CI, deployment and browser acceptance pending.

## Source audit

Reviewed `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `app/products/page.tsx` and R1 authority. Existing homepage preserves four services in the established order, hero, geometric artwork, approach, diagnostic demonstration, About and contact. Product page distinguishes a user-tested diagnostic from unverified candidates. No evidence warrants a complete redesign or new product-readiness claims.

## Implemented changes

1. Main hero CTA now goes to `/services` (Explore our services) instead of jumping to the homepage expertise section.
2. Secondary hero CTA now goes to `/products` (Explore our products) rather than another homepage anchor.
3. Homepage logo now links to `/` instead of `#`.
4. Added keyboard-accessible skip link targeting `main#main-content`.
5. Added visible focus outlines and reduced-motion behavior in shared CSS.

These are narrow UX/accessibility improvements. They do not change corporate R1, service taxonomy, application permissions, private infrastructure, product maturity, email routing or visual branding.

## Source commits

- `2d7a7b205c3478def858d027e36de298ef4fd446` — homepage CTA, logo and skip-link markup.
- `be104d4696da878f913b947b4090e39758fdf0d3` — focus styles and reduced-motion CSS.

## Required verification

- Confirm a passing GitHub Actions workflow for the latest commit and a successful Vercel deployment for that commit or later.
- Test homepage logo, hero Services/Products links, skip-link keyboard focus and all five corporate routes.
- Check desktop and narrow mobile navigation, especially crowded header links.
- Verify existing AI Diagnostic external link and return navigation remain intact.
- Confirm contact mailto action remains unchanged.
- Do not mark Stage 5B deployed or user-accepted from source commits alone.

## Next work

After browser acceptance, refine service offer clarity and mobile navigation; review commercial proof, SEO and accessibility without inventing clients or product availability.
