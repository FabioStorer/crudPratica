const express = require('express');
const aeroporto_controller = require('../controllers/aeroporto_controller.js');
const router = express.Router();

router.post('/', aeroporto_controller);
router.get('/', aeroporto_controller);
router.get('/:id', aeroporto_controller);
router.put('/:id', aeroporto_controller);
router.delete('/:id', aeroporto_controller);

module.exports = router;