const db = require("../db");

const Employee = {
  getAll: (callback) => {
    db.query("SELECT * FROM Employees", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM Employees WHERE idEmployee = ?", [id], callback);
  },

  create: (employee, callback) => {
    db.query("INSERT INTO Employees SET ?", employee, callback);
  },

  update: (id, employee, callback) => {
    db.query("UPDATE Employees SET ? WHERE idEmployee = ?", [employee, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM Employees WHERE idEmployee = ?", [id], callback);
  },
};

module.exports = Employee;
