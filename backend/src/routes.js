const express = require('express');
const routes = express.Router();

const usuario = require('./controllers/UsuarioControle');
const mangas = require('./controllers/MangasControle');
const volume = require('./controllers/VolumeControle');
const Sessao = require('./controllers/SessaoControle')


routes.post('/sessao', Sessao.create);
routes.post('/usuarios', usuario.create);
routes.get('/usuarios', usuario.index);
routes.delete('/usuarios', usuario.delete);

routes.get('/mangas', mangas.index);
routes.post('/mangas', mangas.create);
routes.delete('/mangas/:id', mangas.delete);

routes.get('/volumes', volume.index);
routes.post('/volumes', volume.create);

module.exports = routes;
