import type { Metadata } from 'next';
import './learning.css';

export const metadata: Metadata = {
  title: 'Learning & Mastery | MAXYRON',
  description: 'Explore MAXYRON learning and mastery domains, including AI engineering, psychology, Bible knowledge, mathematics, language and learning science.',
  alternates: { canonical: '/learning' },
};

const domains = [
  { title: 'Bible Knowledge & Memory', area: 'SCRIPTURE', status: 'Knowledge migration in progress', description: 'Scripture understanding, biblical context and disciplined memory practice, with Bible-specific source authority maintained separately.' },
  { title: 'Mathematics & Physics', area: 'QUANTITATIVE REASONING', status: 'Planned domain', description: 'Conceptual understanding, problem solving, proofs and practical transfer across mathematical and physical ideas.' },
  { title: 'English & Vocabulary', area: 'LANGUAGE', status: 'Planned domain', description: 'Vocabulary relationships, expression, reading, grammar and retrieval-oriented language learning.' },
  { title: 'Psychology Knowledge Mastery', area: 'HUMAN UNDERSTANDING', status: 'Application candidate', description: 'Guided exploration and practice of psychological concepts; a separate application exists but MAXYRON integration is not verified.' },
  { title: 'Memory & Learning Science', area: 'LEARNING METHODS', status: 'Planned shared capability', description: 'Retrieval, spaced practice, explanation, feedback and transfer used where appropriate across learning domains.' },
  { title: 'Spiritual Reflection & Practical Living', area: 'REFLECTION', status: 'Proposed platform', description: 'Interdisciplinary reflection on faith, prayer, consciousness, philosophy, personal development and meaningful living.' },
];

export default function LearningPage() {
  return <main>
    <header className="site-header"><div className="shell nav">
      <a className="wordmark" href="/" aria-label="MAXYRON home"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/products">Products</a><a href="/learning" aria-current="page">Learning</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
      <a className="nav-cta" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
    </div></header>
    <section className="learning-hero"><div className="shell">
      <p className="eyebrow"><span className="pulse"/> LEARNING / PRACTICE / MASTERY</p>
      <h1>Knowledge that<br/><em>becomes capability.</em></h1>
      <p>MAXYRON explores learning systems that connect understanding, deliberate practice and evidence of independent performance. This page introduces developing and proposed learning areas, rather than an enrolment catalogue or accredited school.</p>
    </div></section>
    <section className="shell learning-principles" aria-labelledby="learning-principles-title">
      <div><p className="eyebrow muted">OUR EDUCATIONAL VIEW</p><h2 id="learning-principles-title">Learning is a process.<br/>Mastery must be demonstrated.</h2></div>
      <div className="principle-list">
        <p><strong>Understand.</strong> Explain the concepts and mechanisms, not merely repeat definitions.</p>
        <p><strong>Practise.</strong> Apply understanding in realistic and varied tasks, with feedback.</p>
        <p><strong>Demonstrate.</strong> Diagnose errors, reconstruct solutions and transfer learning to unfamiliar situations.</p>
        <p className="learning-caveat">Remembering content or completing lessons is not, by itself, proof of mastery.</p>
      </div>
    </section>
    <section className="learning-feature"><div className="shell">
      <div className="learning-section-head"><p className="eyebrow muted">PROGRAMME IN DEVELOPMENT</p><h2>Build. Learn. Master.</h2></div>
      <article className="learning-feature-card"><div>
        <span className="learning-tag">AI ENGINEERING · PROGRAMME FOUNDATION</span>
        <h3>Applied AI Engineering</h3>
        <p>A proposed 12-week, project-driven learning pathway combining software builds, reference-supported theory, engineering judgment and evidence of independent competence.</p>
        <p>The programme repository contains a working foundation. This is not an announcement of open enrolment, certification or a fully verified training product.</p>
        <a className="text-link dark-link" href="mailto:hello@maxyron.com?subject=MAXYRON%20learning%20enquiry">Discuss learning systems <span aria-hidden="true">↗</span></a>
      </div><div className="learning-feature-motif" aria-hidden="true"><span>BUILD</span><span>LEARN</span><span>MASTER</span></div></article>
    </div></section>
    <section className="shell learning-domains">
      <div className="learning-section-head"><p className="eyebrow muted">DOMAIN PORTFOLIO</p><h2>Knowledge across disciplines.</h2><p>These domains have independent knowledge owners and differing development stages. Listing a subject does not establish that a finished course or application is available.</p></div>
      <div className="learning-grid">{domains.map((domain)=><article key={domain.title} className="learning-domain">
        <span className="learning-area">{domain.area}</span><h3>{domain.title}</h3><p>{domain.description}</p><span className="learning-state">{domain.status}</span>
      </article>)}</div>
    </section>
    <section className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">LEARNING SYSTEMS</p><h2>Develop capability<br/>with purpose<span className="period">.</span></h2><p>We are developing structured knowledge and mastery technologies. Contact MAXYRON to discuss a learning-systems project or potential collaboration.</p></div><a className="button light" href="mailto:hello@maxyron.com?subject=MAXYRON%20learning%20systems">Contact MAXYRON <span aria-hidden="true">↗</span></a></div></section>
    <footer className="footer"><div className="shell footer-top"><div><a className="wordmark" href="/"><span className="mark">M<span>.</span></span><span>MAXYRON</span></a><p>Engineering Intelligent Systems.</p></div><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/products">Products</a><a href="/learning">Learning</a><a href="/#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAXYRON. All rights reserved.</span><span>THINK CLEARLY. BUILD BOLDLY.</span></div></footer>
  </main>;
}
