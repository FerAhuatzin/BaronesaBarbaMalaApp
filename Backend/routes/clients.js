const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");
const auth = require("../middleware/auth");

// Rutas públicas
router.post("/", controller.createClient);

router.put("/:id", controller.updateClient);
router.delete("/:id", controller.deleteClient);
router.get('/:id/emoney', controller.getEmoney);
router.patch('/:id/emoney/add', controller.addPoints);
router.patch('/:id/emoney/subtract', controller.subtractPoints);
router.post("/login", controller.login);
router.post("/refresh-token", controller.refreshToken);
router.post("/logout", controller.logout);

// Rutas protegidas
router.get("/", auth, controller.getAllClients);
router.get("/:id", auth, controller.getClientById);
router.put("/:id", auth, controller.updateClient);
router.delete("/:id", auth, controller.deleteClient);
module.exports = router;
