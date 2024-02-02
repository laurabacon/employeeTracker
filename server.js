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

Connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`Connected to the database.`);
    initApp();
});

