import type { Metadata } from 'next';
import './products.css';

export const metadata: Metadata = {
  title: 'Products & Demonstrations | MAXYRON',
  description: 'Explore MAXYRON intelligent systems demonstrations and selected research, knowledge and learning product candidates.',
  alternates: { canonical: '/products' },
};

const candidates = [
  {
    name: 'SEKA',
    category: 'Research Products',
    status: 'Under development',
    description: 'A research workflow and evidence-oriented scholarly system, being evaluated for inclusion in the MAXYRON portfolio.',
  },
  {
    name: 'KEMAS',
    category: 'Knowledge Platforms',
    status: 'Under development',
    description: 'A knowledge extraction and mastery system exploring how captured material can become structured, examinable understanding.',
  },
  {
    name: 'Psychology Knowledge Mastery',
    category: 'Learning & Mastery Systems',
    status: 'Integration candidate',
    description: 'A domain-specific approach to learning and applying psychological concepts through structured guided mastery.',
  },
];

export default function ProductsPage() {
  return <main>
    <header className="site-header"><div className="shell nav">
      <a className="wordmark" href="/" aria-label="MAXYRON home"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/products" aria-current="page">Products</a><a href="/learning">Learning</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
      <a className="nav-cta" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    </div></header>
    <section className="products-hero"><div className="shell">
      <p className="eyebrow"><span className="pulse"/> PRODUCTS / DEMONSTRATIONS / DEVELOPMENT</p>
      <h1>Systems worth<br/><em>putting to work.</em></h1>
      <p>MAXYRON develops intelligent applications, research tools and knowledge technologies. This portfolio distinguishes working demonstrations from projects still under development or evaluation.</p>
    </div></section>

    <section className="shell products-feature">
      <div className="products-section-heading"><p className="eyebrow muted">INTERACTIVE DEMONSTRATION</p><h2>Explore an existing application.</h2></div>
      <article className="product-feature-card">
        <div>
          <span className="product-status">Interactive demonstration</span>
          <h3>AI Verification Capacity Diagnostic</h3>
          <p>Explore six areas of organisational AI oversight through a 12-question self-reported screening. The result provides indicative priorities for further review.</p>
          <p className="product-caution">This is not an independent audit, formal certification or validated measure of organisational AI capability.</p>
          <a className="button primary" href="https://maxyron-ai-verification.vercel.app/" target="_blank" rel="noopener noreferrer">Open the demonstration <span aria-hidden="true">↗</span></a>
        </div>
        <div className="product-feature-art" aria-hidden="true"><span className="art-ring art-ring-one"/><span className="art-ring art-ring-two"/><span className="art-core">AI</span><span className="art-label">ASSESS · VERIFY · IMPROVE</span></div>
      </article>
    </section>

    <section className="products-candidates"><div className="shell">
      <div className="products-section-heading"><p className="eyebrow muted">PRODUCT DEVELOPMENT PIPELINE</p><h2>What we are exploring.</h2><p>These entries describe ongoing or candidate systems. Their inclusion does not mean they are available for purchase or integrated into MAXYRON.</p></div>
      <div className="product-candidate-grid">{candidates.map((p)=><article className="product-candidate" key={p.name}>
        <span className="candidate-category">{p.category}</span>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <span className="candidate-status">{p.status}</span>
      </article>)}</div>
    </div></section>

    <section className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">DISCUSS A SYSTEM</p><h2>Have an idea<br/>worth developing<span className="period">?</span></h2><p>Tell us about the problem, the people who would use the solution, and the outcome you want to achieve.</p></div><a className="button light" href="mailto:hello@maxyron.com?subject=MAXYRON%20product%20enquiry">Contact MAXYRON <span aria-hidden="true">↗</span></a></div></section>
    <footer className="footer"><div className="shell footer-top"><div><a className="wordmark" href="/"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a><p>Engineering Intelligent Systems.</p></div><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/products">Products</a><a href="/learning">Learning</a><a href="/#about">About</a><a href="/#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAXYRON. All rights reserved.</span><span>THINK CLEARLY. BUILD BOLDLY.</span></div></footer>
  </main>;
}
