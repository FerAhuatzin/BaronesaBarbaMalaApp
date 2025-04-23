const mysql = require('mysql2/promise');
require('dotenv').config();

// Crear un pool de conexiones en lugar de una única conexión
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('Pool de conexiones MySQL configurado');

module.exports = pool;
