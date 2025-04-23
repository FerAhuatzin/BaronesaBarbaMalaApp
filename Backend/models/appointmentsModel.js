const pool = require('../config/database');

const Appointment = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM Appointments");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM Appointments WHERE idAppointments = ?",
      [id]
    );
    return rows[0]; // o `rows` si prefieres el arreglo completo
  },

  create: async (appointment) => {
    const [result] = await pool.query(
      "INSERT INTO Appointments SET ?",
      [appointment]
    );
    return result;
  },

  update: async (id, appointment) => {
    const [result] = await pool.query(
      "UPDATE Appointments SET ? WHERE idAppointments = ?",
      [appointment, id]
    );
    return result;
  },

  delete: async (id) => {
    const [result] = await pool.query(
      "DELETE FROM Appointments WHERE idAppointments = ?",
      [id]
    );
    return result;
  },

  getByClient: async (clientId) => {
    const [rows] = await pool.query(
      `SELECT 
         A.idAppointments,
         C.Name AS ClientName,
         E.Name AS EmployeeName,
         S.Name AS ServiceName,
         B.Name AS BranchName,
         A.InitialHour,
         A.EndHour
       FROM Appointments A
       JOIN Clients C ON A.idClientR = C.idClient
       JOIN Employees E ON A.idEmployeeR = E.idEmployee
       JOIN Services S ON A.idServiceR = S.idService
       JOIN Branches B ON A.idBranchR = B.idBranches
       WHERE A.idClientR = ?`,
      [clientId]
    );
    return rows;
  }
  
};

module.exports = Appointment;
