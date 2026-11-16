import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const source=readFileSync('app/learn/server/postgres-storage.ts','utf8');
assert.match(source,/\(payload=\$3::jsonb\) AS payload_matches/);
assert.match(source,/prior\.payload_matches!==true/);
assert.doesNotMatch(source,/JSON\.stringify\(prior\.payload\)/);
console.log('PASS: duplicate event payload comparison delegates JSON object equivalence to PostgreSQL JSONB');
