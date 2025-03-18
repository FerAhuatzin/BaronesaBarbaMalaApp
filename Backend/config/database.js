const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '129.146.38.202',
  user: 'baronesa',
  password: 'Baro123$',
  database: 'Baronesa'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

module.exports = db;
