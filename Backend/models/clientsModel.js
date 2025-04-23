const pool = require('../config/database');

const Client = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM Clients");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM Clients WHERE idClient = ?", [id]);
    return rows;
  },

  create: async (client) => {
    const [result] = await pool.query("INSERT INTO Clients SET ?", [client]);
    return result;
  },

  update: async (id, client) => {
    const [result] = await pool.query("UPDATE Clients SET ? WHERE idClient = ?", [client, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await pool.query("DELETE FROM Clients WHERE idClient = ?", [id]);
    return result;
  },

  findByEmail: async (email) => {
    const [rows] = await pool.query("SELECT * FROM Clients WHERE Email = ?", [email]);
    return rows;
  },

  saveRefreshToken: async (clientId, refreshToken) => {
    const [result] = await pool.query(
      "UPDATE Clients SET refreshToken = ? WHERE idClient = ?", 
      [refreshToken, clientId]
    );
    return result;
  },

  findByRefreshToken: async (refreshToken) => {
    const [rows] = await pool.query("SELECT * FROM Clients WHERE refreshToken = ?", [refreshToken]);
    return rows;
  },

  revokeRefreshToken: async (clientId) => {
    const [result] = await pool.query(
      "UPDATE Clients SET refreshToken = NULL WHERE idClient = ?", 
      [clientId]
    );
    return result;
  },


  addPoints: async (clientId, Emoney) => {
    const [result] = await pool.query(
      "UPDATE Clients SET Emoney = Emoney + ? WHERE idClient = ?",
      [Emoney, clientId]
    );
    return result;
  },
  
  removePoints: async (clientId, Emoney) => {
    const [result] = await pool.query(
      "UPDATE Clients SET Emoney = GREATEST(Emoney - ?, 0) WHERE idClient = ?",
      [Emoney, clientId]
    );
    return result;
  }

};

module.exports = Client;
