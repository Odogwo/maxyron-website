-- MAXYRON Learning database foundation (proposed; not applied).
-- PostgreSQL 15+. Application must bind verified identity from a trusted auth provider.
BEGIN;
CREATE SCHEMA IF NOT EXISTS learning;
CREATE TABLE IF NOT EXISTS learning.users (
 id uuid PRIMARY KEY,
 auth_subject text NOT NULL UNIQUE,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS learning.courses (
 id uuid PRIMARY KEY,
 slug text NOT NULL UNIQUE,
 title text NOT NULL,
 content_version text NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS learning.enrollments (
 id uuid PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES learning.users(id),
 course_id uuid NOT NULL REFERENCES learning.courses(id),
 status text NOT NULL DEFAULT 'active' CHECK(status IN ('active','paused','completed')),
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(user_id,course_id)
);
CREATE TABLE IF NOT EXISTS learning.learner_notes (
 id uuid PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES learning.users(id),
 resource_ref text NOT NULL,
 content text NOT NULL CHECK(char_length(content)<=20000),
 version integer NOT NULL DEFAULT 1 CHECK(version>0),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS learning.learning_events (
 id uuid PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES learning.users(id),
 resource_ref text NOT NULL,
 event_type text NOT NULL,
 schema_version integer NOT NULL DEFAULT 1,
 idempotency_key text NOT NULL,
 occurred_at timestamptz NOT NULL,
 received_at timestamptz NOT NULL DEFAULT now(),
 payload jsonb NOT NULL DEFAULT '{}'::jsonb,
 UNIQUE(user_id,idempotency_key)
);
CREATE INDEX IF NOT EXISTS learning_events_user_received_idx ON learning.learning_events(user_id,received_at DESC);
CREATE INDEX IF NOT EXISTS learner_notes_user_resource_idx ON learning.learner_notes(user_id,resource_ref);
-- RLS is defense-in-depth. No direct browser DB connection is authorized.
ALTER TABLE learning.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning.learner_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning.learning_events ENABLE ROW LEVEL SECURITY;
-- No access policies are granted in this migration. Runtime role must not bypass RLS.
-- A later reviewed migration must define verified-identity-bound policies.
COMMIT;
