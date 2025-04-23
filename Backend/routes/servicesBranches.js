const express = require('express');
const router = express.Router();
const controller = require('../controllers/servicesBranchesController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/branch/:branchId', controller.getServicesByBranch);
module.exports = router;
