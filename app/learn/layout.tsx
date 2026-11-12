import Link from 'next/link';
import type { ReactNode } from 'react';
import { learningAreas } from './areas';
import styles from './learning.module.css';
export default function LearningLayout({children}:{children:ReactNode}) {
 return <div className={styles.root}>
  <header className={styles.top}><Link href="/learn" className={styles.brand}>MAXYRON / LEARNING</Link><Link href="/">Corporate website</Link></header>
  <div className={styles.body}>
   <nav className={styles.side} aria-label="Learning navigation">
    <h2>Learning workspace</h2><Link href="/learn">Dashboard</Link>
    {learningAreas.map(a=><Link key={a.slug} href={'/learn/'+a.slug}>{a.title}</Link>)}
   </nav>
   <main className={styles.main} id="main-content">{children}</main>
  </div>
 </div>;
}
