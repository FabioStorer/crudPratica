const express = require('express');
const caneta_controller = require('../controllers/caneta_controller.js');
const router = express.Router();

router.post('/', caneta_controller);
router.get('/', caneta_controller);
router.get('/:id', caneta_controller);
router.put('/:id', caneta_controller);
router.delete('/:id', caneta_controller);

module.exports = router;