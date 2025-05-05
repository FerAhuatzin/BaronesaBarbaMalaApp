const pool = require('../config/database');

const Employee = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM Employees");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM Employees WHERE idEmployee = ?", [id]);
    return rows[0]; // o simplemente return rows si quieres el arreglo completo
  },

  create: async (employee) => {
    const [result] = await pool.query("INSERT INTO Employees SET ?", [employee]);
    return result;
  },

  update: async (id, employee) => {
    const [result] = await pool.query("UPDATE Employees SET ? WHERE idEmployee = ?", [employee, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await pool.query("DELETE FROM Employees WHERE idEmployee = ?", [id]);
    return result;
  },

  getByBranch: async (branchId) => {
    const [rows] = await pool.query(
      "SELECT Name, Position, Description, Profile FROM Employees WHERE idBranch = ?",
      [branchId]
    );
    return rows;
  },

  getByBranch: async (branchId, callback) => {
    db.query('SELECT Name, Description FROM Employees WHERE idBranch = ?', [branchId], callback);
  },


};

module.exports = Employee;
