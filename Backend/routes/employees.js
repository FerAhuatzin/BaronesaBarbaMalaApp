const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Employees WHERE idEmployee = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { Name, Email, Phone, Position, Profile, Description } = req.body;
  db.query('INSERT INTO Employees (Name, Email, Phone, Position, Profile, Description) VALUES (?, ?, ?, ?, ?, ?)', [Name, Email, Phone, Position, Profile, Description], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  const { Name, Email, Phone, Position, Profile, Description } = req.body;
  db.query('UPDATE Employees SET Name=?, Email=?, Phone=?, Position=?, Profile=?, Description=? WHERE idEmployee=?', [Name, Email, Phone, Position, Profile, Description, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Empleado actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Employees WHERE idEmployee=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Empleado eliminado' });
  });
});

module.exports = router;
