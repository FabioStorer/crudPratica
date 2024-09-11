const express = require('express');
const caneta_controller = require('../controllers/caneta_controller.js');
const router = express.Router();

router.post('/', caneta_controller);
router.index('/', caneta_controller);
router.show('/', caneta_controller);
router.put('/', caneta_controller);
router.delete('/', caneta_controller);

module.exports = router;