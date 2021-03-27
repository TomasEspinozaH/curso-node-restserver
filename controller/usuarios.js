const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = 'No name', apikey } = req.query;

  res.json({
    msg: 'get API - Controller',
    q,
    nombre,
    apikey
  });
};

const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    msg: 'put API - Controller',
    id
  });
};

const usuariosPost = (req, res) => {
  const body = req.body;

  res.json({
    msg: 'post API - Controller',
    body
  });
};

const usuarioDelete = (req, res) => {
  res.json({
    msg: 'delete API - Controller'
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuarioDelete
};
