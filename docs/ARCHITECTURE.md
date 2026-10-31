# Website and Business Systems Architecture
Snapshot: 2026-10-31.

## Purpose
MAXYRON is an emerging intelligent systems engineering brand offering AI engineering, intelligent automation, knowledge architecture, and research/advisory. The public website presents capabilities and provides an email contact route.

## Current implementation (repository verified)
- Framework: Next.js 15, React 19, TypeScript.
- App Router files: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`.
- Single-page sections: hero, expertise, approach, about, contact, footer.
- Service taxonomy in `app/page.tsx`: AI Engineering; Intelligent Automation; Knowledge Architecture; Research & Advisory.
- Method: Understand → Architect → Engineer → Evolve.
- SEO metadata in `app/layout.tsx`; metadataBase `https://maxyron.com`.
- Contact interaction: `mailto:hello@maxyron.com?subject=MAXYRON%20enquiry`. No contact-form backend is evidenced.
- No database, CMS, authentication, API routes or analytics were established in the inspected source.

## Infrastructure topology
Visitor → maxyron.com / www.maxyron.com (Namecheap DNS) → Vercel → Next.js frontend.
Prospect clicks contact → email client → hello@maxyron.com (Zoho alias) → martins@maxyron.com inbox.
Outbound mail → Zoho Mail. Domain authentication via DNS MX/SPF/DKIM.

## Architecture principles
- Keep public-facing site code separate from internal project documentation.
- Use simple, working systems before adding complexity.
- Verify changes and deployments rather than assuming success.
- Preserve decision rationale and explicit status.
- Avoid exposing secrets, personal recovery information, or sensitive client information.
- Treat provider consoles as operational sources of truth; this repository records the configuration and verification date.

## Future architecture (not implemented)
Structured service pages, portfolio/case studies, lead intake and CRM, privacy/legal pages, analytics, content publishing, and optional product catalogue. Choose only after validating commercial need.
