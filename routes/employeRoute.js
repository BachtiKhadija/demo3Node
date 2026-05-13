const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeController');
router.post('/',controller.createEmploye);
router.get('/',controller.getAllEmployes);
router.get('/:id',controller.getEmployeById);
router.put('/:id',controller.updateEmploye);
router.delete('/:id', controller.deleteEmploye);

module.exports = router;