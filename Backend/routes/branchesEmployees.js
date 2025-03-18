const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Branches_Employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Branches_Employees WHERE idBranches_Employees = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { IdBranch, IdEmployee } = req.body;
  db.query('INSERT INTO Branches_Employees (IdBranch, IdEmployee) VALUES (?, ?)', [IdBranch, IdEmployee], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  const { IdBranch, IdEmployee } = req.body;
  db.query('UPDATE Branches_Employees SET IdBranch=?, IdEmployee=? WHERE idBranches_Employees=?', [IdBranch, IdEmployee, req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Relación sucursal-empleado actualizada' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Branches_Employees WHERE idBranches_Employees=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Relación eliminada' });
  });
});

module.exports = router;
