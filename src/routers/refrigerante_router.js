const express = require('express');
const refrigerante_controller = require('../controllers/refrigerante_controller.js');
const router = express.Router();

router.post('/', refrigerante_controller);
router.get('/', refrigerante_controller);
router.get('/:id', refrigerante_controller);
router.put('/:id', refrigerante_controller);
router.delete('/:id', refrigerante_controller);

module.exports = router;