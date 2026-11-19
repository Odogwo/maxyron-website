import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spiritual Consciousness | MAXYRON',
  description: 'Bible knowledge, spiritual inquiry, philosophy and responsible learning.',
  robots: { index: false, follow: false },
};

const nav = [
  ['Overview', '/spiritual-consciousness'],
  ['Bible Knowledge', '/spiritual-consciousness/bible'],
  ['Sons of God', '/spiritual-consciousness/sons-of-god'],
] as const;

export default function SpiritualLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div style={{ minHeight: '100vh', background: '#f8f8f4', color: '#173432' }}>
    <header style={{ borderBottom: '1px solid #d9e3db', padding: '20px max(24px, calc((100% - 1100px)/2))' }}>
      <Link href="/" style={{ fontWeight: 800 }}>MAXYRON</Link>
      <span aria-hidden="true" style={{ margin: '0 12px' }}>/</span>
      <Link href="/spiritual-consciousness" style={{ fontWeight: 700 }}>Spiritual Consciousness</Link>
      <nav aria-label="Spiritual Consciousness sections" style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 18 }}>
        {nav.map(([label, href]) => <Link key={href} href={href} style={{ textDecoration: 'underline', textUnderlineOffset: 5 }}>{label}</Link>)}
      </nav>
    </header>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' }}>{children}</div>
    <footer style={{ borderTop: '1px solid #d9e3db', padding: '24px', textAlign: 'center' }}>
      <Link href="/research">MAXYRON Research</Link> · <Link href="/">MAXYRON Home</Link>
    </footer>
  </div>;
}
