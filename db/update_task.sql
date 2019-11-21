UPDATE tasks
SET droppable_id = $2
WHERE task_id = $1;

SELECT * FROM tasks
ORDER BY droppable_id;