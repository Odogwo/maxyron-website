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
  { number: '01', title: 'AI Engineering', detail: 'Design and development of AI applications, retrieval-augmented systems, task-focused agents and evaluation workflows, with attention to reliability, traceability and practical use.', tag: 'BUILD' },
  { number: '02', title: 'Intelligent Automation', detail: 'Workflow analysis and automation that connect existing tools, reduce repetitive work and introduce clear checks where human review or approval is needed.', tag: 'OPTIMIZE' },
  { number: '03', title: 'Knowledge Architecture', detail: 'Knowledge models, searchable repositories and decision-support structures that make important information easier to organize, retrieve, maintain and apply.', tag: 'ORGANIZE' },
  { number: '04', title: 'Research & Advisory', detail: 'Applied and academic research support, evidence reviews, data analysis, problem diagnosis and advisory reports that turn complex questions into defensible decisions.', tag: 'DECIDE' }
];
const approach = [
  { step: '01', name: 'Understand', description: 'Clarify the question, review available evidence and establish requirements, constraints and success criteria.' },
  { step: '02', name: 'Architect', description: 'Translate findings into an architecture, workflow or research plan with clear responsibilities and safeguards.' },
  { step: '03', name: 'Engineer', description: 'Develop the analysis, software or automation in manageable stages, checking assumptions and outputs as we go.' },
  { step: '04', name: 'Evolve', description: 'Review performance, document what was learned and refine the solution as requirements change.' }
];
export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }} />
    <header className="site-header"><div className="shell nav">
      <a className="wordmark" href="#" aria-label="MAXYRON home"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a>
      <nav aria-label="Main navigation"><a href="/services">Services</a><a href="/products">Products</a><a href="/learning">Learning</a><a href="/research">Research</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    </div></header>
    <section className="hero shell">
      <div className="hero-content"><p className="eyebrow"><span className="pulse"/> SYSTEMS THINKING. REAL-WORLD IMPACT.</p>
        <h1>Engineering<br/><em>Intelligent</em><br/>Systems<span className="period">.</span></h1>
        <p className="hero-lede">We research complex problems, design practical systems and build AI-enabled tools that help people and organizations make informed decisions and work more effectively.</p>
        <div className="hero-actions"><a className="button primary" href="#expertise">Explore our expertise <span>↗</span></a><a className="text-link" href="#about">Discover MAXYRON <span>↗</span></a></div>
        <div className="hero-foot"><span>AI ENGINEERING</span><i/> <span>AUTOMATION</span><i/> <span>KNOWLEDGE SYSTEMS</span></div>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-center"><span>M</span></div><div className="art-caption">DESIGN / BUILD / VERIFY</div></div>
    </section>
    <section className="intro-band"><div className="shell intro-inner"><span className="mini-label">OUR POINT OF VIEW</span><p>Intelligence creates value when it becomes a <strong>working system.</strong></p><span className="band-symbol">✳</span></div></section>
    <section id="expertise" className="section shell"><div className="section-heading"><div><p className="eyebrow muted">01 / WHAT WE DO</p><h2>Capabilities built<br/>for what’s next.</h2></div><p>Whether you need to investigate a problem, organize complex information or build a working solution, we combine research, systems design and practical engineering.</p></div>
      <div className="service-grid">{services.map(s=><article className="service" key={s.number}><div className="service-top"><span>{s.number} / {s.tag}</span><span className="arrow">↗</span></div><h3>{s.title}</h3><p>{s.detail}</p><div className="service-line"/></article>)}</div><p style={{marginTop:30}}><a className="text-link dark-link" href="/services">Explore all services and potential deliverables <span aria-hidden="true">↗</span></a></p>
    </section>
    <section id="approach" className="dark-section"><div className="shell"><div className="section-heading dark-heading"><div><p className="eyebrow">02 / OUR METHOD</p><h2>Clarity first.<br/><em>Capability follows.</em></h2></div><p>Our work begins with the question, not the technology. We examine the evidence, define the requirements, develop an appropriate solution and test it against the intended outcome.</p></div>
      <div className="steps">{approach.map(a=><article key={a.step}><span className="step-number">{a.step}</span><h3>{a.name}</h3><p>{a.description}</p></article>)}</div></div></section>
    <section id="diagnostic" className="section shell" aria-labelledby="diagnostic-heading"><div className="section-heading"><div><p className="eyebrow muted">INTERACTIVE DEMONSTRATION</p><h2 id="diagnostic-heading">Explore your AI<br/>verification readiness.</h2></div><div><p>Try our free 12-question AI Verification Capacity Diagnostic. Explore six areas of organisational AI oversight and receive a self-reported screening report with practical improvement priorities.</p><p>This is an indicative self-assessment, not an independent audit, certification or validated measure of organisational capability.</p><a className="button primary" href="https://maxyron-ai-verification.vercel.app/" target="_blank" rel="noopener noreferrer">Try the AI Verification Diagnostic <span aria-hidden="true">↗</span></a></div></div></section>
    <section id="about" className="section shell about"><div><p className="eyebrow muted">03 / WHO WE ARE</p><h2>Complexity, made<br/><em>constructive.</em></h2></div><div><p className="about-lede">Maxyron brings research, systems thinking and engineering together to address problems that require both careful analysis and practical implementation.</p><p>Our work spans applied research, AI development, workflow automation and knowledge architecture. We focus on solutions that can be understood, evaluated and maintained—not complexity for its own sake.</p><a className="text-link dark-link" href="#contact">Work with us <span>↗</span></a></div></section>
    <section id="contact" className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">04 / LET'S CONNECT</p><h2>Have a problem<br/>worth solving<span className="period">?</span></h2><p>Share the problem, project or decision you are working through. Tell us what you need, what you have tried and what a useful outcome would look like.</p></div><a className="button light" href="mailto:hello@maxyron.com?subject=MAXYRON%20enquiry">Discuss your project <span>↗</span></a></div></section>
    <footer className="footer"><div className="shell footer-top"><div><div className="wordmark"><span className="mark">M<span>.</span></span><span>MAXYRON</span></div><p>Engineering Intelligent Systems.</p></div><div className="footer-links"><a href="/services">Services</a><a href="/products">Products</a><a href="#expertise">Expertise</a><a href="#approach">Approach</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAXYRON. All rights reserved.</span><span>THINK CLEARLY. BUILD BOLDLY.</span></div></footer>
  </main>;
}
