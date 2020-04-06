const conexao = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { login, senha } = request.body;
    
        const {id} =  await conexao('usuarios').insert({
            login,
            senha
        })
    
        return response.json({id,login});
    },

    async index(request, response){
        const data = await conexao('usuarios').select('*');
        return response.json({data});
    },

    async delete(request, response){
	const login = localStrorage.getItem('login');
	const loginTmp = request.body;
	const id = localStrorage.getItem('id'); 
	if(!(loginTmp === login)){
	    return response.json({event: "login incorreto!!!"});
	}

	try{
	    await conexao('usuarios')
		.where({'id': id, 'login': login })
		.delete()
		.first()
	    return response.status(200).json({status:true})	
	}catch(error){
	    return respose.json({status:false});
	}
    }
}
