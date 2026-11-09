# MAXYRON Learning — Stage 7A–7G bulk engineering evidence

Status: DEVELOPMENT BRANCH ONLY. No merge, production deployment, or live learner test claimed.

## Audit and constraints
- Source branch: `Odogwo/maxyron-website` / `feature/learning-shell-r1`.
- Previous Stage 6I GitHub workflows: Website CI and Learning Verification both passed on commit `2713f3c093d5b79c1ef027b753e29fc6b1219426`.
- Development Neon branch `br-empty-bar-zan6axg9` has six RLS policies and a unique note-per-user/resource index. Production is separate.
- Repository inspection found no `vercel.json` or `.github/workflows/deploy.yml`. This does **not** prove there is no hosting deployment; connected tooling does not expose hosting environment secrets, preview domain, or a way to perform an authorized deployment.
- Neon Auth development configuration has no trusted preview origins configured. Do not invent a preview hostname, email address, session or secret.
- Real login, verification email delivery, sign-out revocation and browser-to-Neon persistence require a verified preview origin and safely configured credentials; no live E2E evidence yet.

## Stage 7 implementation
- Added `app/learn/LearnerJournal.tsx`: client-side private notes workbench uses `/api/learning/me` and `/api/learning/notes`, no-store fetch, same-origin cookies, authenticated state, explicit disabled/signed-out/error states, versioned updates and HTTP 409 conflict handling.
- Integrated journal workbench into `/learn/journal` through `app/learn/[area]/page.tsx`; other learning areas retain their existing preview UI.
- Added `scripts/test-learning-journal-integration.mjs` and included in Learning Website Verification CI.
- The journal UI does **not** claim notes are persisted when the backend is disabled; save success requires an API success response.

## Verification gate
1. Latest GitHub Website CI and Learning Verification must both pass.
2. Secure development preview domain and trusted Neon Auth origin must be verified; no guessed origin.
3. Secret injection: `NEON_AUTH_BASE_URL`, random `NEON_AUTH_COOKIE_SECRET`, restricted runtime-role `LEARNING_DATABASE_URL` with `sslmode=verify-full`, `LEARNING_DEPLOYMENT_TIER=development`, `LEARNING_BACKEND_ENABLED=true`.
4. Two real verified learner sessions must prove create/read/update, isolation, idempotency, logout, expired-session denial, browser reload and connection-pool reuse.
5. Dashboard, Code Bank, assessment and mastery persistence are NOT completed by connecting the journal alone. Continue those features only with appropriate domain contracts, test evidence and authorization.
6. Do not merge or deploy without validation.

## Next safe work
- Resolve CI failures if any.
- Add additional development-only learner dashboard and activity UI after confirming the existing API contracts.
- Request the actual development preview hostname and hosting integration only if unavailable from connected infrastructure; never request secrets in chat.

## Stage 7E — authenticated dashboard integration
- Added `app/learn/LearnerOverview.tsx` to the `/learn` dashboard. Reads verified learner session and private notes through same-origin no-store APIs; displays an explicit disabled/signed-out/error state instead of invented progress.
- Shows only the number of notes returned by the capped list API (maximum 100), not an unverified global progress total.
- Added `scripts/test-learning-overview.mjs` to Learning Verification CI.
- No assessment score, mastery claim, code execution, course completion or credential is invented.

## Vercel hosting audit — verified after team authorization
- Connected Vercel team: `odogwos-projects` (`team_wJ39xbfeKyV06pk5GPsnZa8r`).
- Project: `maxyron-website` (`prj_Pc5vSGkiB2BDbdbw7lCkOaA6IWuE`), framework Next.js; Vercel reports Node 26.x. Review compatibility against GitHub CI's Node 22 before live activation.
- Verified configured domains: `maxyron.com`, `www.maxyron.com` (redirect to apex), `maxyron-website.vercel.app`. Production domains unchanged.
- Vercel reports successful automatic branch preview builds. One inspected READY preview was `dpl_Dq5oWzPm9WGkmNmKsffpzHHVCgr9` for commit `d56398b0db13e6feb68c4ad6681ce46c8f7aea73`; this is not the latest Stage 7 source. Do not interpret READY as live auth success.
- Read-only environment variable listing returned zero variables both project-wide and filtered to `feature/learning-shell-r1`. No secrets were decrypted.
- Vercel deployment protection: SSO enabled for deployments other than custom domains. Preserve preview access protection.
- **Activation blocker**: no scoped preview credentials, exact stable trusted preview origin or configured database URL. Never set the learner backend enabled flag alone or expose credentials in GitHub.
- Do not register a per-commit random preview hostname as a permanent Neon Auth trusted origin. Prefer a verified stable branch alias or a dedicated development hostname, with an explicit narrow origin allowlist.
- Next steps: align Node runtime; establish stable development preview; configure secret values only through Vercel secure environment management, preview/branch scoped; add exact origin to Neon Auth; test two real verified users. Production remains unchanged.

## Stage 7A verified Vercel preview — latest read-back
- Vercel team authorization completed; `maxyron-website` project is accessible through the connected account.
- READY preview deployment `dpl_H8HHBwExUZ1qqWGdAZvTHNS776dc`, commit `8ba6c0cef4246b66dda31c0487e7556e4a6c8fe8`, deployment URL `https://maxyron-website-31fdnim6q-odogwos-projects.vercel.app`. Preview is SSO protected.
- GitHub workflows for that commit passed: `MAXYRON Website CI` run `42619241259`, `Learning Website Verification` run `42619241755`.
- Vercel project and branch-filtered environment listings returned zero variables. No decrypted values retrieved.
- Neon development Auth config read-back: `trusted_origins=[]`, `allow_localhost=true`, email/password enabled with OTP verification required. No origin modified.
- Do not add per-commit preview URLs to Neon trusted origins. Require verified stable branch domain or isolated development domain before enabling backend and registering an origin.
- No project settings, environment secrets, Neon Auth settings, production deployments or domains modified during this read-only audit.

## Stage 7B — stable origin activation and regression repair
- Verified Vercel branch alias through both project alias list and deployment alias list: `https://maxyron-website-git-feature-learning-shell-r1-odogwos-projects.vercel.app`, pointing to a READY development deployment. This is a stable branch-specific origin, not a per-commit hostname.
- Added this exact HTTPS origin to Neon Auth **development branch only** (`br-empty-bar-zan6axg9`) with `better_auth`. Read-back through `list_auth_trusted_domains` confirmed the entry. No production Neon branch or Vercel production alias changed.
- Vercel preview remains SSO protected. Project environment listing remains empty: backend is not enabled and real sessions are not yet testable. Do not claim authentication or persistence E2E passed.
- Repaired duplicate-event idempotency payload comparison to use PostgreSQL JSONB equality rather than JavaScript object key order; added static regression guard `scripts/test-learning-idempotency-jsonb.mjs` to Learning Website Verification CI.
- Still required: provision restricted Neon development database connection URL and a random cookie secret into **branch-scoped encrypted Vercel Preview environment variables**, along with development-only activation settings. Do not copy or expose secrets in GitHub/chat. Redeploy a reviewed preview after secure injection and verify readiness, OTP email and two-user isolation.

## Stage 7B — CI closure and SQL regression strengthening
- Read back workflow results for commit `f44e45edd93ef9588f5b5aa4cd553435fde8417e`: `MAXYRON Website CI` run `42621419040` completed success and `Learning Website Verification` run `42621419021` completed success.
- Reviewed actual learning API and journal response shapes; `/api/learning/notes` returns `{notes}` and `{note}` matching the UI. Confirmed POST requires same-origin and verified learner identity before database access.
- Added a real PostgreSQL CI assertion in `tests/learning/rls-integration.sql` proving equivalent nested JSONB payloads compare equal regardless of key order, while materially different payloads do not.
- The new SQL test's CI result is pending; prior green CI does not imply this new assertion passed. No real browser session or persistent write claimed.
- Next activation dependency: encrypted branch-scoped Vercel credentials and protected preview live verification.

## Stage 7C — failed CI diagnosis and repair
- CI for SQL regression commit `2ecfad511422357e012049388d0ac59828868b4b`: Website CI run `42622235278` succeeded, Learning Website Verification run `42622235060` failed in `PostgreSQL learner isolation integration tests`.
- Inspected job `129177030375` logs: PostgreSQL reported `syntax error at or near "$"` at `tests/learning/rls-integration.sql:70`. Source read-back showed the newly added block had `DO $` / `END $;` rather than valid matching delimiters.
- Repaired the block with explicitly tagged `$jsonbtest$` delimiters and read the exact corrected file back from GitHub, commit `fea2c85cb4b063a1c5e7d2697e3142f76181667a`.
- New CI runs `42632442253` (Learning Verification) and `42632442056` (Website CI) were queued when inspected. Do not mark green until verified.
- Development preview backend remains disabled without securely injected branch-scoped credentials. No production modifications.

## Stage 7C — verified CI closure and safe Vercel configuration
- GitHub CI for repaired SQL commit `fea2c85cb4b063a1c5e7d2697e3142f76181667a` completed success in both workflows: Learning Website Verification run `42632442253`; MAXYRON Website CI run `42632442056`.
- Vercel development branch environment was initially empty. Added and read back **three encrypted, Preview-only, branch-scoped settings** on `feature/learning-shell-r1`: `LEARNING_BACKEND_ENABLED=false`, `LEARNING_DEPLOYMENT_TIER=development`, and `NEON_AUTH_BASE_URL` pointing to the existing Neon development Auth endpoint. The read-back verified keys, scope and encryption type only; secret values were not disclosed.
- Neon development Auth read-back confirmed the branch preview hostname in trusted origins, with OTP email verification required.
- Backend deliberately remains **disabled**: `LEARNING_DATABASE_URL` and `NEON_AUTH_COOKIE_SECRET` are not configured. Do not set `LEARNING_BACKEND_ENABLED=true` or assert live authentication/persistence until both are securely provisioned, reviewed and tested.
- No Vercel production variables, production domains, Neon production branch or GitHub main branch modified. Changes to Vercel env apply to future deployments; no redeployment or live readiness validation claimed.
