UPDATE tasks
SET content = $2
WHERE task_id = $1;
-- RETURNING *;

-- SELECT * FROM tasks
-- ORDER BY droppable_id;

SELECT * FROM tasks
ORDER BY task_id;