# MAXYRON Learning — Data and identity boundaries
Date: 2026-11-09
Status: architecture decision record; no authenticated backend deployed

## Separation of concerns
The public corporate website and the preview Learning shell share a Next.js codebase temporarily, but no authenticated learner records are stored in the public website. The initial `/api/learning/catalog` and `/api/learning/health` endpoints are **public, read-only and contain no learner data**. They explicitly identify themselves as previews. No write endpoints or server-side code execution are authorized at this stage.

## Target data model (proposed)
- `users`: stable identity from a verified identity provider, status and timestamps. No password storage in custom application tables.
- `enrollments`: user, course version, status.
- `learning_sessions`: user, module, start/end, session metadata.
- `learning_events`: event ID, user, resource/version, event type, timestamp, payload schema version, provenance, idempotency key.
- `learner_notes`: owner, source lesson/module, content, version and timestamps.
- `review_items` and `review_attempts`: content version, due time, recall evidence and scheduler version.
- `lab_attempts`, `evidence_records`, `mastery_decisions`: review and verification provenance.
- `audit_events`: immutable actor, action, resource, timestamp and context.

## Identity and access gates
1. Choose identity provider and app ownership before introducing real user accounts.
2. Require authenticated sessions on all learner-specific endpoints; reject unauthenticated requests.
3. Authorize every object by owner or explicit reviewer role, never by guessed client-supplied user ID.
4. Protect against CSRF on cookie-authenticated writes, validate all input, rate-limit and audit mutations.
5. Encrypt data in transit and at rest, protect secrets in server-only environment variables.
6. Define data retention, export and deletion policies before onboarding real learners.
7. Ensure no learner notes, ELAB operational details or private source assets appear in public catalog, logs, search indexes or cached responses.
8. Version schema migrations, use reversible changes and test authorization, cross-user isolation and idempotent event ingestion.

## Proposed vertical slice after infrastructure verification
Login -> choose Linux course -> open lesson -> save one note -> submit a recall event -> resume progress. Build against a development database and test two-user isolation before production exposure.

## Current limits
No identity provider, database, migrations, authentication, persistent notes, review scheduling or mastery evaluation has been deployed by this record. Public read-only catalog and health routes are architectural interface contracts, not proof of a learner backend.
