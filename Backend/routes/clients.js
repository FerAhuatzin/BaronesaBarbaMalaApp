const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");

router.get("/", controller.getAllClients);
router.get("/:id", controller.getClientById);
router.post("/", controller.createClient);
router.put("/:id", controller.updateClient);
router.delete("/:id", controller.deleteClient);

module.exports = router;
