const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const { login, senha } = request.body;
        const usuario = await conexao('usuarios')
            .where({
                'login':login,
                'senha':senha
            })
            .select('id','login')
            .first();

            if(!usuario){
                return response.status(400).json({error:"Login ou senha incorretos!!!"});
            }

            return response.json({usuario});
    }
}