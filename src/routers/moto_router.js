const express = require('express');
const moto_controller = require('../controllers/moto_controller.js');
const router = express.Router();

router.post('/', moto_controller);
router.index('/', moto_controller);
router.show('/', moto_controller);
router.put('/', moto_controller);
router.delete('/', moto_controller);

module.exports = router;