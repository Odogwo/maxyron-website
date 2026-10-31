# Domain, Hosting and Mail Configuration
Snapshot: 2026-10-31. Values below are **reported from setup screenshots/conversation**, not live DNS checks in this document.

## Domain and web hosting
Registrar/DNS: Namecheap. Hosting/deployment: Vercel. Repo: `Odogwo/maxyron-website`.
- A: host `@`, value `216.198.79.1` (Vercel setup value).
- CNAME: host `www`, value `365b534a80befbd0.vercel-dns-017.com.`.
- Both apex and www were reported **Valid Configuration** in Vercel.
**Do not delete or overwrite these records when adjusting mail.** Check Vercel's current recommendations before any DNS changes.

## Zoho Mail Free
Organization: MAXYRON / Maxyron.
Primary user and super administrator: `martins@maxyron.com`.
General contact alias: `hello@maxyron.com`, attached to primary user; not an additional mailbox.
- MX `@` → `mx.zoho.com`, priority 10.
- MX `@` → `mx2.zoho.com`, priority 20.
- MX `@` → `mx3.zoho.com`, priority 50.
- SPF TXT `@`: `v=spf1 include:zohomail.com ~all`.
- DKIM TXT selector: `zmail._domainkey`; public key intentionally not copied into this file. Retrieve the current public value from Zoho admin if required.
- Zoho domain verification TXT `@`: `zoho-verification=zb85142838.zmverify.zoho.com`.
- Namecheap Mail Settings: **Custom MX**.
- Zoho reported all DNS records verified during onboarding.
- Earlier Zoho warning about multiple SPF records; final DNS verification reported successful. Recheck that there is only one SPF policy if delivery problems occur.

## Email administration
Zoho inbox: https://mail.zoho.com/
Zoho admin: https://mailadmin.zoho.com/
In admin, navigate **Users → select martins@maxyron.com → mailbox settings/email aliases → Add**. The alias form accepts Display Name, alias local part, domain, and 'Set as Mailbox Address'. For `hello`, leave 'Set as Mailbox Address' unchecked to preserve the primary address.
Do not confuse **Zoho Accounts → My Email Addresses / Login Email Address** with mailbox aliases. Nine-dot app launcher is not necessarily the admin entry point; profile menu led to the Admin Console in setup.

## Security and maintenance
- Never commit account passwords, backup codes, private keys or tokens.
- Keep access to Namecheap, Vercel, GitHub and Zoho under controlled administrator accounts.
- Review SPF/DKIM/DMARC and mailbox security as part of email hardening; DMARC has not been verified here.
- DNS values are historical setup records, not a guarantee they remain correct indefinitely.
