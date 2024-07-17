const { Router } = require('express');

const { rotasGeneros} = require('./rotasGeneros');
const { rotasLivros} = require('./rotasLivros');

const rotas = new Router();

rotas.use(rotasGeneros);
rotas.use(rotasLivros);

module.exports = rotas;