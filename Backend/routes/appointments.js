const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Appointments', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM Appointments WHERE idAppointments = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { idBranchR, idClientR, EndHour, idEmployeeR, idServiceR, InitialHour } = req.body;
  db.query(
    'INSERT INTO Appointments (idBranchR, idClientR, EndHour, idEmployeeR, idServiceR, InitialHour) VALUES (?, ?, ?, ?, ?, ?)',
    [idBranchR, idClientR, EndHour, idEmployeeR, idServiceR, InitialHour],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

router.put('/:id', (req, res) => {
  const { idBranchR, idClientR, EndHour, idEmployeeR, idServiceR, InitialHour } = req.body;
  db.query(
    'UPDATE Appointments SET idBranchR=?, idClientR=?, EndHour=?, idEmployeeR=?, idServiceR=?, InitialHour=? WHERE idAppointments=?',
    [idBranchR, idClientR, EndHour, idEmployeeR, idServiceR, InitialHour, req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ message: 'Cita actualizada' });
    }
  );
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Appointments WHERE idAppointments=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Cita eliminada' });
  });
});

module.exports = router;
