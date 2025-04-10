const Service = require("../models/servicesModel");

exports.getAllServices = (req, res) => {
  Service.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};

exports.getServiceById = (req, res) => {
  const id = req.params.id;
  Service.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.length === 0) return res.status(404).json({ message: "Service not found" });
    res.json(data[0]);
  });
};

exports.createService = (req, res) => {
  const newService = req.body;
  Service.create(newService, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...newService });
  });
};

exports.updateService = (req, res) => {
  const id = req.params.id;
  const updatedService = req.body;
  Service.update(id, updatedService, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...updatedService });
  });
};

exports.deleteService = (req, res) => {
  const id = req.params.id;
  Service.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Service deleted successfully" });
  });
};
