const express = require("express");
const router = express.Router();
const controller = require("../controllers/branchesController");

router.get("/", controller.getAllBranches);
router.get("/:id", controller.getBranchById);
router.post("/", controller.createBranch);
router.put("/:id", controller.updateBranch);
router.delete("/:id", controller.deleteBranch);
router.get("/brand-name/:brandName", controller.getBranchesByBrandName);

module.exports = router;
