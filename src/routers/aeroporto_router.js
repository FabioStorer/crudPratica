const express = require('express');
const aeroporto_controller = require('../controllers/aeroporto_controller.js');
const cep_endereco = require('../middlewares/cep_endereco.js');
const router = express.Router();

router.post('/', cep_endereco, aeroporto_controller);
router.get('/', aeroporto_controller);
router.get('/:id', aeroporto_controller);
router.put('/:id', cep_endereco, aeroporto_controller);
router.delete('/:id', aeroporto_controller);

module.exports = router;