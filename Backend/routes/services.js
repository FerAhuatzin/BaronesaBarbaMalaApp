const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Services', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Services WHERE idService = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { Name, Price, Brand } = req.body;
  db.query('INSERT INTO Services (Name, Price, Brand) VALUES (?, ?, ?)', [Name, Price, Brand], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  const { Name, Price, Brand } = req.body;
  db.query('UPDATE Services SET Name=?, Price=?, Brand=? WHERE idService=?', [Name, Price, Brand, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Servicio actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Services WHERE idService=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Servicio eliminado' });
  });
});

module.exports = router;
