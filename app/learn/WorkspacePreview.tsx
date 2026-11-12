'use client';
import { useState } from 'react';
import styles from './learning.module.css';
type Module = { title: string; detail: string };
export default function WorkspacePreview({modules}:{modules:readonly Module[]}){
 const [selected,setSelected]=useState(0);
 const [notes,setNotes]=useState('');
 const [checked,setChecked]=useState(false);
 const current=modules[selected];
 return <section aria-label="Interactive workspace preview" className={styles.preview}>
  <div className={styles.previewHead}><div><p className={styles.eyebrow}>Workspace layout preview</p><h2>Module workbench</h2></div><span className={styles.pill}>Local demonstration</span></div>
  <div className={styles.previewGrid}>
   <div className={styles.moduleTabs} role="group" aria-label="Choose workspace module">
    {modules.map((module,index)=><button key={module.title} type="button" aria-pressed={index===selected} className={index===selected?styles.activeTab:styles.tab} onClick={()=>{setSelected(index);setChecked(false);setNotes('')}}>{module.title}</button>)}
   </div>
   <div className={styles.previewPanel}>
    <h3>{current.title}</h3><p>{current.detail}</p>
    <label htmlFor="workspace-notes" className={styles.fieldLabel}>Design notes (local preview only)</label>
    <textarea id="workspace-notes" className={styles.noteField} value={notes} onChange={e=>{setNotes(e.target.value);setChecked(false)}} placeholder="Describe how this workspace should behave..." />
    <div className={styles.previewActions}><button type="button" className={styles.action} onClick={()=>setChecked(true)}>Check draft</button><button type="button" className={styles.secondaryAction} onClick={()=>{setNotes('');setChecked(false)}}>Clear</button></div>
    <p role="status" className={styles.feedback}>{checked?(notes.trim().length>=30?'Draft length sufficient for a design note. Not saved or assessed.':'Add at least 30 characters to make the design note useful.'):'This preview does not store or submit learner information.'}</p>
   </div>
  </div>
 </section>;
}
