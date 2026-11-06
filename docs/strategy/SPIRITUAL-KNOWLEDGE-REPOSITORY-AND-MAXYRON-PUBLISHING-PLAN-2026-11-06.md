# Spirituality & Philosophy Knowledge System — Repository and MAXYRON Publishing Plan

Date: 2026-11-06
Status: **IMPLEMENTATION BLUEPRINT AND PROPOSED OWNERSHIP; TARGET REPOSITORY NOT YET CREATED/VERIFIED.**
Parent authority: [MAXYRON R1](CURRENT-RECONCILED-ARCHITECTURE.md).
Related continuity: [Cross-workstream design map](CROSS-WORKSTREAM-DESIGN-AND-CONTINUITY-MAP-2026-11-06.md).
Public placement: `https://maxyron.com/research` → Spirituality & Philosophy (future subarea `/research/spirituality` only once reviewed material exists).

## User decision and working arrangement

This conversation is designated as the **Spirituality, Philosophy and Human Reflection knowledge-development workspace**. The requested system should have its **own GitHub source repository**, feed the MAXYRON Knowledge & Research function, and preserve the intellectual evolution independently of ChatGPT.

**Proposed GitHub full name:** `Odogwo/maxyron-spiritual-consciousness`.

**Creation check:** An owner-scoped GitHub search for spiritual/philosophy repository names found no matching repository on 2026-11-06; direct `README.md` fetch for that exact target previously returned NOT_FOUND. This does not prove absence if an inaccessible repository exists. The GitHub connector available in this workspace can read/write existing repositories but has **no create-repository action**. Therefore the target repository has not been created here; this plan is saved in the existing MAXYRON website repository as the handoff for its eventual creation. Do not claim otherwise.

## Core decision

**Create the separate content repository first, then link reviewed articles through the existing MAXYRON website**. Do not prematurely build an independent spiritual website merely to display a few drafts.

- **Content authority:** proposed spiritual repo, with canonical Markdown articles, provenance and historical versions.
- **Parent site:** `Odogwo/maxyron-website`, owning public navigation, design and page rendering; Research and Knowledge page already implemented.
- **Bible subject authority:** `Odogwo/Bible-OS` and its upstream source until migration/cutover is approved. Do not bulk duplicate Scripture material.
- **Other related domains:** Psychology Mastery, philosophy and human development sources retain their original owners; crosslink with permission and provenance.
- **Learning:** Future exercises and mastery tools may link to spiritual articles, but are not a substitute for them.

## Proposed initial repository tree

```text
maxyron-spiritual-consciousness/
  README.md
  AGENTS.md
  docs/
    ARCHITECTURE.md
    EDITORIAL-PROTOCOL.md
    PUBLISHING-CONTRACT.md
    DESIGN-HISTORY.md
    STATUS.md
    DECISION-LOG.md
  registry/
    ARTICLES.csv
    SOURCE-REGISTER.csv
    TOPIC-MAP.md
  articles/
    trust/
    prayer/
    forgiveness-and-justice/
    spiritual-consciousness/
    meaning-and-human-life/
  sources/
    README.md
  templates/
    CANONICAL-ARTICLE.md
    REVISION-RECORD.md
  publication/
    MANIFEST.json
```

Folders are **starting taxonomy proposals**, not evidence that source articles have been transferred or published. Each article must be assigned a stable ID and one primary governing question. Empty named topics need no placeholder article.

## Canonical article contract

One topic → one stable canonical article → controlled versioned revisions (v1 → v2 → v3). Add a distinct article only if its governing question is independently justified.

Frontmatter example:
```yaml
---
id: SC-ART-0001
title: "A governed article title"
slug: "governed-article-slug"
governing_question: "The stable question this article answers"
domain: "spirituality-philosophy"
content_type: "interpretive-essay"
epistemic_basis: ["scriptural-interpretation", "philosophical-reasoning"]
status: "draft"
version: "1.0"
owner: "unassigned"
published_at: null
reviewed_at: null
sources: []
canonical_url: null
---
```

Rules:
1. Retain thesis, key principles, mechanism, vivid examples, counterarguments/limitations, applications and conclusion in an accessible human voice.
2. For incoming insight: map to existing governing question; integrate/reconstruct and remove repetition, or route to another independently scoped article. No endless append-only growth.
3. Use labelled evidentiary types: scriptural interpretation, theological argument, philosophical reasoning, empirical psychology/research, personal reflection. Avoid false scientific certainty, fabricated citations or misleading clinical claims.
4. Version history must record insight, change, rationale, source basis, retained/superseded claims and reviewer/approval state.
5. No draft automatically becomes a public claim. Review citations, rights, clarity, privacy, tone and version before publication.
6. Do not store sensitive personal narratives, private correspondence or confidential research subject data in a public repository.

## Example editorial lifecycle

`Capture → Classify (new or existing governing question) → Source/evidence check → Canonical draft → Critical review → Revision → Human publication approval → GitHub commit/readback → Publication manifest update → Corporate website integration → Live verification → New insights feed next revision`.

Keep the article stable and versioned in the content repo, then publish *only explicitly approved* versions.

## Publication integration: phased design

### Phase 1 — establish knowledge authority

1. Create `Odogwo/maxyron-spiritual-consciousness` as a **private repository initially**; public release after source rights/privacy checks.
2. Initialize documentation, protocols, registries and first article template, without publishing any private originals.
3. Recover and classify pre-existing spiritual/faith/philosophical notes from approved source systems. Do not invent their full content from remembered summaries.
4. Prepare and revise one canonical pilot article; require explicit approval and publication criteria.

### Phase 2 — MAXYRON presentation

1. Create a spiritually focused **subsection of Research & Knowledge**, not a fifth business service. Provisional route: `/research/spirituality`.
2. A reviewed **publication manifest** lists public IDs, title, slug, version, summary, epistemic labels and approved public content reference.
3. Prefer a build-time controlled publication pipeline, or a reviewed content export with provenance from private repo; **never expose a private GitHub token in client-side code** or fetch unpublished private content from the browser.
4. MAXYRON links to public articles within its own research route, retaining article version and attribution. Do not require a second domain or new SSO initially.
5. Verify website build/deployment, mobile readability, SEO/canonical, content accuracy and source citations before claiming publication.

### Phase 3 — conditional independent site

Only consider independent domain/application when justified by readership, content volume, search needs, editorial workflows, learning tools, community/subscriptions, operating cost and maintenance. If created, preserve a single canonical content owner; do not fork separate article histories.

## Design decisions and alternatives

| Option | Decision | Reason |
|---|---|---|
| Put canonical spiritual articles directly into public `maxyron-website` | Reject as sole authority | Couples private drafts and editorial evolution to a public frontend |
| Create a separate repo *and* immediate standalone website | Defer | Two deployment surfaces and duplicated maintenance before content/requirements are validated |
| Separate content repo feeding MAXYRON Research section | **Recommended** | Distinct ownership, portable source, governed publication and one current public parent |
| Move Bible-OS wholesale into spirituality repository | Reject | Breaks Bible-specific domain provenance/cutover |
| Create a new article for every related insight | Reject | Causes overlap and loses the canonical evolving article |

## Implementation gates / next actions

**Current blocker:** target GitHub repository creation unavailable through connected tools. User must create the empty private repository under Odogwo (with README or an initial commit) or connect an authorized repository-creation capability. Once it exists, initialize the files above directly using GitHub tools, then read back all writes.

**Do not yet modify public MAXYRON pages**: no publication-approved article or tested content delivery integration exists. First pilot should validate structure, versioning, provenance and approved publication.

**Continuity:** consult this plan, R1, cross-workstream map, existing `Bible-OS` state and any original user-supplied article before generating spiritual content or building publication functionality. The aim is to preserve original spiritual writing, not substitute paraphrased invention for its source.
