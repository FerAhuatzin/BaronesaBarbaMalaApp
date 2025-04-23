const Client = require("../models/clientsModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret";
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

exports.getAllClients = async (req, res) => {
  try {
    const data = await Client.getAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Client.getById(id);

    if (data.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    const newClient = req.body;

    const hashedPassword = await bcrypt.hash(newClient.Password, saltRounds);
    newClient.Password = hashedPassword;

    const result = await Client.create(newClient);
    
    // Generar tokens
    const { accessToken, refreshToken } = generateTokens(result.insertId);
    
    // Guardar refresh token en la base de datos
    await Client.saveRefreshToken(result.insertId, refreshToken);
    
    const { Password, ...clientWithoutPassword } = newClient;
    res
      .status(201)
      .json({ 
        id: result.insertId, 
        ...clientWithoutPassword, 
        accessToken, 
        refreshToken 
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedClient = req.body;

    if (updatedClient.Password) {
      updatedClient.Password = await bcrypt.hash(
        updatedClient.Password,
        saltRounds
      );
    }

    await Client.update(id, updatedClient);

    const { Password, ...clientWithoutPassword } = updatedClient;
    res.json({ id, ...clientWithoutPassword });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    await Client.delete(id);
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
    
    const clients = await Client.findByEmail(Email);
    
    if (clients.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    
    const client = clients[0];
    
    const isMatch = await bcrypt.compare(Password, client.Password);
    
    if (isMatch) {
      const { Password, ...clientWithoutPassword } = client;
      
      // Generar tokens
      const { accessToken, refreshToken } = generateTokens(client.idClient);
      
      // Guardar refresh token en la base de datos
      await Client.saveRefreshToken(client.idClient, refreshToken);
      
      res.json({
        message: "Inicio de sesión exitoso",
        user: clientWithoutPassword,
        accessToken,
        refreshToken
      });
    } else {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return res.status(401).json({ error: "Refresh token no proporcionado" });
    }
    
    // Verificar el refresh token
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    
    // Buscar el cliente por el ID decodificado
    const clientId = decoded.id;
    const clients = await Client.getById(clientId);
    
    if (clients.length === 0) {
      return res.status(401).json({ error: "Cliente no encontrado" });
    }
    
    // Verificar que el refresh token almacenado coincida con el proporcionado
    const client = clients[0];
    
    // Generar nuevos tokens
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(clientId);
    
    // Actualizar el refresh token en la base de datos
    await Client.saveRefreshToken(clientId, newRefreshToken);
    
    res.json({
      accessToken,
      refreshToken: newRefreshToken
    });
  } catch (error) {
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Refresh token inválido o expirado" });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token no proporcionado" });
    }
    
    try {
      // Verificar el refresh token para obtener el ID del cliente
      const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
      
      // Revocar el refresh token
      await Client.revokeRefreshToken(decoded.id);
    } catch (error) {
      // Ignorar errores de verificación - solo queremos asegurarnos de revocar el token si es válido
    }
    
    res.json({ message: "Sesión cerrada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPoints = async (req, res) => {
  try {
    const { id } = req.params;
    const { Emoney } = req.body;
    await Client.addPoints(id, Emoney);
    res.json({ message: `Se agregaron ${Emoney} puntos al cliente ${id}`});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removePoints = async (req, res) => {
  try {
    const { id } = req.params;
    const { Emoney } = req.body;
    await Client.removePoints(id, Emoney);
    res.json({ message: `Se restaron ${Emoney} puntos al cliente ${id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
=======
// Obtener los puntos de un cliente
exports.getEmoney = (req, res) => {
  Client.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Cliente no encontrado' });

    res.json({ Emoney: results[0].Emoney });
  });
};

// Restar puntos
exports.subtractPoints = (req, res) => {
  const id = req.params.id;
  const { points } = req.body;

  Client.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Cliente no encontrado' });

    const newBalance = results[0].Emoney - points;

    Client.update(id, { ...results[0], Emoney: newBalance }, (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Puntos restados', newBalance });
    });
  });
};

// Sumar puntos
exports.addPoints = (req, res) => {
  const id = req.params.id;
  const { points } = req.body;

  Client.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Cliente no encontrado' });

    const newBalance = results[0].Emoney + points;

    Client.update(id, { ...results[0], Emoney: newBalance }, (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Puntos añadidos', newBalance });
    });
  });
};
