# MAXYRON Website Stage 4 — Research & Knowledge Implementation Blueprint

Date: 2026-11-06
Status: Current Stage 4 implementation plan; no publication or deployment inferred.
Authority: [Current Reconciled Architecture R1](../strategy/CURRENT-RECONCILED-ARCHITECTURE.md).
Sources: `../SERVICE-OFFERS.md`, `../integrations/REGISTRY.md`, `../BRAND-DECISIONS.md`.

## Purpose

Give MAXYRON a professionally bounded home for research methods, validated insights, knowledge architecture, reflective inquiry and subject-domain knowledge, without turning its website into a general-content dump or misrepresenting unpublished work as research publications.

## Important distinctions

1. **Research & Advisory** is one of MAXYRON's four established **client services**: scoped research, evidence review, analysis, feasibility and decisions.
2. **Research & Knowledge** is a cross-organizational **knowledge and publication function**: authored, source-traceable insights, frameworks, methods and domain-specific intellectual assets.
3. **Research Products** are **reusable applications**, e.g. SEKA, belonging in Products and linked as appropriate.
4. **Learning & Mastery** contains programmes, lessons and assessment systems, not every research paper or reflection.
5. Academic research, philosophy, theological reflection and psychology must be differentiated by their kinds of evidence and epistemic claims.

## Public page and sections

Route: `/research`. Corporate-first language.

- Overview: evidence, inquiry, usable understanding.
- **Research methods and evidence**: problem formulation, research design, methodological analysis, systematic evidence practices.
- **Knowledge systems and reasoning**: structured concepts, provenance, retrieval, governance and conceptual distinctions.
- **Human understanding and applied reflection**: philosophy, psychology, practical wisdom, spiritual reflections, carefully labelled as interpretation or reflection rather than empirical proof.
- **Publication integrity**: provenance, citations, versions, appropriate review and corrections; no fabricated research corpus or case studies.
- Clear links to `/services#research-advisory` and `/products` for distinct user intents.

A page may describe areas of work without inventing published articles, validated impact, credentials, clients, clinical claims, academic peer review or access to private project repositories.

## Canonical publishing protocol (future articles)

Required fields before publication:
- ID; governing question; author/owner; title; domain; content type (`research-summary`, `method`, `concept`, `interpretive-essay`, `reflection`);
- epistemic basis (empirical evidence, theological interpretation, philosophical reasoning, lived reflection); actual sources and permissions;
- current version; change log; reviewed status; publish date; canonical path;
- cross-links to learning/products/services but **one primary knowledge authority**.

**Canonical Article Evolution:** new insight → compare to existing governing question → evidence/reasoning check → revise/replace rather than append endlessly → version and record rationale → obtain approval where appropriate → Git commit → verify published output. Never fabricate citations, peer review or independent validation.

## Source ownership

- `Odogwo/Elite_KOS`: governance, idea incubation and knowledge provenance.
- `Odogwo/Bible-OS`: Bible-specific canonical content; migration/cutover pending.
- Proposed `Odogwo/maxyron-spiritual-consciousness`: interdisciplinary reflection/article evolution if repository is actually established; do not assume deployment.
- `Odogwo/Psychology-Knowledge-Mastery`: domain lessons/application.
- `Odogwo/maxyron-ai`: AI engineering, mastery, platform authority with ongoing reconciliation.
- `Odogwo/SEKA`: scholarly research agent/system; product repository and actual research evidence under its own governance.
- `Odogwo/maxyron-website`: corporate-facing curated Research & Knowledge route, integration metadata and verified links; **not** a dumping ground or replacement for domain repositories.

## Acceptance and verification

- Create `app/research/page.tsx` and `app/research/research.css` using existing MAXYRON site design.
- Add Research to navigation on Home, Services, Products, Learning; include `/research` in sitemap.
- Preserve the four Services labels, especially Research & Advisory.
- Do not assert published articles or finished research without verified artifacts.
- Record commit/readback, Next.js build result, Vercel deployed commit and live browser check independently.
- Current web inspection (2026-11-06) could not retrieve `/services`, `/products`, `/learning`, `/sitemap.xml`; no inference that deployment failed.

## Next engineering gate

**Stop expanding public routes until build + deployment verification.** Check `npm run build`; confirm production deployment commits; desktop/mobile visits to all four pages; inspect sitemap and link behavior. Only after that, consider shared navigation components and the first actual reviewed research article.
