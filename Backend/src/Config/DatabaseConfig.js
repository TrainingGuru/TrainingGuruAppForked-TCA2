const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'TrainingGuru',
    port: "8889"
});



module.exports = connection;

