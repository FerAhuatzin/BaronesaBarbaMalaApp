const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Services_Branches', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Services_Branches WHERE idServices_Branches = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { branchID, serviceID } = req.body;
  db.query('INSERT INTO Services_Branches (branchID, serviceID) VALUES (?, ?)', [branchID, serviceID], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  const { branchID, serviceID } = req.body;
  db.query('UPDATE Services_Branches SET branchID=?, serviceID=? WHERE idServices_Branches=?', [branchID, serviceID, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Relación servicio-sucursal actualizada' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Services_Branches WHERE idServices_Branches=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Relación eliminada' });
  });
});

module.exports = router;
