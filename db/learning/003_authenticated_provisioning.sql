-- Apply AFTER 002_owner_policies.sql and review of server-only credentials.
-- Runtime must not be table owner, superuser or BYPASSRLS.
BEGIN;
CREATE OR REPLACE FUNCTION learning.current_verified_subject() RETURNS text
LANGUAGE sql STABLE AS $$
 SELECT nullif(current_setting('app.verified_subject',true),'')
$$;
CREATE POLICY learner_provision_self ON learning.users FOR INSERT
WITH CHECK (id=learning.current_user_id() AND auth_subject=learning.current_verified_subject());
GRANT USAGE ON SCHEMA learning TO maxyron_learning_runtime_dev;
GRANT SELECT,INSERT ON learning.users TO maxyron_learning_runtime_dev;
GRANT SELECT ON learning.enrollments TO maxyron_learning_runtime_dev;
GRANT SELECT,INSERT,UPDATE ON learning.learner_notes TO maxyron_learning_runtime_dev;
GRANT SELECT,INSERT ON learning.learning_events TO maxyron_learning_runtime_dev;
REVOKE DELETE ON learning.learner_notes FROM maxyron_learning_runtime_dev;
REVOKE ALL ON learning.courses FROM maxyron_learning_runtime_dev;
COMMIT;
