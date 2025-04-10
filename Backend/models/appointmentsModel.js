const db = require("../db");

const Appointment = {
  getAll: (callback) => {
    db.query("SELECT * FROM Appointments", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM Appointments WHERE idAppointments = ?", [id], callback);
  },

  create: (appointment, callback) => {
    db.query("INSERT INTO Appointments SET ?", appointment, callback);
  },

  update: (id, appointment, callback) => {
    db.query("UPDATE Appointments SET ? WHERE idAppointments = ?", [appointment, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM Appointments WHERE idAppointments = ?", [id], callback);
  },
};

module.exports = Appointment;
