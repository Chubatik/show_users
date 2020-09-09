const mysql = require('mysql2');
let connection_not_exists = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'iSKKZ200215!'
});
connection_not_exists.query('create database if not exists usersDB', ()=>{
    console.log('connected to mysql server');
});
connection_not_exists.end();
