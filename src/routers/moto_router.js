const express = require('express');
const moto_controller = require('../controllers/moto_controller.js');
const router = express.Router();

router.post('/', moto_controller);
router.get('/', moto_controller);
router.get('/:id', moto_controller);
router.put('/:id', moto_controller);
router.delete('/:id', moto_controller);

module.exports = router;