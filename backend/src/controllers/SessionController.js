// index, show, store, update, destroy(metodos)

// index = retorna listagem de sessoes

//show = listar uma unica sessao

//store = criar uma sessao

//update = criar uma sessao

// destroy = deletar uma sessao
const User = require('../models/User');

module.exports = {
    // função assincrona 
    async store(req, res){
        //buscando o email dentro do body da requisição
        const { email} = req.body;

        let user = await User.findOne({email})
        // await so deixa proseeguir pra proxima linha quando a instrução seguinte finalizar. Para usalo dizemos que a função é async
        if(!user){
            //criando um usuario
            user =  await User.create({ email})
        }
        return res.json(user);
    }
};