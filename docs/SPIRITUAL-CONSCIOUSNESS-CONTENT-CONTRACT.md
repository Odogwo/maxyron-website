# Spiritual Consciousness website — content integration contract
Date: 2026-11-19
Status: development branch; metadata-only implementation; no production deployment verified

## Ownership
- `Odogwo/maxyron-spiritual-consciousness` owns canonical spiritual/BKA research and the SOG knowledge registers.
- `Odogwo/maxyron-website` owns the Next.js public presentation layer.
- No separate SOG repository or database is authorised.
- Existing SOG dashboard is preserved; this website does not replace or import its private records.

## Implemented read-only stage
`lib/spiritual-consciousness/source-status.ts` holds hand-reviewed, public-safe **aggregate status metadata** with source repository, path, ref, verification date, review and integration status. It is NOT a live source reader, not an approved content export and not a copy of private SOG records.

## Required future content export
An approved content export must include a manifest version, source commit SHA, stable object ID, type, source path, attribution, epistemic category, rights, privacy, review approval, revision ID, approved fields, related IDs and checksum. Reject unknown schema versions, missing approvals, private objects, conflicting IDs and broken source references. Do not auto-promote candidate links or church doctrine.

## Bible invariants
Keep 66 book coordinates, TBB-CCC-VVV verse identity, BT tags, BC/BP/BM/BS semantic bands, BOOK-first storage and Sabbath School YEAR/Q/L/ROLE independent. Memory cues do not replace Scripture, textual context or interpretation. Do not invent absent verse files.

## SOG invariants
SOG principles, concepts, entities, views, questions and relationships are candidate research material until approved. Preserve original position wording, objections and revision history. A proposed church is not an operational church and reflections are not automatically doctrine.

## Validation gates
1. `node --test tests/spiritual-consciousness-contract.test.mjs` checks route references, noindex and source metadata boundaries.
2. `npm run build` and `npm run lint` must run in a checkout with dependencies; neither is verified merely by GitHub commits.
3. Review any content export against canonical source hashes, rights, privacy and approval before embedding in website builds.
4. Verify navigation, accessibility and disclosure in a development preview.
5. Do not deploy until explicit release approval.

## Sources reviewed
- Spiritual Consciousness: `00_GOVERNANCE/ARCHITECTURE.md`, `00_GOVERNANCE/STAGE-3-INTEGRATION-CONTRACT.md`, `01_BIBLE/INDEX.md`
- SOG development branch: `01_PRINCIPLES/REGISTER.md`, `02_CONCEPTS_AND_ENTITIES/REGISTER.md`, `10_ENGINEERING/literature-links.json`, `tools/build_dashboard.py`, `tests/test_dashboard_integrity.py`
