const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");

router.get("/", controller.getAllClients);
router.get("/:id", controller.getClientById);
router.post("/", controller.createClient);
router.put("/:id", controller.updateClient);
router.delete("/:id", controller.deleteClient);
router.get('/:id/emoney', controller.getEmoney);
router.patch('/:id/emoney/add', controller.addPoints);
router.patch('/:id/emoney/subtract', controller.subtractPoints);
module.exports = router;
