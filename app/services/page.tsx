import type { Metadata } from 'next';
import './services.css';

export const metadata: Metadata = {
  title: 'Services | MAXYRON',
  description: 'Explore MAXYRON services in AI engineering, intelligent automation, knowledge architecture, and research and advisory.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    id: 'ai-engineering',
    number: '01',
    tag: 'BUILD',
    title: 'AI Engineering',
    problem: 'Turn a well-defined AI opportunity into a useful, testable application rather than relying on unverified demonstrations.',
    deliverables: ['AI use-case assessment and proof of concept', 'Retrieval-augmented applications and task-focused agents', 'Evaluation datasets, test reports, deployment and handover guidance'],
    boundary: 'System reliability, accuracy and deployment readiness must be evaluated for each intended use.',
  },
  {
    id: 'intelligent-automation',
    number: '02',
    tag: 'OPTIMIZE',
    title: 'Intelligent Automation',
    problem: 'Improve repetitive processes and disconnected handoffs without losing oversight of exceptions and approvals.',
    deliverables: ['Workflow discovery and process mapping', 'Practical tool integrations and pilot automation', 'Human approval gates, exception handling and operating guidance'],
    boundary: 'Access to client tools and data requires authorization and appropriate controls.',
  },
  {
    id: 'knowledge-architecture',
    number: '03',
    tag: 'ORGANIZE',
    title: 'Knowledge Architecture',
    problem: 'Make fragmented information easier to find, understand, govern and apply in day-to-day decisions.',
    deliverables: ['Knowledge audits, taxonomies and information architecture', 'Structured repositories and retrieval workflows', 'Knowledge ownership, governance and maintenance guidance'],
    boundary: 'A designed knowledge structure is not the same as proven organizational adoption.',
  },
  {
    id: 'research-advisory',
    number: '04',
    tag: 'DECIDE',
    title: 'Research & Advisory',
    problem: 'Turn uncertain questions, inconsistent evidence and difficult decisions into defensible findings and recommendations.',
    deliverables: ['Research scoping, literature and evidence reviews', 'Data analysis, methodology and instrument support', 'Problem diagnosis, feasibility assessment and decision memoranda'],
    boundary: 'Research ethics, confidentiality, attribution and academic integrity govern every engagement.',
  },
];

export default function ServicesPage() {
  return <main>
    <header className="site-header"><div className="shell nav">
      <a className="wordmark" href="/" aria-label="MAXYRON home"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/services" aria-current="page">Services</a><a href="/#approach">Approach</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
      <a className="nav-cta" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    </div></header>

    <section className="service-hero">
      <div className="shell">
        <p className="eyebrow"><span className="pulse"/> WHAT WE DO / CLIENT SERVICES</p>
        <h1>Clear questions.<br/><em>Working solutions.</em></h1>
        <p>MAXYRON combines research, systems architecture, engineering and careful verification. Explore the four ways we can help scope a problem and develop an appropriate response.</p>
        <a className="button primary" href="mailto:hello@maxyron.com?subject=MAXYRON%20service%20enquiry">Discuss your project <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section className="shell service-directory" aria-label="Our four services">
      <div className="service-directory-intro"><p className="eyebrow muted">OUR CAPABILITIES</p><h2>Four ways to create value.</h2><p>Every engagement starts by understanding the problem, available evidence, constraints and the outcome you need.</p></div>
      <div className="service-entries">
        {services.map((service) => <article id={service.id} className="service-entry" key={service.id}>
          <div className="service-entry-head"><span>{service.number} / {service.tag}</span><h3>{service.title}</h3></div>
          <div className="service-entry-body"><p className="service-problem">{service.problem}</p>
            <h4>Possible deliverables</h4>
            <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="service-boundary"><strong>Delivery principle:</strong> {service.boundary}</p>
            <a className="text-link dark-link" href={`mailto:hello@maxyron.com?subject=${encodeURIComponent('MAXYRON enquiry — ' + service.title)}`}>Enquire about this service <span aria-hidden="true">↗</span></a>
          </div>
        </article>)}
      </div>
    </section>

    <section className="dark-section"><div className="shell service-method">
      <div><p className="eyebrow">HOW WE WORK</p><h2>Understand.<br/><em>Architect. Engineer. Evolve.</em></h2></div>
      <div><p>We agree on the question, intended users, requirements, deliverables and evidence of success before choosing technology or methods. Appropriate review, testing and handover are part of the engagement.</p><a className="button light" href="/#approach">Explore our method <span aria-hidden="true">↗</span></a></div>
    </div></section>
    <section className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">START A CONVERSATION</p><h2>What are you<br/>trying to solve<span className="period">?</span></h2><p>Describe your objective, current situation, constraints and what a useful outcome would look like. We can discuss whether an engagement is appropriate.</p></div><a className="button light" href="mailto:hello@maxyron.com?subject=MAXYRON%20service%20enquiry">Email MAXYRON <span aria-hidden="true">↗</span></a></div></section>
    <footer className="footer"><div className="shell footer-top"><div><a className="wordmark" href="/"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a><p>Engineering Intelligent Systems.</p></div><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/#about">About</a><a href="/#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAXYRON. All rights reserved.</span><span>THINK CLEARLY. BUILD BOLDLY.</span></div></footer>
  </main>;
}
