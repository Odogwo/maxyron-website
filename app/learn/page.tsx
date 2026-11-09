import type { Metadata } from 'next';
import styles from './learning.module.css';

export const metadata: Metadata = {
  title: 'MAXYRON Learning | Architecture Preview',
  description: 'Explore the proposed MAXYRON learning, laboratory, reconstruction, code intelligence and mastery workspace.',
  robots: { index: false, follow: false },
};

const areas = [
  { id: 'courses', title: 'Courses & Disciplines', tag: 'Learning', description: 'Explore structured pathways, modules, lessons and prerequisites.' },
  { id: 'concepts', title: 'Concept Studio', tag: 'Understanding', description: 'Definitions, architecture, mechanisms, relationships, applications and verification.' },
  { id: 'memory', title: 'Memory Studio', tag: 'Retention', description: 'Flashcards, active recall and spaced-repetition reviews.' },
  { id: 'laboratory', title: 'Practical Laboratory', tag: 'Engineering', description: 'Safe exercises, predictions, observations and evidence.' },
  { id: 'systems', title: 'Systems Reconstruction', tag: 'Design', description: 'Investigate, model, reproduce, diagnose and redesign systems.' },
  { id: 'code-bank', title: 'Code Intelligence Bank', tag: 'Reuse', description: 'Retrieve versioned commands, snippets, configurations and recipes.' },
  { id: 'assessments', title: 'Quizzes & Games', tag: 'Practice', description: 'Knowledge checks, simulations and fault-diagnosis challenges.' },
  { id: 'mastery', title: 'Mastery & Credentials', tag: 'Assessment', description: 'Evidence-based competence and four proposed certification milestones.' },
  { id: 'journal', title: 'Learning Journal', tag: 'Continuity', description: 'Learning sessions, discoveries, errors and next actions.' },
];

export default function LearningArchitecturePage() {
  return <div className={styles.root}>
    <header className={styles.top}><span className={styles.brand}>MAXYRON / LEARNING</span><a href="/">Corporate website</a></header>
    <div className={styles.body}>
      <nav className={styles.side} aria-label="Learning areas">
        <h2>Workspace navigation</h2>
        <a href="#overview">Overview</a>
        {areas.map(area => <a key={area.id} href={'#' + area.id}>{area.title}</a>)}
        <a href="#pathway">Learning pathway</a>
      </nav>
      <main id="overview" className={styles.main}>
        <p className={styles.eyebrow}>Learning & Mastery Environment / R1</p>
        <h1>Learn. Build. Reconstruct. Master.</h1>
        <p className={styles.lede}>A unified workspace for conceptual learning, memory, practical engineering, reusable code, systems design and evidence-based mastery.</p>
        <div className={styles.notice}><strong>Architecture preview.</strong> These are navigable interface sections, not yet operational learning services. No account, review schedule, code execution, assessment or certificate is active.</div>
        <section aria-label="Learning workspace areas" className={styles.cards}>
          {areas.map(area => <article key={area.id} id={area.id} className={styles.card}>
            <span className={styles.pill}>{area.tag}</span>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
            <a href="#pathway" aria-label={'View the learning pathway for ' + area.title}>View architecture pathway</a>
          </article>)}
        </section>
        <section id="pathway" className={styles.section}>
          <p className={styles.eyebrow}>Unified educational process</p>
          <h2>From problem to independently verified capability</h2>
          <ol className={styles.steps}><li>Investigate</li><li>Understand</li><li>Recall</li><li>Practise</li><li>Diagnose</li><li>Reconstruct</li><li>Transfer</li><li>Verify mastery</li></ol>
          <p className={styles.lede}>Linux and ELAB-N01 are the first intended learning and engineering cases. Other disciplines will join through governed curriculum adapters.</p>
        </section>
        <p className={styles.foot}>Prototype route on an isolated development branch. No change to existing corporate homepage content.</p>
      </main>
    </div>
  </div>;
}
