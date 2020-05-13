// package imports
const mysql = require('mysql')
const util = require('util')

// .env config settings
require('dotenv').config();

// connection information defined here
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PWD,
    database: process.env.MARIADB_DB
});

// create connection pool to process queries
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) {
        connection.release()
    }
    return;
});

// the magic happens here : handle promises -> to read
pool.query = util.promisify(pool.query)

// EXPORT
module.exports = pool