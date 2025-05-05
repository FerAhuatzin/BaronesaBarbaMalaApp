const express = require("express");
const router = express.Router();
const controller = require("../controllers/personsController");

// Rutas CRUD básicas
router.get("/", controller.getAllPersons);
router.get("/:id", controller.getPersonById);
router.post("/", controller.createPerson);
router.put("/:id", controller.updatePerson);
router.delete("/:id", controller.deletePerson);

// Rutas para búsquedas específicas
router.get("/search/email", controller.findByEmail);
router.get("/search/name", controller.findByName);
router.get("/check/email", controller.checkEmailExists);


module.exports = router;
