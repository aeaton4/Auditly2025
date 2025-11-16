const express = require('express');
const router = express.Router();
const riskController = require('../controllers/riskController');

router.get('/', riskController.getAll);
router.get('/:id', riskController.getById);
router.post('/', riskController.create);
router.put('/:id', riskController.update);
router.delete('/:id', riskController.delete);

module.exports = router;
