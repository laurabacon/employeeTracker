// Dependencies
const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'April162022!',
  database: 'employee_db'
},
console.log(`Connected to the employees db.`)
);


// Start the app
const initApp = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do in the Employee Tracker?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit"
      ],
      name: "option"
    },
  ])
  .then(function(result) {
    switch (result.option) {
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "Add Role":
        addRole();
        break;
      case "View All Departments":
        viewAllDepartment();
        break;
      case "Add Department":
        addDepartment();
        break;
      default:
        quit();
    }
  });
};

//declaring a fucntion to view all employees
function viewAllEmployees() {
    const query = "SELECT * FROM employee";
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(results);
      console.table(results);
      initApp();
    })
};

//decalring a function to add an employee record
function addEmployee() {
    inquirer.prompt([
    {
        type: "input",
        message: "What is the name of the first name of the employee you want to add?",
        name: "fName"
    },
    {
        type: "input",
        message: "What is the name of the last name of the employee you want to add?",
        name: "lName"
    },
    {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
    },
    {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
    }])
    .then(answer => {
      const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)"; 
      const endValue = [answer.fName, answer.lName, answer.roleID, answer.managerID];
      db.query(query, endValue, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }
          initApp();
          });
    });
};

//decarling function to view all roles
function viewAllRoles() {
  const query = "SELECT * FROM role";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(results);
    console.table(results);
    initApp();
  });
}

//decalring function to add a role
function addRole() {
    inquirer.prompt([
    {
        type: "input",
        message: "What is the name of the role you want to add?",
        name: "NameofRole"
    },
    {
        type: "input",
        message: "What is the name of the salary of this role?",
        name: "SalaryAmount"
    },
    {
        type: "input",
        message: "What department does this role fall under?",
        name: "DepartmentName"
    },
  ])
    .then(answer => {
      const query =
      "INSERT INTO role (title, salary, department) VALUES (?, ?, ?)"; 
      const endValue = [answer.NameofRole, answer.SalaryAmount, answer.DepartmentName];
      db.query(query, endValue, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }
          initApp();
          });
    });
};

//declaring function to view all departments
function viewAllDepartment() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            throw err;
        } else {
            console.table(results);
            initApp();
        }
    });
};

//declaring function to add a department
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department?",
        name: "NameOfDepartment"
    })
    .then(answer => {
        db.query(
            "INSERT INTO department (name) VALUES (?)",
            [answer.NameOfDepartment],
            function (err, res) {
                if (err) {
                throw err;
            } else {
                console.table(res);
                initApp();
            }
        });
    });
};

function quit() {
    db.end();
    process.exit();
};

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    initApp();
  });
