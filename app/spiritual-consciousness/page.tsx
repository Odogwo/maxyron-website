import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spiritual Consciousness | MAXYRON',
  description: 'An evolving, source-conscious programme for Bible knowledge, Scripture memory, spiritual reflection and disciplined learning.',
  alternates: { canonical: '/spiritual-consciousness' },
};

const domains = [
  { title: 'Bible Knowledge', description: 'Contextual study, concepts, principles, mechanisms and structures grounded in preserved sources.' },
  { title: 'Scripture Memory', description: 'Book and number memory cues, retrieval practice and careful distinction between recall and understanding.' },
  { title: 'Spiritual Inquiry', description: 'Developing essays and structured reflection across Scripture, philosophy, spiritual experience and practical life.' },
  { title: 'Learning and Verification', description: 'Source-based learning prompts, interpretive boundaries and evidence-led assessment design.' },
];

export default function SpiritualConsciousnessPage() {
  return <main style={{maxWidth:960,margin:'0 auto',padding:'3rem 1.5rem',lineHeight:1.65}}>
    <nav aria-label="Breadcrumb"><a href="/">MAXYRON</a> / <a href="/learning">Learning</a> / Spiritual Consciousness</nav>
    <header style={{margin:'4rem 0 3rem'}}>
      <p style={{letterSpacing:'.14em',textTransform:'uppercase'}}>Knowledge · Reflection · Practice</p>
      <h1 style={{fontSize:'clamp(2.2rem,6vw,4rem)',lineHeight:1.12}}>Spiritual Consciousness</h1>
      <p>MAXYRON is developing an integrated approach to Bible knowledge, Scripture memory, spiritual reflection and learning. The programme distinguishes original sources, interpretations, conceptual models and practical applications.</p>
      <p><strong>Development status:</strong> Research architecture and internal learning prototypes are in progress. This page is an overview, not a public Bible study database or an assessed learning service.</p>
    </header>
    <section aria-labelledby="domains"><h2 id="domains">Areas of development</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'1.5rem'}}>
        {domains.map(domain=><article key={domain.title} style={{border:'1px solid #8886',borderRadius:12,padding:'1.25rem'}}><h3>{domain.title}</h3><p>{domain.description}</p></article>)}
      </div>
    </section>
    <section style={{marginTop:'3rem'}} aria-labelledby="method"><h2 id="method">Method and boundaries</h2>
      <p>We preserve analytical depth while separating textual observations from interpretations, hypotheses and applications. Memory performance is not treated as proof of theological understanding or spiritual maturity. Source rights, privacy and editorial approval govern what may be published.</p>
      <p><a href="/learning">Explore the broader MAXYRON learning programme</a></p>
    </section>
  </main>;
}
