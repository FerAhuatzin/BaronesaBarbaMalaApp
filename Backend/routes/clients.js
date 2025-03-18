const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Clients', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Clients WHERE idClient = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { Name, Email, Phone, Emoney } = req.body;
  db.query('INSERT INTO Clients (Name, Email, Phone, Emoney) VALUES (?, ?, ?, ?)', [Name, Email, Phone, Emoney], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  const { Name, Email, Phone, Emoney } = req.body;
  db.query('UPDATE Clients SET Name=?, Email=?, Phone=?, Emoney=? WHERE idClient=?', [Name, Email, Phone, Emoney, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Cliente actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Clients WHERE idClient=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Cliente eliminado' });
  });
});

module.exports = router;
