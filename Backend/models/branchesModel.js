const db = require('../config/database');

const Branch = {
  getAll: (callback) => {
    db.query("SELECT * FROM Branches", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM Branches WHERE idBranches = ?", [id], callback);
  },

  create: (branch, callback) => {
    db.query("INSERT INTO Branches SET ?", branch, callback);
  },

  update: (id, branch, callback) => {
    db.query("UPDATE Branches SET ? WHERE idBranches = ?", [branch, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM Branches WHERE idBranches = ?", [id], callback);
  },
};

module.exports = Branch;
