const mysql = require('mysql2');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'usersDB',
    password:'iSKKZ200215!'
}).promise();

module.exports = connection;
