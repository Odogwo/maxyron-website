import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { learningAreas } from '../areas';
import styles from '../learning.module.css';
import WorkspacePreview from '../WorkspacePreview';
type Props={params:Promise<{area:string}>};
export function generateStaticParams(){return learningAreas.map(a=>({area:a.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {area}=await params;const entry=learningAreas.find(a=>a.slug===area);
 return {title:entry?entry.title+' | MAXYRON Learning':'Learning area not found',robots:{index:false,follow:false}};
}
export default async function LearningAreaPage({params}:Props){
 const {area}=await params;const entry=learningAreas.find(a=>a.slug===area);
 if(!entry)notFound();
 return <>
  <p className={styles.eyebrow}>{entry.subtitle}</p>
  <h1>{entry.title}</h1><p className={styles.lede}>{entry.description}</p>
  <div className={styles.notice}><strong>Interface foundation.</strong> This page establishes navigation and component placement. No learner data, account, assessment or live execution is connected.</div>
  <section aria-label="Workspace modules" className={styles.cards}>{entry.sections.map((section,i)=><article className={styles.card} key={section}>
    <span className={styles.pill}>Module {String(i+1).padStart(2,'0')}</span><h2>{section}</h2><p>Planned interface module. Interactive features will be connected after data and authorization foundations are implemented.</p>
   </article>)}</section>
  <WorkspacePreview modules={entry.sections.map(section=>({title:section,detail:entry.description}))} />
  <section className={styles.section}><p className={styles.eyebrow}>Intended user journey</p><h2>Workflow architecture</h2><ol className={styles.steps}>{entry.workflow.map(step=><li key={step}>{step}</li>)}</ol></section>
  <p className={styles.foot}><Link href="/learn">Return to learning dashboard</Link> · Preview only</p>
 </>;
}
