const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/employeController');
router.post('/',auth,controller.createEmploye);
router.get('/',controller.getAllEmployes);
router.get('/:id',controller.getEmployeById);
router.put('/:id',auth,controller.updateEmploye);
router.delete('/:id',auth, controller.deleteEmploye);

module.exports = router;