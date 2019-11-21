--create tables

DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS projects;


CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    content VARCHAR,
    droppable_id VARCHAR(5)
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY, 
    title VARCHAR(30),
    droppable_id VARCHAR(5)
);

--dummy data

INSERT INTO tasks (content, droppable_id)
VALUES 
('take out the trash', '1'),
('walk the cat', '2'), 
('charge phone', '3'),
('cook dinner', '4'), 
('wash the dishes', '5'),
('do laundry','6');

SELECT * FROM tasks;

INSERT INTO projects (title, droppable_id)
VALUES 
('project-1', '1');

SELECT * FROM projects;