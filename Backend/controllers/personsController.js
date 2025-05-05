const Person = require("../models/personsModel");

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.getAll();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const id = req.params.id;
    const person = await Person.getById(id);

    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPerson = async (req, res) => {
  try {
    const { Name, Email, Phone } = req.body;

    // Validación básica
    if (!Name || !Email) {
      return res.status(400).json({ 
        error: "Nombre y email son campos obligatorios" 
      });
    }

    // Verificar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({ 
        error: "Formato de email inválido" 
      });
    }

    // Verificar si ya existe una persona con este email
    const existingPerson = await Person.findByEmail(Email);
    if (existingPerson) {
      return res.status(409).json({ 
        error: "Ya existe una persona con este email",
        person: existingPerson
      });
    }

    // Crear la persona
    const newPerson = await Person.create({ Name, Email, Phone });
    
    res.status(201).json({
      message: "Persona creada exitosamente",
      person: newPerson
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    const idPerson = req.params.id;
    const { Name, Email, Phone } = req.body;

    // Verificar que al menos un campo es proporcionado
    if (!Name && !Email && !Phone) {
      return res.status(400).json({ 
        error: "Debe proporcionar al menos un campo para actualizar" 
      });
    }

    // Verificar formato de email si se proporciona
    if (Email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Email)) {
        return res.status(400).json({ 
          error: "Formato de email inválido" 
        });
      }
    }

    // Verificar si existe la persona
    const existingPerson = await Person.getById(idPerson);
    if (!existingPerson) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    // Actualizar la persona
    const result = await Person.update(idPerson, { Name, Email, Phone });
    
    // Obtener los datos actualizados
    const updatedPerson = await Person.getById(idPerson);
    
    res.json({
      message: result.message,
      person: updatedPerson
    });
  } catch (error) {
    // Si hay un error de email duplicado
    if (error.message.includes("Ya existe otra persona con ese email")) {
      return res.status(409).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    const idPerson = req.params.id;
    
    // Verificar si existe la persona
    const existingPerson = await Person.getById(idPerson);
    if (!existingPerson) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    
    // Eliminar la persona
    const result = await Person.delete(idPerson);
    
    res.json({
      message: result.message
    });
  } catch (error) {
    // Si la persona es cliente, no se puede eliminar
    if (error.message.includes("No se puede eliminar una persona que es cliente")) {
      return res.status(400).json({ 
        error: error.message,
        suggestion: "Debe eliminar primero el registro de cliente asociado"
      });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.findByEmail = async (req, res) => {
  try {
    const { Email } = req.query;
    
    if (!Email) {
      return res.status(400).json({ error: "Debe proporcionar un email" });
    }
    
    const person = await Person.findByEmail(Email);
    
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findByName = async (req, res) => {
  try {
    const { Name } = req.query;
    
    if (!Name) {
      return res.status(400).json({ error: "Debe proporcionar un nombre" });
    }
    
    const persons = await Person.findByName(Name);
    
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkEmailExists = async (req, res) => {
  try {
    const { Email } = req.query;
    
    if (!Email) {
      return res.status(400).json({ error: "Debe proporcionar un email" });
    }
    
    const exists = await Person.existsByEmail(Email);
    
    res.json({ exists });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};