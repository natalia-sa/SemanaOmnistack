const Spot = require('../models/Spot');

module.exports = {
// listagem dos spots do usuario logado
    async show(req, res){
// buscando id do usuario logado
        const {user_id} = req.headers;

        const spots = await Spot.find({ user: user_id});

        return res.json(spots);
    }
}