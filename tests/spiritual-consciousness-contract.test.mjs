import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (p) => readFileSync(new URL('../' + p, import.meta.url), 'utf8');

test('spiritual experiences have internal route links', () => {
  const overview = read('app/spiritual-consciousness/page.tsx');
  const layout = read('app/spiritual-consciousness/layout.tsx');
  for (const slug of ['/spiritual-consciousness/bible', '/spiritual-consciousness/sons-of-god']) {
    assert.ok(overview.includes(slug), 'overview missing ' + slug);
    assert.ok(layout.includes(slug), 'layout missing ' + slug);
  }
});

test('source status remains metadata-only and explicitly unapproved', () => {
  const manifest = read('lib/spiritual-consciousness/source-status.ts');
  assert.match(manifest, /integrationStatus: 'metadata-only'/);
  assert.match(manifest, /publicationStatus: 'not-approved'/);
  assert.doesNotMatch(manifest, /process\.env|fetch\(|https:\/\/raw\.githubusercontent/);
});

test('domain pages are noindex until approval', () => {
  for (const page of ['app/spiritual-consciousness/sons-of-god/page.tsx', 'app/spiritual-consciousness/bible/page.tsx']) {
    assert.match(read(page), /index: false/);
    assert.match(read(page), /follow: false/);
  }
});
