'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  "host"     : "localhost",
  "user"     : 'root',
  "password" : 'qn4nzpmw',
  "database" : 'todoappdb'
});

connection.connect();

module.exports = connection;
