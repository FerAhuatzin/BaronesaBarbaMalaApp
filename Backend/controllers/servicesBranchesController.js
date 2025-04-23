const ServicesBranches = require('../models/servicesBranchesModel');

exports.getAll = (req, res) => {
  ServicesBranches.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  ServicesBranches.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Relación no encontrada' });
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  ServicesBranches.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.update = (req, res) => {
  ServicesBranches.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Relación actualizada' });
  });
};

exports.delete = (req, res) => {
  ServicesBranches.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Relación eliminada' });
  });
};


exports.getServicesByBranch = async (req, res) => {
  try {
    const branchId = req.params.branchId;
    const data = await ServicesBranches.getServicesByBranch(branchId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
