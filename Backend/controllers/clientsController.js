const Client = require("../models/clientsModel");

exports.getAllClients = (req, res) => {
  Client.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};

exports.getClientById = (req, res) => {
  const id = req.params.id;
  Client.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.length === 0) return res.status(404).json({ message: "Client not found" });
    res.json(data[0]);
  });
};

exports.createClient = (req, res) => {
  const newClient = req.body;
  Client.create(newClient, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...newClient });
  });
};

exports.updateClient = (req, res) => {
  const id = req.params.id;
  const updatedClient = req.body;
  Client.update(id, updatedClient, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...updatedClient });
  });
};

exports.deleteClient = (req, res) => {
  const id = req.params.id;
  Client.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Client deleted successfully" });
  });
};
