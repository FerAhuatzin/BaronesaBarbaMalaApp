const pool = require('../config/database');

const Service = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM Services");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM Services WHERE idService = ?", [id]);
    return rows[0]; // O `return rows;` si prefieres todos los resultados en array
  },

  create: async (service) => {
    const [result] = await pool.query("INSERT INTO Services SET ?", [service]);
    return result;
  },

  update: async (id, service) => {
    const [result] = await pool.query("UPDATE Services SET ? WHERE idService = ?", [service, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await pool.query("DELETE FROM Services WHERE idService = ?", [id]);
    return result;
  }

};

module.exports = Service;
