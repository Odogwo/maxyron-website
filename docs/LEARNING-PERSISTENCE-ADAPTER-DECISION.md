# MAXYRON Learning — Persistence adapter readiness
Date: 2026-11-09
Status: provider-neutral contract preparation, no external service connected.

## Scope
The learner data contract module defines typed, strict note and learning-event payloads, limits, event types, and rejects client-supplied owner IDs. These contracts can be used by future authenticated handlers but do not activate writes. Runtime validator behavior requires dedicated executable tests before production.

## Provider decision
A production identity provider and PostgreSQL host have **not** been selected or provisioned for MAXYRON Learning. Do not reuse SEKA or unrelated Neon credentials. Select a provider only after confirming project ownership, environment, cost, data location and recovery requirements.

## Integration sequence
1. Provision isolated development identity tenant and PostgreSQL database.
2. Create separate migrator and least-privilege runtime roles.
3. Review/apply SQL migrations; add explicit grants and transaction-local identity binding.
4. Implement server-side session adapter with issuer/audience/signature/expiry checks.
5. Enforce CSRF, payload validation, ownership, audit and rate limiting.
6. Execute two-user isolation and adversarial API tests.
7. Activate notes/events for preview users only; keep production gated.

No private learner data, credentials, or operational ELAB content belongs in the public source repository.

## Executable validation tests
Added `scripts/test-learning-data-contracts.mjs` to exercise the actual TypeScript validation functions through TypeScript transpilation in the Node CI job. It tests valid notes/events, forged owner IDs, invalid paths, excessive payloads, invalid event types, versions and dates. These tests are distinct from the earlier source-marker checks. This does not implement session verification or persistent storage. Observe CI results before claiming the new tests passed.
