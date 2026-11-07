import { readFileSync, existsSync } from 'node:fs';

const file = 'docs/integrations/systems.json';
const failures = [];
if (!existsSync(file)) {
  console.error('Missing corporate integration manifest: ' + file);
  process.exit(1);
}

let manifest;
try {
  manifest = JSON.parse(readFileSync(file, 'utf8'));
} catch (error) {
  console.error('Invalid integration manifest JSON: ' + error.message);
  process.exit(1);
}
const records = manifest.records;
if (manifest.schema_version !== 1 || !Array.isArray(records) || records.length === 0) {
  failures.push('Manifest must have schema_version=1 and nonempty records array');
}

const entryStates = new Set(['corporate-self', 'linked-user-confirmed', 'listed-only', 'candidate', 'private-not-public']);
const returnStates = new Set(['user-confirmed', 'source-only', 'pending', 'not-applicable']);
const seen = new Set();
let corporateCount = 0;

for (const record of Array.isArray(records) ? records : []) {
  const id = record.system_id;
  const entry = record.website_entry || {};
  const hosting = record.hosting || {};
  const ret = record.return_navigation || {};
  if (!/^MX-(?:WEB|APP|INF)-\d{3}$/.test(id || '')) failures.push('Invalid system ID: ' + String(id));
  if (seen.has(id)) failures.push('Duplicate system ID: ' + id);
  seen.add(id);
  if (!record.name || !record.kind || !/^Odogwo\/[A-Za-z0-9_.-]+$/.test(record.owner_repo || '')) {
    failures.push(id + ': missing name/kind or invalid owning repository');
  }
  if (!record.next_gate || !Array.isArray(record.evidence_refs) || !record.evidence_refs.length) {
    failures.push(id + ': missing next verification gate or evidence reference');
  }
  if (!entryStates.has(entry.state)) failures.push(id + ': unknown website state');
  if (!returnStates.has(ret.state)) failures.push(id + ': unknown return navigation state');
  if (entry.website_route !== null && entry.website_route !== undefined && !/^\/(?:[a-z0-9-]+)?$/.test(entry.website_route)) {
    failures.push(id + ': invalid corporate route');
  }
  for (const [label, value] of [['candidate_url', hosting.candidate_url], ['approved_public_url', hosting.approved_public_url], ['return_target', ret.target]]) {
    if (value !== null && value !== undefined && (!/^https:\/\//.test(value) || value.includes('127.0.0.1') || value.includes('192.168.'))) {
      failures.push(id + ': ' + label + ' must be a safe HTTPS public URL or null');
    }
  }
  if (entry.state === 'corporate-self') {
    corporateCount++;
    if (id !== 'MX-WEB-001' || hosting.approved_public_url !== 'https://maxyron.com' || entry.website_route !== '/') {
      failures.push(id + ': only MX-WEB-001 may be the main MAXYRON website');
    }
  }
  if (entry.state === 'private-not-public') {
    if (hosting.approved_public_url !== null || hosting.candidate_url !== null || entry.website_route !== null || entry.source_file !== null) {
      failures.push(id + ': private infrastructure must not disclose public endpoints or public source routes');
    }
  }
  if (entry.state === 'listed-only' || entry.state === 'linked-user-confirmed') {
    if (!entry.source_file || !existsSync(entry.source_file)) {
      failures.push(id + ': missing website source for displayed entry');
      continue;
    }
    const source = readFileSync(entry.source_file, 'utf8');
    if (!entry.display_name || !source.includes(entry.display_name)) {
      failures.push(id + ': declared catalogue display name not present in website source');
    }
    if (entry.state === 'linked-user-confirmed') {
      if (!hosting.approved_public_url || !entry.website_route) failures.push(id + ': linked app lacks approved URL or corporate route');
      if (hosting.approved_public_url && !source.includes('href="' + hosting.approved_public_url + '"')) {
        failures.push(id + ': corporate source does not link to approved application URL');
      }
    } else if (hosting.approved_public_url !== null) {
      failures.push(id + ': catalogue-only entry must not claim approved public URL');
    }
  }
  if (entry.state === 'candidate' && hosting.approved_public_url !== null) {
    failures.push(id + ': unevaluated candidate must not claim approved public URL');
  }
  if (ret.state === 'user-confirmed' && !/^https:\/\/maxyron\.com(?:\/|$)/.test(ret.target || '')) {
    failures.push(id + ': confirmed return navigation must target the central MAXYRON website');
  }
  if (ret.target && !ret.target.startsWith('https://maxyron.com')) {
    failures.push(id + ': return target must point to main MAXYRON website');
  }
}
if (corporateCount !== 1) failures.push('Exactly one corporate website must be registered');
if (failures.length) {
  console.error('MAXYRON integration registry audit failed:\n' + failures.map(v => '- ' + v).join('\n'));
  process.exit(1);
}
console.log('MAXYRON integration registry audit passed: ' + seen.size + ' distinct systems; one corporate site; approved public links and listed-only sources consistent.');
