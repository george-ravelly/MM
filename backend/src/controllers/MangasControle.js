const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const id_usuario = request.headers.authorization;
        const {nome, autor, descricacao} = request.body;

        const id = await conexao('mangas').insert({
            nome,
            autor,
            descricacao,
            id_usuario
        });
        return response.json({id});
    },

    async index(request, response){
        const id_usuario = request.headers.authorization;
        const data = await conexao('mangas')
            .where('id_usuario',id_usuario)
            .select('*');
        return response.json(data);
    },

    async delete(request, response){
        const { id } = request.params;
        await conexao('mangas').where('id',id).delete();
        return response.json({error: "deu certo"});
    }
}