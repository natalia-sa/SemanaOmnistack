// index, show, store, update, destroy(metodos)

const User = require('../models/User');

module.exports = {
    // função assincrona 
    async store(req, res){
        //buscando o email dentro do body da requisição
        const { email} = req.body;

        let user = await User.findOne({email})
        // await: so deixa proseeguir pra proxima linha quando a instrução seguinte finalizar. Para usalo dizemos que a função é async
        if(!user){
            user =  await User.create({ email})
        }
        return res.json(user);
    }
};