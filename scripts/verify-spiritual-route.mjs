import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = p => readFileSync(p,'utf8');
const page = read('app/spiritual-consciousness/page.tsx');
const learning = read('app/learning/page.tsx');
const sitemap = read('app/sitemap.ts');
assert.match(page,/Spiritual Consciousness/);
assert.match(page,/Bible Knowledge/);
assert.match(page,/Scripture Memory/);
assert.match(page,/Spiritual Inquiry/);
assert.match(page,/Learning and Verification/);
assert.match(page,/Development status/);
assert.match(page,/not a public Bible study database/);
assert.match(learning,/href="\/spiritual-consciousness"/);
assert.match(sitemap,/\/spiritual-consciousness/);
assert.ok(existsSync('.next/server/app/spiritual-consciousness.html') || existsSync('.next/server/app/spiritual-consciousness.rsc') || existsSync('.next/server/app/spiritual-consciousness.meta'), 'Expected a generated Next.js spiritual route artifact');
for (const forbidden of ['private/learner-attempts','RESTRICTED-ELITE_KOS-SOURCES','CONCEPT-0001','CONCEPT-0002']) {
  assert.ok(!page.includes(forbidden), 'Restricted source reference leaked: '+forbidden);
}
console.log('PASS: spiritual route source, navigation, sitemap, safe overview, and generated build artifact');
console.log('NOT TESTED: live deployment, browser rendering, Obsidian, rights clearance, learner outcomes');
