// import connection instance
const connect = require('../index');

// .env config settings
require('dotenv').config();

// function holding queries and logic for middleware
const mariaDB = function () {

    // example of an INSERT statement
    this.insert = function (columns, values) { 
        try {
            var stmnt = `INSERT INTO ` + process.env.MARIADB_TABLE + ` (` + columns + `) VALUES (` + values + `)`;
            connect.query(stmnt, function (err, result) {
                if (err) throw err;

                console.log('INSERT GOT >>>', result);
                return;
            });
        } catch (error) {
            console.error("DEBUG ERROR >>> ", error);
            return;
        };
    };

    // example of a SELECT statement
    this.select = function (columns) {
        try {
            var stmnt = `SELECT ` + columns + ` FROM ` + process.env.MARIADB_TABLE + ``;
            connect.query(stmnt, function (err, result) {
                if (err) throw err;

                console.log('SELECT GOT >>>', result);
                return;
            });
        } catch (error) {
            console.error("DEBUG ERROR >>> ", error);
            return;
        };
    };

    // TODO : add UPDATE, DELETE, CONDITIONAL STMNTS
};

// EXPORT 
module.exports = mariaDB;