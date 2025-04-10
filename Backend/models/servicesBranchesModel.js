const db = require('../config/database');

const ServicesBranchesModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM Services_Branches', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Services_Branches WHERE idServices_Branches = ?', [id], callback);
  },

  create: (data, callback) => {
    db.query(
      'INSERT INTO Services_Branches (branchID, serviceID) VALUES (?, ?)',
      [data.branchID, data.serviceID],
      callback
    );
  },

  update: (id, data, callback) => {
    db.query(
      'UPDATE Services_Branches SET branchID=?, serviceID=? WHERE idServices_Branches=?',
      [data.branchID, data.serviceID, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Services_Branches WHERE idServices_Branches = ?', [id], callback);
  }
};

module.exports = ServicesBranchesModel;
