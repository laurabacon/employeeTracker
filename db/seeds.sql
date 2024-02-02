USE employees;

INSERT INTO department (name)
VALUES ("Sales"), ("WebDev"), ("Customer Service"), ("Executive");

INSERT INTO role (title, salary, department)
VALUES ("Sales Lead", 70000, 1);
INSERT INTO role (title, salary, department)
VALUES ("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department)
VALUES ("Junior Software Engineer", 80000, 3);
INSERT INTO role (title, salary, department)
VALUES ("Customer Service Rep", 65000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Scott", "Brown", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maddie", "Grove", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aleena", "Portugal", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Greg", "Smith", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Scarlet", "Kessinger", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Laura", "Bacon", 2, 1);