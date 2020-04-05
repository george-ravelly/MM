const express = require('express');
const routes = express.Router();

const usuario = require('./controllers/UsuarioControle');
const manga = require('./controllers/MangasControle');
const volume = require('./controllers/VolumeControle');


routes.get('/login', usuario.index);
routes.post('/login', usuario.create);

routes.get('/mangas', manga.index);
routes.post('/mangas', manga.create);
routes.delete('/mangas/:id', manga.delete);

routes.get('/volume', volume.index);
routes.post('/volume', volume.create);

module.exports = routes;