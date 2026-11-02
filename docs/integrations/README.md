# MAXYRON Website & Application Integration Registry

**Authority:** This directory is the canonical MAXYRON portfolio integration register. Individual product repositories remain authoritative for their own code, tests and releases.

## Purpose
Track websites, products, demonstrations and web applications that may be integrated into MAXYRON. Distinguish **existence**, **technical deployment**, **MAXYRON integration**, **verification** and **commercial readiness**.

## Files
- `REGISTRY.md` — human-readable portfolio overview and decisions.
- `registry.csv` — structured machine-readable integration register, one row per application.

## Status vocabulary
- **DISCOVERED:** project identified; URL/repository may be unverified.
- **REGISTERED:** basic metadata and owner/repository recorded.
- **DEPLOYED:** accessible public application confirmed, not necessarily linked from MAXYRON.
- **INTEGRATED:** MAXYRON navigation or product link is implemented.
- **VERIFIED:** the integration link and destination were actually tested.
- **COMMERCIAL_READY:** offering, terms, privacy and client pathway have passed review.
- **PAUSED / RETIRED:** no active integration work or withdrawn.

A project may be VERIFIED for website navigation while still **not commercial-ready**. Record product maturity separately.

## Update protocol
1. Register each project once, with stable ID `MX-APP-###`.
2. Verify the source repository and deployment URL; cite the evidence and verification date.
3. Record MAXYRON integration location and whether the destination link was tested.
4. Keep product release status separate from integration status.
5. Update after every merge, deployment, link change or product retirement.
6. Never infer production deployment from a GitHub commit or passing CI alone.
7. Avoid publishing internal URLs, secrets, private client data or unsupported commercial claims.

## Architecture rule
Keep product code in its own repository; integrate using a verified link first. Introduce subdomains, SSO, shared design systems, API gateways or centralized hosting only when there is a documented need.
