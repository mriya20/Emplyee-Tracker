const db = require('./db/connections');
const { beginQuestions } = require('./db/index');
const mysql = require('mysql2');
const inquirer = require('inquirer');


beginQuestions();
