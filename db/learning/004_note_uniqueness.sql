-- Development-only migration. Review duplicate resources before applying to a nonempty database.
-- One note per learner/resource; updates require optimistic expectedVersion.
BEGIN;
CREATE UNIQUE INDEX IF NOT EXISTS learner_notes_user_resource_unique ON learning.learner_notes(user_id,resource_ref);
COMMIT;
