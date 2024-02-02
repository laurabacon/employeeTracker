DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;


CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  department VARCHAR(30),
  FOREIGN KEY (department)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT
);


USE employees;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("WebDev");
INSERT INTO department (name)
VALUES ("Customer Service");
INSERT INTO department (name)
VALUES ("Executive");
    
INSERT INTO role (title, salary, department)
VALUES ("Sales Lead", 70000, 1);
INSERT INTO role (title, salary, department)
VALUES ("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department)
VALUES ("Junior Software Engineer", 80000, 3);
INSERT INTO role (title, salary, department)
VALUES ("Customer Service Rep", 65000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Dawn", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Scott", "Brown", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maddie", "Grove", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aleena", "Portugal", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Greg", "Smith", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Scarlet", "Kessinger", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Laura", "Bacon", 4, 3);