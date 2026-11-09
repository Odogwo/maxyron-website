import Link from 'next/link';
import type { Metadata } from 'next';
import { learningAreas } from './areas';
import styles from './learning.module.css';
export const metadata: Metadata={title:'MAXYRON Learning | Architecture Preview',description:'MAXYRON learning workspace architecture preview.',robots:{index:false,follow:false}};
export default function LearningHome(){
 return <><p className={styles.eyebrow}>Learning & Mastery Environment / R1</p>
 <h1>Learn. Build. Reconstruct. Master.</h1>
 <p className={styles.lede}>A unified workspace for conceptual learning, memory, practical engineering, reusable code, systems design and evidence-based mastery.</p>
 <div className={styles.notice}><strong>Architecture preview.</strong> Navigation and page structures are implemented. Accounts, saved progress, code execution, assessments and credentials are not connected.</div>
 <section className={styles.cards} aria-label="Learning areas">{learningAreas.map(a=><article className={styles.card} key={a.slug}><span className={styles.pill}>{a.subtitle}</span><h2>{a.title}</h2><p>{a.description}</p><Link href={'/learn/'+a.slug}>Open workspace</Link></article>)}</section>
 <section className={styles.section}><p className={styles.eyebrow}>Unified educational process</p><h2>From problem to verified capability</h2><ol className={styles.steps}>{['Investigate','Understand','Recall','Practise','Diagnose','Reconstruct','Transfer','Verify mastery'].map(x=><li key={x}>{x}</li>)}</ol></section>
 <p className={styles.foot}>Development-branch implementation; corporate homepage remains unchanged.</p></>;
}
