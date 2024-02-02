//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");

//encrypt env file
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

//connect to db
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'dbUser',
      password: 'dbPassword',
      database: 'dbName'
    },
  );

//start app
db.connect((err) => {
    if (err) {
        throw err;
    }
    initApp();
});

//array of choices & corresponding functions for user
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
        },
    ])
    .then(function(result) {
        switch (result.option) {
            case "View All employees":
                viewAllEmployees();
                break;           
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployee();
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
            case "Add department":
                addDepartment();
                break;
            default:
            quit();
        }
      });
};

//declaring a fucntion to view all employees
function viewAllEmployees() {

};

//decalring a function to add an employee record
function addEmployee() {

};

//declaring a function to update an Employee record
function updateEmployee() {

};

//decarling function to view all roles
function viewAllRoles() {

};

//decalring function to add a role
function addRole() {

};

//declaring function to view all departments
function viewAllDepartment() {

};

//declaring function to add a department
function addDepartment() {

};



