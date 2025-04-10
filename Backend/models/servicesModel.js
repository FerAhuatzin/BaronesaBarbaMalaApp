const db = require("../db");

const Service = {
  getAll: (callback) => {
    db.query("SELECT * FROM Services", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM Services WHERE idService = ?", [id], callback);
  },

  create: (service, callback) => {
    db.query("INSERT INTO Services SET ?", service, callback);
  },

  update: (id, service, callback) => {
    db.query("UPDATE Services SET ? WHERE idService = ?", [service, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM Services WHERE idService = ?", [id], callback);
  },
};

module.exports = Service;
