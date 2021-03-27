const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuarioDelete } = require('../controller/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/id', usuarioDelete);

module.exports = router;
