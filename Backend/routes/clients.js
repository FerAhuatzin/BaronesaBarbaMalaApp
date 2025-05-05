const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");
const auth = require("../middleware/auth");

// Rutas públicas
router.post("/", controller.createClient);
router.post("/login", controller.login);
router.post("/refresh-token", controller.refreshToken);

// Rutas protegidas
router.get("/", auth, controller.getAllClients);
router.get("/:id", auth, controller.getClientById);
router.put("/:id", auth, controller.updateClient);
router.delete("/:id", auth, controller.deleteClient);
router.post("/logout", controller.logout);
router.get("/:id/emoney", auth, controller.getEmoney)
router.patch("/:id/emoney/add", auth, controller.addPoints);
router.patch("/:id/emoney/remove", auth, controller.removePoints);



module.exports = router;
