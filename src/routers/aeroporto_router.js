const express = require('express');
const aeroporto_controller = require('../controllers/aeroporto_controller.js');
const router = express.Router();

router.post('/', aeroporto_controller);
router.index('/', aeroporto_controller);
router.show('/', aeroporto_controller);
router.put('/', aeroporto_controller);
router.delete('/', aeroporto_controller);

module.exports = router;