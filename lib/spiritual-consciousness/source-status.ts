/**
 * Public-safe status metadata only. No private source text or candidate records.
 * Values were transcribed from the reviewed source indexes on 2026-11-19.
 * This is not a live synchronization or publication manifest.
 */
export type SourceStatus = {
  sourceRepository: string;
  sourcePath: string;
  sourceRef: string;
  verifiedAt: string;
  publicationStatus: 'not-approved';
  integrationStatus: 'metadata-only';
  summary: string;
  metrics: readonly { label: string; value: number }[];
};

export const spiritualSourceStatus = {
  sonsOfGod: {
    sourceRepository: 'Odogwo/maxyron-spiritual-consciousness',
    sourcePath: '02_SPIRITUAL_INQUIRY/SONS_OF_GOD',
    sourceRef: 'feat/sons-of-god-foundations',
    verifiedAt: '2026-11-19',
    publicationStatus: 'not-approved',
    integrationStatus: 'metadata-only',
    summary: 'SOG register and dashboard sources exist. Candidate records and relationships have not been approved for public export.',
    metrics: [
      { label: 'Principle records', value: 12 },
      { label: 'Concept and entity records', value: 17 },
      { label: 'Views', value: 6 },
      { label: 'Open questions', value: 11 },
      { label: 'Candidate literature relationships', value: 11 },
    ],
  },
  bible: {
    sourceRepository: 'Odogwo/maxyron-spiritual-consciousness',
    sourcePath: '01_BIBLE/INDEX.md',
    sourceRef: 'main',
    verifiedAt: '2026-11-19',
    publicationStatus: 'not-approved',
    integrationStatus: 'metadata-only',
    summary: 'Preserved BKA navigation and source families are indexed; canonical cutover, public content rights and learner validation remain outstanding.',
    metrics: [
      { label: 'Bible book coordinate identities', value: 66 },
      { label: 'Established Bible Tag identities', value: 52 },
      { label: 'Staged Bible Knowledge documents', value: 44 },
    ],
  },
} as const satisfies Record<string, SourceStatus>;
