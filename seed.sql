USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("Marketing"),
("Sales"),
("Advertising"),
("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 55000.00, 2),
("Web Developer", 68000.00, 4),
("Market Specialist", 120000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gavin", "Phill", 3, 1)