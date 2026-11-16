# Corporate Learning → MAXYRON Learning Journal

Status: source integration on the existing feature/learning-shell-r1 branch; no merge, build acceptance or production deploy confirmed.

## Architecture
- The corporate /learning page retains the public discovery and programme purpose.
- MAXYRON Learning on its development branch owns the /learn workspace and /learn/journal private notes UI and its separate account/session/API.
- Two corporate CTAs were implemented: Open Learning Workspace and Private Learning Journal. No journal code/data was copied into the corporate repository.
- Local Next.js development uses http://127.0.0.1:3005/learn and http://127.0.0.1:3005/learn/journal, with the corporate app proposed on port 3010.
- NODE_ENV=production hides both CTAs by default, showing an unavailable-for-public-access notice instead.
- Production CTAs are displayed only if MAXYRON_LEARNING_PUBLIC_LINKS_ENABLED=true is explicitly set. Even then the target is fixed, not user-input-derived: https://learn.maxyron.com/learn and /learn/journal. This domain is NOT yet verified configured or live.

## Test procedure
1. Checkout feature/learning-shell-r1 into a separate directory, preserving any existing corporate checkout/branch.
2. Verify 127.0.0.1:3010 unoccupied, then review dependency versions and install project dependencies; this branch has no committed package-lock.json, so npm ci is not available; start with npm run dev -- --hostname 127.0.0.1 --port 3010.
3. Keep MAXYRON Learning development server running on 127.0.0.1:3005. Visit http://127.0.0.1:3010/learning.
4. Verify both CTAs point to the Learning server and /learn/journal shows sign-in-required or an authorized user's private journal as appropriate.
5. Test production mode behavior WITHOUT enabling the release flag before allowing any public deployment. Protect all auth secrets and preserve local unsaved changes.
6. Run project typecheck/lint/build gates as applicable. Do not equate a link with successful private journal authentication.

## Production GO/NO-GO
NO-GO until the Learning application passes private notes ownership, unauthorized 401, CSRF/origin, sign-in/out and DB tests; HTTPS learn.maxyron.com is independently verified; manual deployment approved; rollback documented. Vercel Git automatic deployments are disconnected by intentional freeze. Never restore automatically.

Decision: separate independent Learning application and public discovery website; avoid reverse proxy or merging app code at this stage.