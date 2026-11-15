import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Original Frameworks & Models | MAXYRON',
  description: 'Explore MAXYRON original research frameworks, conceptual models and developing methodologies, with transparent maturity and evidence labels.',
  alternates: { canonical: '/research/frameworks' },
};

const frameworks = [
  {
    id: 'GIES',
    title: 'Global Integrative Education Standard',
    domain: 'Education & Human Capability',
    status: 'Conceptual framework — validation pending',
    summary: 'An evolving capability-based approach to understanding education beyond credentials, with proposed multidimensional assessment methods.',
    href: '/research/frameworks/gies',
  },
];

export default function FrameworksPage() {
  return <main style={{maxWidth:1000,margin:'0 auto',padding:'3rem 1.5rem',fontFamily:'inherit',lineHeight:1.65}}>
    <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/research">Research</Link> / Frameworks</nav>
    <p style={{marginTop:40,textTransform:'uppercase',letterSpacing:2}}>MAXYRON Intellectual Works</p>
    <h1>Original Frameworks & Models</h1>
    <p>Original conceptual work, assessment architectures and methodologies developed within MAXYRON. Each entry distinguishes proposals from validated evidence and links to its development history.</p>
    <section aria-label="Framework catalogue" style={{display:'grid',gap:18,marginTop:32}}>
      {frameworks.map(f=><article key={f.id} style={{border:'1px solid #a0a0a0',borderRadius:12,padding:24}}>
        <p style={{fontSize:13}}>{f.domain} · {f.id}</p>
        <h2><Link href={f.href}>{f.title}</Link></h2>
        <p>{f.summary}</p><p><strong>Status:</strong> {f.status}</p>
        <Link href={f.href}>Explore framework →</Link>
      </article>)}
    </section>
    <p style={{marginTop:32}}>Research frameworks are not automatically commercial products, professional certifications or globally adopted standards. Related services, learning programmes and products are identified separately.</p>
  </main>;
}
