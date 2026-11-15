import type { Metadata } from 'next';
import Link from 'next/link';
import '../../research.css';

export const metadata: Metadata = {
  title: 'GIES — Global Integrative Education Standard | MAXYRON',
  description: 'Explore the conceptual foundations, evolution and proposed assessment architecture of GIES, a MAXYRON education capability research initiative.',
  alternates: { canonical: '/research/frameworks/gies' },
};

const stages = [
  ['Origin', 'Questioning whether schooling, qualifications and isolated knowledge adequately represent education.'],
  ['GIES 1.0', 'Five proposed capability domains and an initial self-report instrument.'],
  ['Critical review', 'Identified self-report, cultural fairness, construct overlap and arbitrary threshold limitations.'],
  ['GIES 2.0 proposal', 'Four-domain hypothesis and multi-method assessment proposal combining self-report, performance tasks and contextual observation.'],
  ['Next research', 'Expert review, instrument refinement, real-world pilots, psychometric evaluation and cross-cultural testing.'],
];

export default function GiesPage() {
  return <main className="framework-page">
    <div className="framework-shell"><nav className="framework-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/research">Research</Link> / <Link href="/research/frameworks">Frameworks</Link> / GIES</nav></div>
    <header className="framework-hero"><div className="framework-shell"><p className="framework-eyebrow">Original Framework / Education &amp; Human Capability</p><h1>Global Integrative Education Standard (GIES)</h1><p className="framework-lead">Investigating education as the ability to understand, apply, communicate and adapt knowledge across contexts—not simply as credentials or years of schooling.</p><span className="framework-status">Incubating candidate · Not empirically validated</span></div></header>
    <div className="framework-shell framework-content"><div className="framework-sections"><section className="framework-panel"><h2>Core research questions</h2><p>What does it mean to be educated? Which capabilities can be assessed fairly across contexts? How can performance, self-perception and contextual evidence be combined without reducing human worth to a score?</p></section><section className="framework-panel"><h2>Proposed assessment</h2><p>Current hypotheses concern foundational literacies, cognitive transfer, communication and applied knowledge. A proposed multi-method design combines self-report, practical tasks and contextual observation. Domains, weights and cut scores require testing.</p></section><section className="framework-panel framework-wide"><h2>Development history</h2><ol className="framework-timeline">{stages.map(([title,detail])=><li key={title}><strong>{title}:</strong> {detail}</li>)}</ol></section><section className="framework-panel"><h2>Evidence and limitations</h2><p>Previously discussed pilot figures were illustrative simulations, not observed participant results. Reliability, factor structure, predictive validity and cross-cultural comparability remain unestablished. Any future assessment product requires separate validation.</p></section><section className="framework-panel"><h2>Relationship to MAXYRON</h2><p>This is a public intellectual overview. Bespoke educational audits belong under Services; reusable assessment software under Products; and capability-development programmes under Learning. None is asserted to be available merely because the framework exists.</p></section></div><p style={{marginTop:32}}><Link className="framework-back" href="/research/frameworks">← Browse all frameworks</Link></p></div>
  </main>;
}
