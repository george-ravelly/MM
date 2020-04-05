const conexao = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { login, senha } = request.body;
    
        await conexao('usuarios').insert({
            login,
            senha
        })
    
        return response.json();
    },

    async index(request, response){
        const data = await conexao('usuarios').select();
        return response.json({data});
    }
}