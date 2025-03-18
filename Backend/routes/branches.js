const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Branches', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Branches WHERE idBranches = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { Name, Address, Phone, Brand } = req.body;
  db.query('INSERT INTO Branches (Name, Address, Phone, Brand) VALUES (?, ?, ?, ?)', [Name, Address, Phone, Brand], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  const { Name, Address, Phone, Brand } = req.body;
  db.query('UPDATE Branches SET Name=?, Address=?, Phone=?, Brand=? WHERE idBranches=?', [Name, Address, Phone, Brand, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Sucursal actualizada' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Branches WHERE idBranches=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Sucursal eliminada' });
  });
});

module.exports = router;
