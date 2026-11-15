import type { Metadata } from 'next';
import Link from 'next/link';

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
  return <main style={{maxWidth:960,margin:'0 auto',padding:'3rem 1.5rem',fontFamily:'inherit',lineHeight:1.7}}>
    <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/research">Research</Link> / <Link href="/research/frameworks">Frameworks</Link> / GIES</nav>
    <p style={{marginTop:40,textTransform:'uppercase',letterSpacing:2}}>MAXYRON Original Framework · Education & Human Capability</p>
    <h1>Global Integrative Education Standard (GIES)</h1>
    <p><strong>Research status:</strong> Incubating candidate framework; not empirically validated or an adopted international standard.</p>
    <p>GIES investigates education as the demonstrated ability to understand, apply, communicate and adapt knowledge across contexts. It distinguishes schooling and credentials from broader educational capability while recognising the value of local and situated knowledge.</p>
    <h2>Core research questions</h2>
    <p>What does it mean to be educated? Which capabilities can be assessed fairly across contexts? How should performance, self-perception and contextual evidence be combined without reducing human worth to a score?</p>
    <h2>Development history</h2>
    <ol>{stages.map(([title,detail])=><li key={title}><strong>{title}:</strong> {detail}</li>)}</ol>
    <h2>Proposed assessment architecture</h2>
    <p>Current hypotheses cover foundational literacies, cognitive transfer, communication and applied knowledge. A proposed multi-method design uses self-report, practical tasks and contextual observations. Domains, weighting, cut scores and cross-cultural comparability require empirical testing.</p>
    <h2>Evidence and limitations</h2>
    <p>Previously discussed pilot figures were illustrative simulations, not observed participant results. No reliability, factor structure, predictive validity or global comparability claims should be inferred from them. Any future assessment product must be separately validated.</p>
    <h2>Relationship to MAXYRON</h2>
    <p>This page is the public intellectual overview. Bespoke educational audits would belong under Services; reusable assessment software under Products; capability-development programmes under Learning. None is asserted to be available solely because this framework exists.</p>
    <p><Link href="/research/frameworks">← Browse all frameworks</Link></p>
  </main>;
}
