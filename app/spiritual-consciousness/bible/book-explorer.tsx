'use client';

import { useMemo, useState } from 'react';
import { bibleBooks } from '../../../lib/spiritual-consciousness/bible-book-registry';

export default function BibleBookExplorer() {
  const [query, setQuery] = useState('');
  const [testament, setTestament] = useState<'All' | 'Old Testament' | 'New Testament'>('All');
  const matches = useMemo(() => bibleBooks.filter(book =>
    (testament === 'All' || book.testament === testament) &&
    (book.name.toLowerCase().includes(query.trim().toLowerCase()) || book.id.includes(query.trim()))
  ), [query, testament]);

  return <section aria-labelledby="bible-explorer-title" style={{ marginTop: 44 }}>
    <h2 id="bible-explorer-title">Explore the 66 Bible book identities</h2>
    <p>Search by book name or the BKA three-digit book coordinate. These are navigational identities, not automatically published Scripture notes.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '20px 0' }}>
      <label htmlFor="bible-book-search">Find a book</label>
      <input id="bible-book-search" type="search" value={query} onChange={e => setQuery(e.target.value)}
        placeholder="e.g. John or 204" style={{ padding: 10, border: '1px solid #7c9289', borderRadius: 6 }} />
      <label htmlFor="bible-testament">Testament</label>
      <select id="bible-testament" value={testament} onChange={e => setTestament(e.target.value as typeof testament)}
        style={{ padding: 10, border: '1px solid #7c9289', borderRadius: 6 }}>
        <option>All</option><option>Old Testament</option><option>New Testament</option>
      </select>
    </div>
    <p aria-live="polite">{matches.length} book{matches.length === 1 ? '' : 's'} found</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 10 }}>
      {matches.map(book => <article key={book.id} style={{ padding: 16, border: '1px solid #cddbd2', borderRadius: 8, background: 'white' }}>
        <h3 style={{ fontSize: 17, margin: '0 0 6px' }}>{book.name}</h3>
        <p style={{ margin: 0, fontSize: 13 }}>BKA: {book.id}-000-000</p>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: '#526e68' }}>{book.testament}</p>
      </article>)}
    </div>
  </section>;
}
