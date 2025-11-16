const express = require('express');
const router = express.Router();
const findingController = require('../controllers/findingController');

router.get('/', findingController.getAll);
router.get('/:id', findingController.getById);
router.post('/', findingController.create);
router.put('/:id', findingController.update);
router.delete('/:id', findingController.delete);

module.exports = router;
