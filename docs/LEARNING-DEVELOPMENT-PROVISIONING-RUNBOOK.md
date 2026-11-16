# MAXYRON Learning — Development provisioning runbook
Date: 2026-11-09
Status: environment template and preflight only; no external service provisioned.

## Ownership and separation
Create a dedicated MAXYRON Learning development identity tenant and PostgreSQL instance. Do not reuse SEKA, Elite Lab or unrelated project credentials. Keep separate development, preview and production credentials. Corporate website production must remain unaffected.

## Required configuration
Copy the names in `.env.learning.example` to a secure environment manager; never commit real values. The backend remains disabled by default. The issuer, audience and JWKS URL identify a verified OpenID Connect provider; issuer and JWKS must use HTTPS. Database URL must use PostgreSQL and enforce verified TLS. The environment checker performs only basic configuration checks and does not verify the provider or database.

## Deployment gates
1. Confirm identity tenant ownership, login methods, recovery and MFA requirements.
2. Provision development PostgreSQL with separate migration and runtime roles, network restrictions, backups and audit logging.
3. Store secrets in managed server-only environment variables; no `NEXT_PUBLIC_` credentials.
4. Apply reviewed migrations in disposable development; validate grants and RLS.
5. Implement real OIDC verification (issuer, audience, signature, expiry, nonce/state as applicable) and session cookies.
6. Bind a verified learner UUID transaction-locally in the database; prohibit direct browser SQL.
7. Test two users, expired sessions, CSRF, ownership, event idempotency and restore.
8. Enable development preview only after all gates pass. Production activation is a separate reviewed decision.

## Current state
The interfaces and PostgreSQL integration tests exist, but no provider, live connection, real session or persistent note endpoint has been activated.
