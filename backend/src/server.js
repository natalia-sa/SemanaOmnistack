// todas as importações necessarias


const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://natalia:novasenha2@omnistack-oq54w.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// GET, POST, PUT, DELETE

// req.query = acessar query params(para filtrar) na rota get

// req.params = acessar route params (para edição, delete)

// req.body = acessar corpo da requisição (criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);