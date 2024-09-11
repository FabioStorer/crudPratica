const express = require('express');
const refrigerante_controller = require('../controllers/refrigerante_controller.js');
const router = express.Router();

router.post('/', refrigerante_controller);
router.index('/', refrigerante_controller);
router.show('/', refrigerante_controller);
router.put('/', refrigerante_controller);
router.delete('/', refrigerante_controller);

module.exports = router;