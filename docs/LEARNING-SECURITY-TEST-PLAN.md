# MAXYRON Learning — Security and persistence test plan
Date: 2026-11-09
Status: proposed tests and static checks; database integration tests not yet run.

## Identity adapter contract
Server-side session validation must return a verified provider subject and internally resolved learner UUID or an unauthenticated result. The client may never choose the user UUID. Session cookies should be HttpOnly, Secure and SameSite with appropriate CSRF protection for mutations.

## PostgreSQL RLS implementation gate
The `002_owner_policies.sql` file is a template, **not applied**. The `app.verified_user_id` transaction-local setting is only trustworthy when set by a verified server-side identity adapter. It is not safe if the SQL role is exposed to arbitrary client queries. Use a least-privilege runtime role without BYPASSRLS and separate migration/admin roles; consider FORCE ROW LEVEL SECURITY on owned tables and explicit grants in a reviewed migration.

## Required integration tests before activating writes
1. Anonymous access to notes/events must be rejected.
2. Learner A can read and edit only A's notes.
3. Learner B cannot read, update, delete or insert A-owned notes.
4. A forged user ID in request JSON is ignored or rejected.
5. Missing transaction identity yields no learner rows.
6. Duplicate event idempotency key is rejected or deduplicated.
7. Invalid content length and malformed resource refs are rejected.
8. SQL injection and malicious payloads are safely parameterized.
9. Logout/session expiry invalidates subsequent mutations.
10. CSRF, rate limiting, audit trail and retention behavior are verified.
11. Migration up/down and restore rehearsals succeed on disposable database.
12. Public catalog remains anonymous and contains no learner-private content.

## Verification scope
`scripts/verify-learning-security.mjs` performs source-level invariants only. It cannot prove database policy correctness, session security or isolation. Do not deploy the SQL or enable write endpoints until the tests above are exercised against a development database with verified auth.
