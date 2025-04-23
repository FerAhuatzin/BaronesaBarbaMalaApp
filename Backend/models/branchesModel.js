const pool = require('../config/database');

const Branch = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM Branches");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM Branches WHERE idBranches = ?", [id]);
    return rows[0]; // o return rows si quieres el arreglo completo
  },

  create: async (branch) => {
    const [result] = await pool.query("INSERT INTO Branches SET ?", [branch]);
    return result;
  },

  update: async (id, branch) => {
    const [result] = await pool.query("UPDATE Branches SET ? WHERE idBranches = ?", [branch, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await pool.query("DELETE FROM Branches WHERE idBranches = ?", [id]);
    return result;
  },

  getByBrandName: async (brandName) => {
    const [rows] = await pool.query(
      "SELECT * FROM Branches WHERE Brand = ?",
      [brandName]
    );
    return rows;
  }
};

module.exports = Branch;
