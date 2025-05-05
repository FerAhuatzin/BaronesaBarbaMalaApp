// Cargar variables de entorno
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para CORS
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Middleware para registrar solicitudes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Configuración de la base de datos
require('./config/database');

// Importar rutas
const appointmentsRoutes = require('./routes/appointments');
const branchesRoutes = require('./routes/branches');
const personsRoutes = require('./routes/persons');
const clientsRoutes = require('./routes/clients');
const employeesRoutes = require('./routes/employees');
const servicesRoutes = require('./routes/services');
const servicesBranchesRoutes = require('./routes/servicesBranches');

// Usar rutas
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/branches', branchesRoutes);
app.use('/api/persons', personsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/services-branches', servicesBranchesRoutes);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: "Error interno del servidor",
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
