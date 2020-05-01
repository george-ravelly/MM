const express = require('express');
const routes = express.Router();

const usuario = require('./controllers/UsuarioControle');
const mangas = require('./controllers/MangasControle');
const volume = require('./controllers/VolumeControle');
const Sessao = require('./controllers/SessaoControle');


routes.post('/sessao', Sessao.create);
routes.post('/usuarios', usuario.create);
routes.get('/usuarios', usuario.index);
routes.delete('/usuarios', usuario.delete);

routes.get('/mangas', mangas.index);
routes.get('/detalhes/:id_manga', mangas.detalhes);
routes.post('/mangas', mangas.create);
routes.delete('/mangas/:id_manga', mangas.delete);

routes.get('/volumes', volume.index);
routes.get('/ultimoVol', volume.ultVol);
routes.post('/volumes', volume.create);
routes.get('/verVolumeExiste', volume.verVolumeExiste);

module.exports = routes;
