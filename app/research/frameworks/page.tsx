import type { Metadata } from 'next';
import Link from 'next/link';
import '../research.css';

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
  return <main className="framework-page">
    <div className="framework-shell"><nav className="framework-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/research">Research</Link> / Frameworks</nav></div>
    <header className="framework-hero"><div className="framework-shell"><p className="framework-eyebrow">MAXYRON / Intellectual Works</p><h1>Original Frameworks &amp; Models</h1><p className="framework-lead">Research ideas, conceptual architectures and developing methodologies, with their evidence status and limitations made visible.</p></div></header>
    <div className="framework-shell framework-content"><section aria-label="Framework catalogue" className="framework-grid">{frameworks.map(f=><article className="framework-card" key={f.id}><p className="framework-eyebrow">{f.domain} / {f.id}</p><h2><Link href={f.href}>{f.title}</Link></h2><p>{f.summary}</p><p><span className="framework-status">{f.status}</span></p><Link href={f.href}>Explore framework →</Link></article>)}</section><aside className="framework-note">A proposed framework is not automatically an empirically validated standard, a professional certification, or a commercial product. Services, software and learning programmes have separate development and verification requirements.</aside></div>
  </main>;
}
