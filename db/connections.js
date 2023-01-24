// Packages / Dependencies
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Recognizes the incoming Request Object as a JSON Object.

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ukraine1992',
        database: process.env.DB_NAME,
    }
);


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Listens the PORT and starts node.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = db;