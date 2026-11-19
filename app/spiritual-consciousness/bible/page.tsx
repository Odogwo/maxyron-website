import Link from 'next/link';
import type { Metadata } from 'next';
import { spiritualSourceStatus } from '../../../lib/spiritual-consciousness/source-status';

export const metadata: Metadata = {
  title: 'Bible Knowledge | Spiritual Consciousness | MAXYRON',
  description: 'A governed Bible learning experience with source-preserving study and memory systems.',
  robots: { index: false, follow: false },
};

const areas = [
  ['66-Book Explorer', 'Book-first Scripture navigation and stable Bible coordinates.'],
  ['Scripture Study', 'Source text, observation, interpretation and application kept distinct.'],
  ['Bible Memory', 'Preserved book identities, positions, numeric cues and mnemonic scenes.'],
  ['Bible Tags & Semantic Knowledge', 'Existing BT and BC/BP/BM/BS identifiers remain authoritative.'],
  ['Sabbath School', 'Year, quarter, lesson and role remain distinct learning identities.'],
  ['Practice & Assessment', 'Planned forward and reverse recall, delayed retrieval and transfer.'],
];

export default function BiblePage() {
  const source = spiritualSourceStatus.bible;
  return <main>
    <Link href="/spiritual-consciousness" style={{ color: '#0a6d63' }}>← Spiritual Consciousness</Link>
    <p style={{ marginTop: 32, letterSpacing: '.12em', fontWeight: 700, color: '#28796f' }}>DEDICATED EXPERIENCE / IN DEVELOPMENT</p>
    <h1 style={{ fontSize: 'clamp(40px, 7vw, 76px)', margin: '12px 0' }}>Bible Knowledge</h1>
    <p style={{ maxWidth: 760, fontSize: 19, lineHeight: 1.8 }}>A structured environment for Scripture study, Bible Knowledge Architecture, memory systems and learning. Original source identities and interpretation boundaries are preserved.</p>
    <p style={{ color: '#526e68' }}>The explorer and learning functions below are planned; the historical corpus is not being publicly exposed or silently migrated.</p>
    <section aria-label="Bible Knowledge areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 40 }}>
      {areas.map(([title, detail]) => <article key={title} style={{ border: '1px solid #cddbd2', borderRadius: 12, padding: 25, background: 'white' }}>
        <h2 style={{ fontSize: 22, marginTop: 0 }}>{title}</h2><p style={{ lineHeight: 1.7 }}>{detail}</p>
        <span style={{ color: '#667875', fontSize: 13 }}>Source integration pending validation</span>
      </article>)}
    </section>
    <aside aria-label="Knowledge source integration status" style={{ marginTop: 38, padding: 24, background: "#edf2ed", borderRadius: 12 }}><h2 style={{ marginTop: 0 }}>Source integration status</h2><p>{source.summary}</p><ul>{source.metrics.map(item => <li key={item.label}>{item.label}: {item.value}</li>)}</ul><p style={{ fontSize: 13 }}>Verified metadata: {source.verifiedAt}. Content publication not approved; no private source records are loaded.</p></aside>
    <p style={{ marginTop: 38 }}>Explore the related <Link href="/spiritual-consciousness/sons-of-god" style={{ textDecoration: 'underline' }}>Sons of God</Link> experience.</p>
  </main>;
}
