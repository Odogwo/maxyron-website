import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://maxyron.com';
const title = 'Maxyron | AI Engineering, Automation & Research';
const description =
  'Maxyron designs AI applications, intelligent automation, research and knowledge systems that help organizations solve complex problems and make better decisions.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Maxyron',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Maxyron',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary', title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
