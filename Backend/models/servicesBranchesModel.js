const pool = require('../config/database');

const ServicesBranchesModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Services_Branches');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query(
      'SELECT * FROM Services_Branches WHERE idServices_Branches = ?',
      [id]
    );
    return rows[0]; // o return rows si prefieres el arreglo completo
  },

  create: async (data) => {
    const [result] = await pool.query(
      'INSERT INTO Services_Branches (branchID, serviceID) VALUES (?, ?)',
      [data.branchID, data.serviceID]
    );
    return result;
  },

  update: async (id, data) => {
    const [result] = await pool.query(
      'UPDATE Services_Branches SET branchID = ?, serviceID = ? WHERE idServices_Branches = ?',
      [data.branchID, data.serviceID, id]
    );
    return result;
  },

  delete: async (id) => {
    const [result] = await pool.query(
      'DELETE FROM Services_Branches WHERE idServices_Branches = ?',
      [id]
    );
    return result;
  },

  getServicesByBranch: async (branchId) => {
    const [rows] = await pool.query(
      `SELECT S.*
       FROM Services S
       JOIN Services_Branches SB ON S.idService = SB.serviceID
       WHERE SB.branchID = ?`,
      [branchId]
    );
    return rows;
  }
};

module.exports = ServicesBranchesModel;
