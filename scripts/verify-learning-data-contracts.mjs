import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const c=readFileSync('app/learn/data-contracts.ts','utf8');
for(const marker of ['validateLearnerNoteInput','validateLearningEventInput','expectedVersion','idempotencyKey','unexpected field','MAX_NOTE_LENGTH','MAX_EVENT_PAYLOAD_BYTES'])assert.ok(c.includes(marker),'Missing data contract '+marker);
assert.ok(!/process\.env|DATABASE_URL/.test(c),'Contracts must not contain secrets');
console.log('PASS: learner data contract source markers present (runtime behavior not exercised).');
