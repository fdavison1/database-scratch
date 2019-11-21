UPDATE tasks
SET droppable_id = $2
WHERE task_id = $1;
-- RETURNING *;

-- SELECT * FROM tasks
-- ORDER BY droppable_id;

SELECT * FROM tasks
ORDER BY droppable_id;