USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("WebDev");
INSERT INTO department (name)
VALUES ("Customer Service");
INSERT INTO department (name)
VALUES ("Executive");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 70000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Software Engineer", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Rep", 65000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Customer Service Rep", 75000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 150000, 6);
INSERT INTO role (title, salary, department_id)
VALUES ("CFO", 150000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Dawn", 6, null);
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