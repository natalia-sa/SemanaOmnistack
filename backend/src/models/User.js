// campos que o usuario vai ter

const mongoose = require('mongoose');

// campos do usuario, esquema do usuario
const UserSchema = new mongoose.Schema({
    email: String,

})
// exportando esse model
module.exports = mongoose.model('User', UserSchema);