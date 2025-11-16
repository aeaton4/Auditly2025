const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');

router.get('/', auditController.getAll);
router.get('/:id', auditController.getById);
router.post('/', auditController.create);
router.put('/:id', auditController.update);
router.delete('/:id', auditController.delete);

module.exports = router;
