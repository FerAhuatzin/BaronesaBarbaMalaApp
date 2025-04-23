const Appointment = require("../models/appointmentsModel");

exports.getAllAppointments = (req, res) => {
  Appointment.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getAppointmentById = (req, res) => {
  const id = req.params.id;
  Appointment.getById(id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(data[0]);
  });
};

exports.createAppointment = (req, res) => {
  const newAppointment = req.body;
  Appointment.create(newAppointment, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...newAppointment });
  });
};

exports.updateAppointment = (req, res) => {
  const id = req.params.id;
  const updatedAppointment = req.body;
  Appointment.update(id, updatedAppointment, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ id, ...updatedAppointment });
  });
};

exports.deleteAppointment = (req, res) => {
  const id = req.params.id;
  Appointment.delete(id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Appointment deleted" });
  });
};

exports.getAppointmentsByClient = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const data = await Appointment.getByClient(clientId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
