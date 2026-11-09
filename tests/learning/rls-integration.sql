\set ON_ERROR_STOP on
-- Disposable PostgreSQL integration test. Run as test database owner.
\ir ../../db/learning/001_initial.sql
\ir ../../db/learning/002_owner_policies.sql
BEGIN;
CREATE ROLE learning_test_runtime NOLOGIN;
GRANT USAGE ON SCHEMA learning TO learning_test_runtime;
GRANT SELECT ON learning.users, learning.enrollments, learning.learning_events TO learning_test_runtime;
GRANT SELECT, INSERT, UPDATE, DELETE ON learning.learner_notes TO learning_test_runtime;
GRANT INSERT ON learning.learning_events TO learning_test_runtime;
INSERT INTO learning.users(id,auth_subject) VALUES
 ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','test-subject-a'),
 ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb','test-subject-b');
INSERT INTO learning.learner_notes(id,user_id,resource_ref,content) VALUES
 ('11111111-1111-4111-8111-111111111111','aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','linux/intro','A note'),
 ('22222222-2222-4222-8222-222222222222','bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb','linux/intro','B note');
SET ROLE learning_test_runtime;
DO $$
BEGIN
 IF (SELECT count(*) FROM learning.learner_notes) <> 0 THEN
  RAISE EXCEPTION 'Anonymous role saw notes';
 END IF;
END $$;
SELECT set_config('app.verified_user_id','aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',true);
DO $$
BEGIN
 IF (SELECT count(*) FROM learning.learner_notes) <> 1 THEN
  RAISE EXCEPTION 'Learner A isolation failed';
 END IF;
 IF EXISTS (SELECT 1 FROM learning.learner_notes WHERE user_id='bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb') THEN
  RAISE EXCEPTION 'Learner A read learner B note';
 END IF;
END $$;
UPDATE learning.learner_notes SET content='A updated' WHERE id='22222222-2222-4222-8222-222222222222';
DO $$
BEGIN
 IF FOUND THEN RAISE EXCEPTION 'Unexpected state'; END IF;
 IF (SELECT count(*) FROM learning.learner_notes WHERE content='A updated') <> 0 THEN
  RAISE EXCEPTION 'Cross-user update was allowed';
 END IF;
END $$;
INSERT INTO learning.learning_events(id,user_id,resource_ref,event_type,idempotency_key,occurred_at)
VALUES ('33333333-3333-4333-8333-333333333333','aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','linux/intro','recall','event-1',now());
DO $$
BEGIN
 BEGIN
  INSERT INTO learning.learning_events(id,user_id,resource_ref,event_type,idempotency_key,occurred_at)
  VALUES ('44444444-4444-4444-8444-444444444444','aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','linux/intro','recall','event-1',now());
  RAISE EXCEPTION 'Duplicate idempotency key was accepted';
 EXCEPTION WHEN unique_violation THEN NULL;
 END;
 BEGIN
  INSERT INTO learning.learner_notes(id,user_id,resource_ref,content)
  VALUES ('55555555-5555-4555-8555-555555555555','bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb','linux/intro','Forged note');
  RAISE EXCEPTION 'Forged ownership accepted';
 EXCEPTION WHEN insufficient_privilege THEN NULL;
 END;
END $$;
SELECT set_config('app.verified_user_id','bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',true);
DO $$
BEGIN
 IF (SELECT count(*) FROM learning.learner_notes) <> 1 THEN
  RAISE EXCEPTION 'Learner B isolation failed';
 END IF;
END $$;
RESET ROLE;
-- PostgreSQL JSONB treats semantically identical object payloads as equal,
-- regardless of JSON object property order. This is the runtime idempotency rule.
DO $
DECLARE payload jsonb := '{"lesson":"intro","result":{"score":2,"passed":true}}'::jsonb;
BEGIN
 IF NOT (payload = '{"result":{"passed":true,"score":2},"lesson":"intro"}'::jsonb) THEN
  RAISE EXCEPTION 'Equivalent JSONB event payloads compared unequal';
 END IF;
 IF payload = '{"lesson":"intro","result":{"score":3,"passed":true}}'::jsonb THEN
  RAISE EXCEPTION 'Different JSONB event payloads compared equal';
 END IF;
END $;
ROLLBACK;
\echo PASS: PostgreSQL owner isolation, anonymous deny, forged ownership and event idempotency
