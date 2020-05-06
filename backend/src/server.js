// GET, POST, PUT, DELETE
// req.query = acessar query params(para filtrar) na rota get
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (criação, edição)

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

// cria a aplicação com a função express
const app = express();

mongoose.connect('mongodb+srv://natalia:novasenha2@omnistack-oq54w.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());

// sinalizadno para o express que sera utilizado o formato json
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));

// usando as rotas importadas
app.use(routes);

app.listen(3333);