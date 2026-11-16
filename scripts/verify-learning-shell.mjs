import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = path => readFileSync(path, 'utf8');
const registry = read('app/learn/areas.ts');
const page = read('app/learn/[area]/page.tsx');
const layout = read('app/learn/layout.tsx');
const home = read('app/learn/page.tsx');
const preview = read('app/learn/WorkspacePreview.tsx');
const css = read('app/learn/learning.module.css');
const expected = ['courses','concepts','memory','laboratory','systems','code-bank','assessments','mastery','journal'];
for(const slug of expected){
 assert.match(registry,new RegExp("slug:'"+slug+"'"),'Missing learning area '+slug);
}
assert.equal((registry.match(/slug:'/g)||[]).length,expected.length,'Unexpected area count');
assert.match(page,/generateStaticParams/);
assert.match(page,/notFound\(\)/);
assert.match(page,/WorkspacePreview/);
assert.match(layout,/aria-label="Learning navigation"/);
assert.match(home,/learningAreas\.map/);
assert.match(preview,/aria-pressed/);
assert.match(preview,/role="status"/);
assert.match(preview,/useState/);
assert.match(css,/@media/);
assert.ok(existsSync('app/learn/layout.tsx'));
console.log('PASS: nine registered routes, shared layout, accessible preview controls and responsive styles.');
