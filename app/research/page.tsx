import type { Metadata } from 'next';
import './research.css';

export const metadata: Metadata = {
  title: 'Research & Knowledge | MAXYRON',
  description: 'Explore MAXYRON approaches to research, evidence, knowledge architecture, human understanding and responsible intellectual development.',
  alternates: { canonical: '/research' },
};

const areas = [
  {
    number: '01', label: 'EVIDENCE & METHODS', title: 'Research Methods & Evidence',
    description: 'Clear questions, defensible research designs, methodological analysis and transparent assessment of what available evidence can—and cannot—support.',
    detail: 'Research scoping · Evidence review · Data and methods · Analytical reasoning',
  },
  {
    number: '02', label: 'KNOWLEDGE SYSTEMS', title: 'Knowledge Architecture & Reasoning',
    description: 'Structured concepts, connected knowledge, reliable retrieval and documented provenance that help understanding remain useful beyond a single project.',
    detail: 'Taxonomies · Knowledge models · Source traceability · Decision frameworks',
  },
  {
    number: '03', label: 'HUMAN UNDERSTANDING', title: 'Psychology, Philosophy & Practical Reflection',
    description: 'Careful inquiry into human thought, behaviour, meaning, ethical reasoning, personal development and everyday decisions.',
    detail: 'Conceptual analysis · Critical distinctions · Applied reflection',
  },
  {
    number: '04', label: 'SPIRITUAL & CULTURAL INQUIRY', title: 'Faith, Religion & Spiritual Life',
    description: 'Interdisciplinary engagement with Scripture, religious ideas, prayer, spiritual practice and reflective living, with interpretations distinguished from empirical findings.',
    detail: 'Biblical interpretation · Philosophy of religion · Spiritual reflection',
  },
];

export default function ResearchPage() {
  return <main>
    <header className="site-header"><div className="shell nav">
      <a className="wordmark" href="/" aria-label="MAXYRON home"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/products">Products</a><a href="/learning">Learning</a><a href="/research" aria-current="page">Research</a><a href="mailto:hello@maxyron.com?subject=MAXYRON%20enquiry">Contact</a></nav>
      <a className="nav-cta" href="mailto:hello@maxyron.com?subject=MAXYRON%20enquiry">Start a conversation <span aria-hidden="true">↗</span></a>
    </div></header>

    <section className="research-hero"><div className="shell">
      <p className="eyebrow"><span className="pulse"/> RESEARCH / KNOWLEDGE / UNDERSTANDING</p>
      <h1>Inquiry that<br/><em>informs action.</em></h1>
      <p>MAXYRON brings together research, knowledge architecture and disciplined reasoning. We develop intellectual foundations that can inform decisions, guide systems and deepen understanding across relevant fields.</p>
    </div></section>

    <section className="shell research-intro">
      <div><p className="eyebrow muted">OUR KNOWLEDGE PRACTICE</p><h2>Knowledge is useful<br/>when it holds up to scrutiny.</h2></div>
      <div><p>Research and knowledge work involve asking appropriate questions, examining sources, making distinctions, testing assumptions and recording limitations. We aim to make the reasoning behind a conclusion visible, rather than presenting every idea as established fact.</p>
        <p>This section describes areas of inquiry and a future publication framework. It does not represent a catalogue of peer-reviewed papers or completed client studies.</p></div>
    </section>

    <section className="research-areas"><div className="shell">
      <div className="research-heading"><p className="eyebrow muted">AREAS OF INQUIRY</p><h2>Connected fields.<br/>Distinct standards of evidence.</h2></div>
      <div className="research-area-grid">{areas.map((a)=><article className="research-area" key={a.number}>
        <span className="research-area-label">{a.number} / {a.label}</span>
        <h3>{a.title}</h3>
        <p>{a.description}</p>
        <span className="research-area-detail">{a.detail}</span>
      </article>)}</div>
    </div></section>

    <section className="shell research-integrity">
      <div><p className="eyebrow muted">PUBLICATION PRINCIPLES</p><h2>Evidence, interpretation<br/>and reflection are not the same.</h2></div>
      <div><p>Empirical findings require suitable methods and attributable evidence. Philosophical arguments require clear premises and coherent reasoning. Biblical and religious interpretations should identify their textual and theological basis. Personal reflections should be presented as reflections.</p>
      <p>As MAXYRON develops its publication catalogue, material should have an identifiable owner, source basis, version, corrections history and appropriate review. Related insights should improve a canonical article rather than create unnecessary duplicates.</p></div>
    </section>

    <section className="research-pathways"><div className="shell research-pathway-grid">
      <article><span className="eyebrow">CLIENT RESEARCH</span><h3>Need research or advice for a decision?</h3><p>Explore scoped research, evidence analysis, methods support and advisory services.</p><a className="text-link" href="/services#research-advisory">Explore Research & Advisory <span aria-hidden="true">↗</span></a></article>
      <article><span className="eyebrow">REUSABLE TOOLS</span><h3>Looking for research applications?</h3><p>Discover research and knowledge systems in the MAXYRON product-development portfolio.</p><a className="text-link" href="/products">Explore Products <span aria-hidden="true">↗</span></a></article>
    </div></section>

    <section className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">LET'S CONNECT</p><h2>Bring a difficult<br/>question to light<span className="period">.</span></h2><p>Share the question, evidence or knowledge problem you are working through and the outcome you need.</p></div><a className="button light" href="mailto:hello@maxyron.com?subject=MAXYRON%20research%20enquiry">Discuss your question <span aria-hidden="true">↗</span></a></div></section>
    <footer className="footer"><div className="shell footer-top"><div><a className="wordmark" href="/"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a><p>Engineering Intelligent Systems.</p></div><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/products">Products</a><a href="/learning">Learning</a><a href="/research">Research</a><a href="mailto:hello@maxyron.com?subject=MAXYRON%20enquiry">Contact</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAXYRON. All rights reserved.</span><span>THINK CLEARLY. BUILD BOLDLY.</span></div></footer>
  </main>;
}
