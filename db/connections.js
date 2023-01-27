// Packages / Dependencies

const mysql = require('mysql2');



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'ukraine1992',
        // database name to connect with
        database: 'employee_DB'
    }
);

db.connect(err => {
    if (err) throw err
    console.log('Database connected')
})

module.exports = db;