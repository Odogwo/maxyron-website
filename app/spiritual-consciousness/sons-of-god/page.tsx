import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sons of God | Spiritual Consciousness | MAXYRON',
  description: 'Developing foundations, principles, teachings and spiritual learning for Sons of God.',
  robots: { index: false, follow: false },
};

const sections = [
  ['Foundations', 'Identity, purpose and the developing vision.'],
  ['Principles & Concepts', 'Governed principles, meanings, distinctions and revisions.'],
  ['Scripture & Interpretation', 'Biblical sources, textual questions and competing interpretations.'],
  ['Teachings & Inquiry', 'Structured teaching and questions requiring further examination.'],
  ['Learning & Mastery', 'Planned study, recall, reflection and application pathways.'],
  ['Church & Community', 'Proposed fellowship and community design; not yet adopted policy.'],
];

export default function SonsOfGodPage() {
  return <main>
    <Link href="/spiritual-consciousness" style={{ color: '#0a6d63' }}>← Spiritual Consciousness</Link>
    <p style={{ marginTop: 32, letterSpacing: '.12em', fontWeight: 700, color: '#28796f' }}>DEDICATED EXPERIENCE / IN DEVELOPMENT</p>
    <h1 style={{ fontSize: 'clamp(40px, 7vw, 76px)', margin: '12px 0' }}>Sons of God</h1>
    <p style={{ maxWidth: 760, fontSize: 19, lineHeight: 1.8 }}>A developing Christian spiritual and philosophical framework grounded in John 1:12, with space for careful interpretation, learning, dialogue and the proposed design of a church or fellowship.</p>
    <p style={{ color: '#526e68' }}>This is a website foundation, not an approved doctrinal statement, operational church service or public knowledge release.</p>
    <section aria-label="Sons of God areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 40 }}>
      {sections.map(([title, detail]) => <article key={title} style={{ border: '1px solid #cddbd2', borderRadius: 12, padding: 25, background: 'white' }}>
        <h2 style={{ fontSize: 22, marginTop: 0 }}>{title}</h2><p style={{ lineHeight: 1.7 }}>{detail}</p>
        <span style={{ color: '#667875', fontSize: 13 }}>Content integration pending review</span>
      </article>)}
    </section>
    <p style={{ marginTop: 38 }}>Explore related <Link href="/spiritual-consciousness/bible" style={{ textDecoration: 'underline' }}>Bible Knowledge</Link> without duplicating canonical Scripture records.</p>
  </main>;
}
