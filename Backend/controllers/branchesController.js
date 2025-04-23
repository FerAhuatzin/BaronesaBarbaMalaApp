const Branch = require("../models/branchesModel");

exports.getAllBranches = (req, res) => {
  Branch.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getBranchById = (req, res) => {
  const id = req.params.id;
  Branch.getById(id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(data[0]);
  });
};

exports.createBranch = (req, res) => {
  const newBranch = req.body;
  Branch.create(newBranch, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...newBranch });
  });
};

exports.updateBranch = (req, res) => {
  const id = req.params.id;
  const updatedBranch = req.body;
  Branch.update(id, updatedBranch, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ id, ...updatedBranch });
  });
};

exports.deleteBranch = (req, res) => {
  const id = req.params.id;
  Branch.delete(id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Branch deleted" });
  });
};

exports.getBranchesByBrandName = async (req, res) => {
  try {
    const brandName = req.params.brandName;
    const data = await Branch.getByBrandName(brandName);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
