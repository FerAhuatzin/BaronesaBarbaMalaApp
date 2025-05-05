const pool = require("../config/database");

const Client = {
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT p.*, c.* 
      FROM Clients c
      JOIN Persons p ON c.idPerson = p.idPerson
    `);
    return rows;
  },

  getById: async (idClient) => {
    const [rows] = await pool.query(
      `
      SELECT p.*, c.* 
      FROM Clients c
      JOIN Persons p ON c.idPerson = p.idPerson
      WHERE c.idPerson = ?
    `,
      [idClient]
    );
    return rows[0]; // Devuelve el primer resultado o undefined
  },

  // Crear un nuevo cliente (requiere primero crear la persona)
  create: async (personData, clientData) => {
    // Iniciamos una transacción para asegurar que ambas operaciones tengan éxito
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // Primero creamos o actualizamos el registro en Person
      let idPerson;
      const [existingPerson] = await connection.query(
        "SELECT idPerson FROM Persons WHERE Email = ?",
        [personData.Email]
      );

      if (existingPerson.length > 0) {
        // La persona ya existe, actualizamos sus datos
        idPerson = existingPerson[0].idPerson;
        await connection.query(
          "UPDATE Persons SET Name = ?, Phone = ? WHERE idPerson = ?",
          [personData.Name, personData.Phone, idPerson]
        );
      } else {
        // La persona no existe, la creamos
        const [personResult] = await connection.query(
          "INSERT INTO Persons (Name, Email, Phone) VALUES (?, ?, ?)",
          [personData.Name, personData.Email, personData.Phone]
        );
        idPerson = personResult.insertId;
      }

      // Ahora creamos el registro del cliente
      const [clientResult] = await connection.query(
        "INSERT INTO Clients (idPerson, Password, RefreshToken) VALUES (?, ?, ?)",
        [idPerson, clientData.Password, clientData.RefreshToken || null]
      );

      await connection.commit();

      return {
        idPerson,
        ...clientResult,
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  // Actualizar datos de cliente
  update: async (idPerson, clientData, personData = null) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // Actualizamos datos de cliente
      if (Object.keys(clientData).length > 0) {
        await connection.query("UPDATE Clients SET ? WHERE idPerson = ?", [
          clientData,
          idPerson,
        ]);
      }

      // Si se proporcionan datos de persona, los actualizamos también
      if (personData && Object.keys(personData).length > 0) {
        await connection.query("UPDATE Persons SET ? WHERE idPerson = ?", [
          personData,
          idPerson,
        ]);
      }

      await connection.commit();
      return { success: true };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  // Eliminar cliente (manteniendo la persona)
  delete: async (idPerson) => {
    const [result] = await pool.query(
      "DELETE FROM Clients WHERE idPerson = ?",
      [idPerson]
    );
    return result;
  },

  // Buscar por email (en la tabla de personas)
  findByEmail: async (email) => {
    const [rows] = await pool.query(
      `
      SELECT p.*, c.* 
      FROM Persons p
      LEFT JOIN Clients c ON p.idPerson = c.idPerson
      WHERE p.Email = ?
    `,
      [email]
    );
    return rows[0]; // Devuelve el primer resultado o undefined
  },

  // Verificar si una persona es cliente
  isClient: async (idPerson) => {
    const [rows] = await pool.query(
      "SELECT COUNT(*) as count FROM Clients WHERE idPerson = ?",
      [idPerson]
    );
    return rows[0].count > 0;
  },

  saveRefreshToken: async (clientId, refreshToken) => {
    const [result] = await pool.query(
      "UPDATE Clients SET RefreshToken = ? WHERE idClient = ?",
      [refreshToken, clientId]
    );
    return result;
  },

  // Buscar por refresh token
  findByRefreshToken: async (refreshToken) => {
    const [rows] = await pool.query(
      `
        SELECT p.*, c.*
        FROM Clients c
        JOIN Persons p ON c.idPerson = p.idPerson
        WHERE c.RefreshToken = ?
      `,
      [refreshToken]
    );
    return rows[0]; // Devuelve el primer resultado o undefined
  },

  revokeRefreshToken: async (idPerson) => {
    const [result] = await pool.query(
      "UPDATE Clients SET RefreshToken = NULL WHERE idPerson = ?",
      [idPerson]
    );
    return result;
  },

  addPoints: async (idPerson, Emoney) => {
    const [result] = await pool.query(
      "UPDATE Clients SET Emoney = Emoney + ? WHERE idPerson = ?",
      [Emoney, idPerson]
    );
    return result;
  },

  removePoints: async (idPerson, Emoney) => {
    const [result] = await pool.query(
      "UPDATE Clients SET Emoney = GREATEST(Emoney - ?, 0) WHERE idPerson = ?",
      [Emoney, idPerson]
    );
    return result;
  },
};

module.exports = Client;
