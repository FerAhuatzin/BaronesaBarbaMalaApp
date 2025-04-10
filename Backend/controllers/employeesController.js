const Employee = require("../models/employeesModel");

exports.getAllEmployees = (req, res) => {
  Employee.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};

exports.getEmployeeById = (req, res) => {
  const id = req.params.id;
  Employee.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.length === 0) return res.status(404).json({ message: "Employee not found" });
    res.json(data[0]);
  });
};

exports.createEmployee = (req, res) => {
  const newEmployee = req.body;
  Employee.create(newEmployee, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...newEmployee });
  });
};

exports.updateEmployee = (req, res) => {
  const id = req.params.id;
  const updatedEmployee = req.body;
  Employee.update(id, updatedEmployee, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...updatedEmployee });
  });
};

exports.deleteEmployee = (req, res) => {
  const id = req.params.id;
  Employee.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee deleted successfully" });
  });
};
