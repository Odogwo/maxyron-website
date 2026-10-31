import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'MAXYRON | Engineering Intelligent Systems', description: 'MAXYRON engineers intelligent systems, AI workflows, knowledge architectures and digital products.', metadataBase: new URL('https://maxyron.com'), alternates: { canonical: '/' }, robots: { index: true, follow: true }, openGraph: { title: 'MAXYRON — Engineering Intelligent Systems', description: 'Building systems that turn intelligence into capability.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
