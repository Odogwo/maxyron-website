# MAXYRON Learning website — architecture implementation handoff
Date: 2026-11-09
Branch: `feature/learning-shell-r1`
Status: source implementation, build and browser acceptance unverified.

## Scope and source authority
The corporate Next.js 15 website remains in `Odogwo/maxyron-website`; existing homepage remains unchanged. The learning specification, systems reconstruction extension and Code Intelligence Bank extension are canonical in `Odogwo/maxyron-csem/Meta-System/`. Infrastructure governance remains in `maxyron-infrastructure`.

## Implemented in development branch
- `app/learn/layout.tsx`: learning shell with shared top navigation, sidebar and content region.
- `app/learn/areas.ts`: typed, single-source registry of nine learning areas and their UI sections and intended journeys.
- `app/learn/page.tsx`: dashboard shell with navigable cards.
- `app/learn/[area]/page.tsx`: dynamic area routes; `generateStaticParams`, metadata and unknown-route 404.
- `app/learn/learning.module.css`: responsive CSS module.
- Learning route metadata disallows indexing while preview status is in effect.
The learning area routes are /learn/courses, /learn/concepts, /learn/memory, /learn/laboratory, /learn/systems, /learn/code-bank, /learn/assessments, /learn/mastery and /learn/journal.

## Explicitly not implemented
No authentication, learner accounts, database, server APIs, session persistence, flashcard scheduling, command execution, quizzes, simulation engine, mastery promotion, credentials, production deployment or live navigation link from corporate homepage. No build, lint, browser or CI result was available in this operation.

## Next engineering steps
1. Check build, lint and responsive keyboard navigation in a disposable local checkout or CI.
2. Replace generic route modules with shared real interface components and local non-sensitive demonstration state.
3. Choose application ownership and authenticated backend boundaries; avoid storing learner secrets in the public website.
4. Implement persisted session/lesson vertical slice with API contracts and authorization.
5. Verify deployment in preview, then obtain approval before production integration.
6. Preserve content-specific development for later; continue website structure first.

## Guardrails
No changes to `main` or the production homepage in this stage. Branch-only source changes do not prove deployment. Preserve canonical educational and infrastructure authority. Never expose private ELAB runtime details or keys.

## Increment — reusable interactive workspace component
Added `app/learn/WorkspacePreview.tsx` and wired it to all nine dynamic area pages. The client-side module selector, controlled notes textarea, draft-length check, clear action and accessible feedback are demonstrable UI behaviors only. Notes are ephemeral and intentionally not persisted. Responsive module navigation and focus-visible styling were added to `app/learn/learning.module.css`. This is UI scaffolding, not an assessment engine or database. Pending: build/lint/browser verification, backend architecture and identity boundaries.
