# Learning authenticated vertical slice — implementation gate
Date: 2026-11-09
Status: foundation only; not connected to identity provider or PostgreSQL.

## Added in branch
- `db/learning/001_initial.sql`: PostgreSQL draft migration for users, courses, enrollments, learner notes and learning events. Includes unique event idempotency, basic constraints, indexes and RLS enabled without policies. Not executed.
- `/api/learning/me`: explicit unavailable response (503), no fabricated session.
- `/api/learning/notes`: GET/POST explicitly unavailable (503), no anonymous data writes.
- `/api/learning/events`: POST explicitly unavailable (503), no unverified events.

## Why this is safe
Never infer user identity from client-supplied IDs. Do not accept learner writes until a provider-authenticated session is verified server-side and owner isolation is tested. Do not use a service-role credential in public browser code. SQL RLS is default-deny here; production policies must be designed against verified session identity and a runtime role without BYPASSRLS. A database schema file alone is not evidence of a deployed database.

## Next implementation gate
1. Choose authenticated application ownership and provider (e.g. managed OIDC with server-side sessions).
2. Provision development PostgreSQL with least-privilege roles and secret management.
3. Apply reviewed migrations in a disposable environment, then test RLS, idempotency, ownership and rollback.
4. Implement verified-session middleware and secure session/cookie controls.
5. Implement notes and events handlers only after authorization tests pass.
6. Wire the first lesson -> note -> review event -> resume flow.
7. Verify preview deployment and production integration separately.
