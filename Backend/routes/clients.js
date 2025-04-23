const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");
const auth = require("../middleware/auth");

// Rutas públicas
router.post("/", controller.createClient);
router.post("/login", controller.login);
router.post("/refresh-token", controller.refreshToken);
router.post("/logout", controller.logout);

// Rutas protegidas
router.get("/", auth, controller.getAllClients);
router.get("/:id", auth, controller.getClientById);
router.put("/:id", auth, controller.updateClient);
router.delete("/:id", auth, controller.deleteClient);
router.post("/:id/add-points", auth, controller.addPoints);
router.post("/:id/remove-points", auth, controller.removePoints);


module.exports = router;
