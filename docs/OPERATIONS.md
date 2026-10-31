# Operating and Development Runbook
Snapshot: 2026-10-31.

## Local development
Prerequisites: Node.js and npm; clone `https://github.com/Odogwo/maxyron-website`.
```bash
npm install
npm run dev
# open http://localhost:3000
npm run build
```
The package also declares `npm run lint`; confirm lint tooling before relying on it.

## Deployment
GitHub is the source repository. Vercel was connected and deployed during setup (user confirmed). Before editing production, check branch, current deployment, build logs and Vercel project settings. Make a small change, run a local build, commit, push, verify deployment and test the live domain. Do not assume automatic deployment is active without checking.

## Change procedure
1. State goal and acceptance criteria.
2. Inspect current code/configuration.
3. Change the smallest necessary surface.
4. Run build/tests and check desktop/mobile.
5. Verify production deployment and DNS/mail where relevant.
6. Update STATUS.md and HISTORY.md with evidence and unresolved issues.

## Mail acceptance test
1. Send from external Gmail to `hello@maxyron.com`.
2. Confirm receipt in `martins@maxyron.com` Zoho inbox.
3. Reply; inspect From identity. Configure alias as sender if necessary.
4. Confirm reply arrives externally and inspect authentication headers if possible.
5. Record date, result and any issues. No such end-to-end test was verified as of this snapshot.

## Safe DNS change procedure
Before any Namecheap edit, export/screenshot existing records. Identify affected web/mail records. Make one targeted change, wait for propagation, validate Vercel domain status and Zoho MX/SPF/DKIM, then perform actual browser and mail tests. Do not overwrite website A/CNAME while setting up mail.

## Documentation discipline
Every future session should start at `docs/README.md` and `docs/STATUS.md`; update them before closing the task. Use labels: repository verified / user confirmed / pending. Never record a save or deployment as completed until verified.
