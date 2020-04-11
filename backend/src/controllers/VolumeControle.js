const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const {volume, id_manga} = request.body;

        await conexao('volume').insert({
            volume,
            id_manga
        });
        return response.json({error:"deu certo"});
    },
    async ultVol(request, response){
        const volume = await conexao('volume').max('id');
        const ultManga = await conexao('mangas').where(volume.id_manga = 'id').select('*');
        return response.json(ultManga);
    },

    async index(request, response){
        const { id_manga } = request.body;
        const volumes = await conexao('volume').where('id_manga',id_manga).select('*');
        return response.json({volumes});
    }
}
