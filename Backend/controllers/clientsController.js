const Client = require("../models/clientsModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refresh_secret";
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";

// Función para generar tokens
const generateTokens = (userId) => {
  const accessToken = jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  
  const refreshToken = jwt.sign({ id: userId }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
  
  return { accessToken, refreshToken };
};

exports.refreshToken = async (req, res) => {
  try {
    const { RefreshToken } = req.body;
    
    if (!RefreshToken) {
      return res.status(401).json({ error: "Refresh token no proporcionado" });
    }
    
    // Verificar el refresh token
    let decoded;
    try {
      decoded = jwt.verify(RefreshToken, REFRESH_TOKEN_SECRET);
    } catch (err) {
      return res.status(401).json({ error: "Refresh token inválido o expirado" });
    }
    
    // Buscar el cliente por el token de refresco
    const client = await Client.findByRefreshToken(RefreshToken);
    
    if (!client) {
      return res.status(401).json({ error: "Token no encontrado o revocado" });
    }
    
    // Generar nuevos tokens
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(client.idPerson);
    
    // Actualizar el refresh token en la base de datos
    await Client.update(client.idPerson, { RefreshToken: newRefreshToken });
    
    res.json({
      accessToken,
      refreshToken: newRefreshToken
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.getAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.getById(id);

    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    // Separamos los datos de persona y cliente
    const { Name, Email, Phone, Password, Emoney = 0 } = req.body;

    // Datos de persona
    const personData = { Name, Email, Phone };

    // Datos de cliente (con contraseña hasheada)
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const clientData = {
      Password: hashedPassword,
      Emoney,
    };

    // Crear el cliente (primero crea/actualiza la persona y luego el cliente)
    const result = await Client.create(personData, clientData);

    // Generar tokens
    const { accessToken, refreshToken } = generateTokens(result.idPerson);

    // Guardar refresh token en la base de datos
    await Client.update(result.idPerson, { RefreshToken: refreshToken });

    // Respuesta sin incluir la contraseña
    res.status(201).json({
      idPerson: result.idPerson,
      ...personData,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const idPerson = req.params.id;

    // Separamos los datos de persona y cliente
    const { Name, Email, Phone, Password, Emoney } = req.body;

    // Datos de persona para actualizar
    const personData = {};
    if (Name) personData.Name = Name;
    if (Email) personData.Email = Email;
    if (Phone) personData.Phone = Phone;

    // Datos de cliente para actualizar
    const clientData = {};
    if (Password) {
      clientData.Password = await bcrypt.hash(Password, saltRounds);
    }
    if (Emoney !== undefined) {
      clientData.Emoney = Emoney;
    }

    // Verificar si existe el cliente
    const existingClient = await Client.getById(idPerson);
    if (!existingClient) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Actualizar el cliente
    await Client.update(idPerson, clientData, personData);

    // Obtener el cliente actualizado
    const updatedClient = await Client.getById(idPerson);

    // Eliminamos datos sensibles antes de enviar la respuesta
    const { Password: _, RefreshToken: __, ...safeClientData } = updatedClient;

    res.json(safeClientData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const idPerson = req.params.id;

    // Verificar si existe el cliente
    const existingClient = await Client.getById(idPerson);
    if (!existingClient) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Eliminar cliente (manteniendo la persona)
    await Client.delete(idPerson);
    res.json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ error: "Email y contraseña son requeridos" });
    }
    
    const client = await Client.findByEmail(Email);
    
    if (!client) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    
    const isMatch = await bcrypt.compare(Password, client.Password);
    
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña inválida" });
    }
    
    // Generar tokens
    const { accessToken, refreshToken } = generateTokens(client.idPerson);
    
    // Guardar refresh token en la base de datos
    await Client.update(client.idPerson, { RefreshToken: refreshToken });
    
    // Eliminar datos sensibles
    const { Password: _, RefreshToken: __, ...safeClientData } = client;
    
    res.json({
      message: "Inicio de sesión exitoso",
      user: safeClientData,
      accessToken,
      refreshToken
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const refreshToken = req.headers.authorization;
    
    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token no proporcionado" });
    }
    
    // Buscar el cliente por el token
    const client = await Client.findByRefreshToken(refreshToken);
    
    if (client) {
      // Revocar el refresh token
      await Client.revokeRefreshToken(client.idPerson);
    }
    
    res.json({ message: "Sesión cerrada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmoney = async (req, res) => {
  try {
    const idPerson = req.params.id;
    const client = await Client.getById(idPerson);
    
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    
    res.json({ Emoney: client.Emoney || 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPoints = async (req, res) => {
  try {
    const idPerson = req.params.id;
    const { Emoney } = req.body;
    
    if (!Emoney || isNaN(Emoney) || Emoney <= 0) {
      return res.status(400).json({ error: "Cantidad de puntos inválida" });
    }
    
    // Verificar si existe el cliente
    const existingClient = await Client.getById(idPerson);
    if (!existingClient) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    
    await Client.addPoints(idPerson, Emoney);
    
    // Obtener el saldo actualizado
    const updatedClient = await Client.getById(idPerson);
    
    res.json({ 
      message: `Se agregaron ${Emoney} puntos al cliente`, 
      newBalance: updatedClient.Emoney 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removePoints = async (req, res) => {
  try {
    const idPerson = req.params.id;
    const { Emoney } = req.body;
    
    if (!Emoney || isNaN(Emoney) || Emoney <= 0) {
      return res.status(400).json({ error: "Cantidad de puntos inválida" });
    }
    
    // Verificar si existe el cliente
    const existingClient = await Client.getById(idPerson);
    if (!existingClient) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    
    // Verificar si tiene suficientes puntos
    if (existingClient.Emoney < Emoney) {
      return res.status(400).json({ 
        error: "Saldo insuficiente", 
        currentBalance: existingClient.Emoney 
      });
    }
    
    await Client.removePoints(idPerson, Emoney);
    
    // Obtener el saldo actualizado
    const updatedClient = await Client.getById(idPerson);
    
    res.json({ 
      message: `Se restaron ${Emoney} puntos al cliente`, 
      newBalance: updatedClient.Emoney 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


