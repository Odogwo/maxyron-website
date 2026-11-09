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
