const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Configuración de la base de datos
const db = require('./config/database');

// Importar rutas
const appointmentsRoutes = require('./routes/appointments');
const branchesRoutes = require('./routes/branches');
const clientsRoutes = require('./routes/clients');
const employeesRoutes = require('./routes/employees');
const servicesRoutes = require('./routes/services');
const branchesEmployeesRoutes = require('./routes/branchesEmployees');
const servicesBranchesRoutes = require('./routes/servicesBranches');

// Usar rutas
app.use('/appointments', appointmentsRoutes);
app.use('/branches', branchesRoutes);
app.use('/clients', clientsRoutes);
app.use('/employees', employeesRoutes);
app.use('/services', servicesRoutes);
app.use('/branches-employees', branchesEmployeesRoutes);
app.use('/services-branches', servicesBranchesRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
