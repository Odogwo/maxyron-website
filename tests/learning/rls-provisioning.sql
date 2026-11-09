\set ON_ERROR_STOP on
-- Disposable CI PostgreSQL only. No production connections.
\ir ../../db/learning/001_initial.sql
\ir ../../db/learning/002_owner_policies.sql
CREATE ROLE maxyron_learning_runtime_dev NOLOGIN;
\ir ../../db/learning/003_authenticated_provisioning.sql
BEGIN;
SET ROLE maxyron_learning_runtime_dev;
-- No trusted identity means no rows and no provisioning.
DO $$
BEGIN
 IF (SELECT count(*) FROM learning.users)<>0 THEN RAISE EXCEPTION 'anonymous user leak'; END IF;
END $$;
RESET ROLE;
INSERT INTO learning.users(id,auth_subject) VALUES
('aaaaaaaa-aaaa-5aaa-aaaa-aaaaaaaaaaaa','provider-a'),
('bbbbbbbb-bbbb-5bbb-abbb-bbbbbbbbbbbb','provider-b');
INSERT INTO learning.learner_notes(id,user_id,resource_ref,content) VALUES
('11111111-1111-4111-8111-111111111111','aaaaaaaa-aaaa-5aaa-aaaa-aaaaaaaaaaaa','linux/intro','A private note'),
('22222222-2222-4222-8222-222222222222','bbbbbbbb-bbbb-5bbb-abbb-bbbbbbbbbbbb','linux/intro','B private note');
SET ROLE maxyron_learning_runtime_dev;
SELECT set_config('app.verified_user_id','aaaaaaaa-aaaa-5aaa-aaaa-aaaaaaaaaaaa',true);
SELECT set_config('app.verified_subject','provider-a',true);
DO $$
BEGIN
 IF (SELECT count(*) FROM learning.learner_notes)<>1 THEN RAISE EXCEPTION 'learner A isolation failed'; END IF;
 IF (SELECT count(*) FROM learning.users)<>1 THEN RAISE EXCEPTION 'learner A user isolation failed'; END IF;
END $$;
DO $$
BEGIN
 BEGIN
  INSERT INTO learning.users(id,auth_subject) VALUES ('cccccccc-cccc-5ccc-accc-cccccccccccc','forged-subject');
  RAISE EXCEPTION 'forged learner provisioning succeeded';
 EXCEPTION WHEN insufficient_privilege THEN NULL;
 END;
 BEGIN
  INSERT INTO learning.learner_notes(id,user_id,resource_ref,content) VALUES
   ('33333333-3333-4333-8333-333333333333','bbbbbbbb-bbbb-5bbb-abbb-bbbbbbbbbbbb','linux/intro','forged');
  RAISE EXCEPTION 'forged note succeeded';
 EXCEPTION WHEN insufficient_privilege THEN NULL;
 END;
END $$;
SELECT set_config('app.verified_user_id','bbbbbbbb-bbbb-5bbb-abbb-bbbbbbbbbbbb',true);
SELECT set_config('app.verified_subject','provider-b',true);
DO $$
BEGIN
 IF (SELECT count(*) FROM learning.learner_notes)<>1 THEN RAISE EXCEPTION 'learner B isolation failed'; END IF;
END $$;
RESET ROLE;
ROLLBACK;
\echo PASS: authenticated provisioning and two-user RLS isolation
