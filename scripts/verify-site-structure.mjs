import { readFileSync, existsSync } from 'node:fs';

const routes = [
  { route: '/', page: 'app/page.tsx' },
  { route: '/services', page: 'app/services/page.tsx' },
  { route: '/products', page: 'app/products/page.tsx' },
  { route: '/learning', page: 'app/learning/page.tsx' },
  { route: '/research', page: 'app/research/page.tsx' },
];

const failures = [];
const sitemapPath = 'app/sitemap.ts';
if (!existsSync(sitemapPath)) failures.push('Missing sitemap source');

for (const { route, page } of routes) {
  if (!existsSync(page)) {
    failures.push(`Missing route source ${page}`);
    continue;
  }
  const source = readFileSync(page, 'utf8');
  if (!source.includes('export default function')) failures.push(`Missing page export: ${page}`);
  if (route !== '/') {
    const stylesheet = page.replace('page.tsx', `${route.slice(1)}.css`);
    if (!existsSync(stylesheet)) failures.push(`Missing page stylesheet: ${stylesheet}`);
    if (!source.includes(`'./${route.slice(1)}.css'`)) failures.push(`Missing CSS import: ${page}`);
  }
  const nav = source.match(/<nav aria-label="Main navigation">[\\s\\S]*?<\\/nav>/)?.[0] ?? '';
  if (!nav.includes('href="mailto:hello@maxyron.com?subject=MAXYRON%20enquiry"')) {
    failures.push(`${page} main navigation must open the MAXYRON email composer directly`);
  }
  if (nav.includes('href="#contact"') || nav.includes('href="/#contact"')) {
    failures.push(`${page} main Contact must not use an in-page anchor`);
  }
  for (const destination of ['/services', '/products', '/learning', '/research']) {
    if (!source.includes(`href="${destination}"`)) {
      failures.push(`${page} missing navigation link to ${destination}`);
    }
  }
}

const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
for (const { route } of routes.filter((r) => r.route !== '/')) {
  if (!sitemap.includes(route)) {
    failures.push(`Sitemap missing ${route}`);
  }
}
const services = existsSync('app/services/page.tsx') ? readFileSync('app/services/page.tsx', 'utf8') : '';
for (const name of ['AI Engineering', 'Intelligent Automation', 'Knowledge Architecture', 'Research & Advisory']) {
  if (!services.includes(name)) failures.push(`Missing established service: ${name}`);
}

if (failures.length) {
  console.error('MAXYRON structural audit failed:\n' + failures.map((x) => `- ${x}`).join('\n'));
  process.exit(1);
}
console.log('MAXYRON structural audit passed: five routes, cross-navigation, stylesheets, sitemap and four service areas.');
