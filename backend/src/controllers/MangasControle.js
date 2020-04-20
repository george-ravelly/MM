const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const id_usuario = request.headers.authorization;
        const {nome, autor, descricao} = request.body;

        const id = await conexao('mangas').insert({
            nome,
            autor,
            descricao,
            id_usuario
        });
        return response.json({id});
    },

    async detalhes(request, response){
        const {id_manga} = request.params;
        const manga = await conexao('mangas').where('id',id_manga).select('*').first();
        const volumes = await conexao('volume').where('id_manga',id_manga).select('*');
        return response.json({manga, volumes});
    },

    async index(request, response){
        const { pages = 1 } = request.query;
        const id_usuario = request.headers.authorization;

        const [count] = await conexao('mangas')
            .where('id_usuario',id_usuario).count();

        const mangas = await conexao('mangas')
            .limit(4)
            .offset((pages-1)*4)
            .where('id_usuario',id_usuario).select('*');

        response.header('x-total-cout', count['count(*)']); 
        return response.json({mangas, 'total': count['count(*)']});
    },

    async delete(request, response){
        const { id } = request.params;
        await conexao('mangas').where('id',id).delete();
        return response.json({error: "deu certo"});
    }
}
