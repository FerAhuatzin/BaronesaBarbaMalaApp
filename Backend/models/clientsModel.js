const db = require('../config/database');

const Client = {
  getAll: (callback) => {
    db.query("SELECT * FROM Clients", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM Clients WHERE idClient = ?", [id], callback);
  },

  create: (client, callback) => {
    db.query("INSERT INTO Clients SET ?", client, callback);
  },

  update: (id, client, callback) => {
    db.query("UPDATE Clients SET ? WHERE idClient = ?", [client, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM Clients WHERE idClient = ?", [id], callback);
  },
};

module.exports = Client;
