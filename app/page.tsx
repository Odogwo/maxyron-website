const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://maxyron.com/#organization',
  name: 'Maxyron',
  alternateName: 'MAXYRON',
  url: 'https://maxyron.com/',
  email: 'hello@maxyron.com',
  description: 'AI engineering, intelligent automation, research and knowledge systems.',
  knowsAbout: [
    'AI engineering',
    'Intelligent automation',
    'Research and analysis',
    'Knowledge architecture',
    'Decision support systems'
  ],
};

const services = [
  { number: '01', title: 'AI Engineering', detail: 'Purpose-built AI applications, agentic workflows, retrieval systems and evaluation pipelines.', tag: 'BUILD' },
  { number: '02', title: 'Intelligent Automation', detail: 'Reliable processes that connect tools, data and decisions across your operations.', tag: 'OPTIMIZE' },
  { number: '03', title: 'Knowledge Architecture', detail: 'Structured knowledge environments designed for clarity, retrieval and reuse.', tag: 'ORGANIZE' },
  { number: '04', title: 'Research & Advisory', detail: 'Evidence-led analysis, systems design and practical technical guidance.', tag: 'DECIDE' }
];
const approach = [
  { step: '01', name: 'Understand', description: 'Define the real problem, constraints and desired outcomes.' },
  { step: '02', name: 'Architect', description: 'Design the right system, interfaces and safeguards.' },
  { step: '03', name: 'Engineer', description: 'Build iteratively with verification at every stage.' },
  { step: '04', name: 'Evolve', description: 'Measure results and improve what matters.' }
];
export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }} />
    <header className="site-header"><div className="shell nav">
      <a className="wordmark" href="#" aria-label="MAXYRON home"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a>
      <nav aria-label="Main navigation"><a href="#expertise">Expertise</a><a href="#approach">Approach</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    </div></header>
    <section className="hero shell">
      <div className="hero-content"><p className="eyebrow"><span className="pulse"/> SYSTEMS THINKING. REAL-WORLD IMPACT.</p>
        <h1>Engineering<br/><em>Intelligent</em><br/>Systems<span className="period">.</span></h1>
        <p className="hero-lede">We design and build the intelligence behind better decisions, stronger operations and ambitious ideas.</p>
        <div className="hero-actions"><a className="button primary" href="#expertise">Explore our expertise <span>↗</span></a><a className="text-link" href="#about">Discover MAXYRON <span>↗</span></a></div>
        <div className="hero-foot"><span>AI ENGINEERING</span><i/> <span>AUTOMATION</span><i/> <span>KNOWLEDGE SYSTEMS</span></div>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-center"><span>M</span></div><div className="art-caption">DESIGN / BUILD / VERIFY</div></div>
    </section>
    <section className="intro-band"><div className="shell intro-inner"><span className="mini-label">OUR POINT OF VIEW</span><p>Intelligence creates value when it becomes a <strong>working system.</strong></p><span className="band-symbol">✳</span></div></section>
    <section id="expertise" className="section shell"><div className="section-heading"><div><p className="eyebrow muted">01 / WHAT WE DO</p><h2>Capabilities built<br/>for what’s next.</h2></div><p>From early-stage concepts to dependable digital infrastructure, we connect rigorous thinking with practical execution.</p></div>
      <div className="service-grid">{services.map(s=><article className="service" key={s.number}><div className="service-top"><span>{s.number} / {s.tag}</span><span className="arrow">↗</span></div><h3>{s.title}</h3><p>{s.detail}</p><div className="service-line"/></article>)}</div>
    </section>
    <section id="approach" className="dark-section"><div className="shell"><div className="section-heading dark-heading"><div><p className="eyebrow">02 / OUR METHOD</p><h2>Clarity first.<br/><em>Capability follows.</em></h2></div><p>We approach every challenge as a system: understanding the whole, designing with intent, and validating what we build.</p></div>
      <div className="steps">{approach.map(a=><article key={a.step}><span className="step-number">{a.step}</span><h3>{a.name}</h3><p>{a.description}</p></article>)}</div></div></section>
    <section id="about" className="section shell about"><div><p className="eyebrow muted">03 / WHO WE ARE</p><h2>Complexity, made<br/><em>constructive.</em></h2></div><div><p className="about-lede">MAXYRON is an emerging intelligent systems engineering brand focused on translating complex problems into useful, reliable solutions.</p><p>Our work brings together artificial intelligence, software, automation, research and knowledge design. We believe technology should make people and organizations more capable—not more dependent on complexity.</p><a className="text-link dark-link" href="#contact">Work with us <span>↗</span></a></div></section>
    <section id="contact" className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">04 / LET'S CONNECT</p><h2>Have a problem<br/>worth solving<span className="period">?</span></h2><p>Tell us what you are building or what you need to improve. We can start with the right questions.</p></div><a className="button light" href="mailto:hello@maxyron.com?subject=MAXYRON%20enquiry">Start a conversation <span>↗</span></a></div></section>
    <footer className="footer"><div className="shell footer-top"><div><div className="wordmark"><span className="mark">M<span>.</span></span><span>MAXYRON</span></div><p>Engineering Intelligent Systems.</p></div><div className="footer-links"><a href="#expertise">Expertise</a><a href="#approach">Approach</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAXYRON. All rights reserved.</span><span>THINK CLEARLY. BUILD BOLDLY.</span></div></footer>
  </main>;
}
