const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const {volume, id_manga} = request.body;

        await conexao('volume').insert({
            volume,
            id_manga
        });
        return response.json();
    },

    async index(request, response){
        const volumes = await conexao('volumes').where('id_manga',id_manga).select('*');
        return response.json({volumes});
    }
}