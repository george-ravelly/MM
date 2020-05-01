const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const {volume, id_manga} = request.body;

        //Cadastra um novo volume no BD
        await conexao('volume').insert({
            volume,
            id_manga
        });

        return response.json({error:"deu certo"});
    },

    async verVolumeExiste(request, response){
        const {volume, id_manga} = request.body;

        //Busca no BD um volume igual ao que "volume" esta querendo cadastrar.
        const tmpVolume = await conexao('volume')
            .where({
                'id_manga': id_manga,
                'volume': volume
            }).select('volume').first();

        //Testa se este "volume" já existe no BD
        if(!tmpVolume){
            return response.json({error: 'Vazio', result: true});
        }
        return response.json({error: 'Volume ja existe!!!', result: false});
       
    },

    async ultVol(request, response){
        const volume = await conexao('volume').select('id_manga');

        const id_manga = volume[volume.length-1].id_manga;
        
        const ultManga = await conexao('mangas')
            .where('id', id_manga)
            .select('*');
        return response.json({ultManga});
    },

    async index(request, response){
        const { id_manga } = request.body;
        const volumes = await conexao('volume').where('id_manga',id_manga).select('*');
        return response.json({volumes});
    }
}
