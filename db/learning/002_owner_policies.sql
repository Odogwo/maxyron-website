-- MAXYRON Learning RLS policy template. DO NOT apply until the authenticated
-- runtime has been reviewed and the application binds verified identity.
-- The runtime role must not be superuser, table owner or BYPASSRLS.
BEGIN;
CREATE FUNCTION learning.current_user_id() RETURNS uuid
LANGUAGE sql STABLE AS $$
 SELECT CASE
  WHEN current_setting('app.verified_user_id', true) ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  THEN current_setting('app.verified_user_id', true)::uuid
  ELSE NULL
 END
$$;
-- IMPORTANT: This setting is not an identity mechanism. Only a trusted
-- server-side auth adapter may set it in a transaction after session verification.
-- Never expose a direct SQL connection or client-controlled SQL to this role.
CREATE POLICY learner_own_user ON learning.users
 FOR SELECT USING (id = learning.current_user_id());
CREATE POLICY learner_own_enrollment ON learning.enrollments
 FOR SELECT USING (user_id = learning.current_user_id());
CREATE POLICY learner_own_notes ON learning.learner_notes
 FOR ALL USING (user_id = learning.current_user_id())
 WITH CHECK (user_id = learning.current_user_id());
CREATE POLICY learner_own_events ON learning.learning_events
 FOR SELECT USING (user_id = learning.current_user_id());
CREATE POLICY learner_insert_events ON learning.learning_events
 FOR INSERT WITH CHECK (user_id = learning.current_user_id());
-- Course catalog is not user-owned; expose only reviewed public course data
-- via a separate read-only API role, not by granting broad table privileges.
COMMIT;
