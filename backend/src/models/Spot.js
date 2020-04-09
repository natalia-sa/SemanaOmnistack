// campos que o usuario vai ter

const mongoose = require('mongoose');

// campos do usuario, esquema do usuario
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
//guardando o id do usuario que criou o spot
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})
// exportando esse model
module.exports = mongoose.model('Spot', SpotSchema);