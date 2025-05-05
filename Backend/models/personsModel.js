const pool = require("../config/database");

const Person = {
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT * FROM Persons
    `);
    return rows;
  },

  getById: async (idPerson) => {
    const [rows] = await pool.query(
      `SELECT * FROM Persons WHERE idPerson = ?`,
      [idPerson]
    );
    return rows[0]; // Devuelve el primer resultado o undefined
  },

  // Crear una nueva persona
  create: async (personData) => {
    const { Name, Email, Phone } = personData;
    
    // Comprobamos si ya existe una persona con ese email
    const [existingPerson] = await pool.query(
      "SELECT idPerson FROM Persons WHERE Email = ?",
      [Email]
    );

    if (existingPerson.length > 0) {
      throw new Error("Ya existe una persona con ese email");
    }

    const [result] = await pool.query(
      "INSERT INTO Persons (Name, Email, Phone) VALUES (?, ?, ?)",
      [Name, Email, Phone]
    );

    return {
      idPerson: result.insertId,
      ...personData
    };
  },

  // Actualizar datos de persona
  update: async (idPerson, personData) => {
    const { Name, Email, Phone } = personData;
    
    // Comprobamos si existe la persona
    const [existingPerson] = await pool.query(
      "SELECT idPerson FROM Persons WHERE idPerson = ?",
      [idPerson]
    );

    if (existingPerson.length === 0) {
      throw new Error("Persona no encontrada");
    }

    // Si hay un cambio de email, verificamos que no exista otro con ese email
    if (Email) {
      const [personWithEmail] = await pool.query(
        "SELECT idPerson FROM Persons WHERE Email = ? AND idPerson != ?",
        [Email, idPerson]
      );

      if (personWithEmail.length > 0) {
        throw new Error("Ya existe otra persona con ese email");
      }
    }

    // Construimos la consulta solo con los campos proporcionados
    const fields = [];
    const values = [];

    if (Name !== undefined) {
      fields.push("Name = ?");
      values.push(Name);
    }

    if (Email !== undefined) {
      fields.push("Email = ?");
      values.push(Email);
    }

    if (Phone !== undefined) {
      fields.push("Phone = ?");
      values.push(Phone);
    }

    // Si no hay campos para actualizar, retornamos
    if (fields.length === 0) {
      return { success: true, message: "No hay datos para actualizar" };
    }

    // Agregamos el ID al final del array de valores
    values.push(idPerson);

    const [result] = await pool.query(
      `UPDATE Persons SET ${fields.join(", ")} WHERE idPerson = ?`,
      values
    );

    return { 
      success: result.affectedRows > 0,
      message: result.affectedRows > 0 ? "Persona actualizada correctamente" : "No se realizaron cambios"
    };
  },

  // Eliminar persona (esto también eliminaría el cliente asociado por la restricción de FK)
  delete: async (idPerson) => {
    // Verificamos si la persona existe
    const [existingPerson] = await pool.query(
      "SELECT idPerson FROM Persons WHERE idPerson = ?",
      [idPerson]
    );

    if (existingPerson.length === 0) {
      throw new Error("Persona no encontrada");
    }

    // Verificamos si es cliente
    const [isClient] = await pool.query(
      "SELECT idPerson FROM Clients WHERE idPerson = ?",
      [idPerson]
    );

    if (isClient.length > 0) {
      throw new Error("No se puede eliminar una persona que es cliente");
    }

    const [result] = await pool.query(
      "DELETE FROM Persons WHERE idPerson = ?",
      [idPerson]
    );

    return { 
      success: result.affectedRows > 0,
      message: result.affectedRows > 0 ? "Persona eliminada correctamente" : "No se pudo eliminar la persona"
    };
  },

  // Buscar por email
  findByEmail: async (email) => {
    const [rows] = await pool.query(
      "SELECT * FROM Persons WHERE Email = ?",
      [email]
    );
    return rows[0]; // Devuelve el primer resultado o undefined
  },

  // Buscar por nombre (búsqueda parcial)
  findByName: async (name) => {
    const [rows] = await pool.query(
      "SELECT * FROM Persons WHERE Name LIKE ?",
      [`%${name}%`]
    );
    return rows;
  },

  // Buscar por teléfono
  findByPhone: async (phone) => {
    const [rows] = await pool.query(
      "SELECT * FROM Persons WHERE Phone = ?",
      [phone]
    );
    return rows;
  },

  // Verificar si existe una persona con un email específico
  existsByEmail: async (email) => {
    const [rows] = await pool.query(
      "SELECT COUNT(*) as count FROM Persons WHERE Email = ?",
      [email]
    );
    return rows[0].count > 0;
  }
};

module.exports = Person;