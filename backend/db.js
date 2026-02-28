//Basic connection MySQL node.js
const mysql = require('mysql2/promise'); // Promises for async/await

const db = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '1234',
  database: 'screamford_academy',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;