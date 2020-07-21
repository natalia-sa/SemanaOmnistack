// GET, POST, PUT, DELETE
// req.query = acessar query params(para filtrar) na rota get
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (criação, edição)

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

// cria a aplicação com a função express
const app = express();
const server = http.Server(app);
// para o server ouvir o protocolo webSocket
// precisamos da variavel io para anotar os usuarios da aplicação
// const io = socketio(server);

// const connectedUsers = {};

// io.on('connection', socket => {
    
//     // a mensagem se chama hello e seu conteudo é world
//     const { user_id } = socket.handshake.query;
//     // relacionando o id do usuario a seu id de conexao
//     connectedUsers[user_id] = socket.id;
// });
// adicionar uma funcionalidade em toda rota
// app.use((req, res, next) => {
//     req.io = io;
//     req.connectedUsers = connectedUsers;

//     return next();
// })

// mongoose.connect('mongodb+srv://natalia:novasenha2@omnistack-oq54w.mongodb.net/semana09?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

app.use(cors());

// sinalizando para o express que sera utilizado o formato json
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));

// usando as rotas importadas
app.use(routes);
console.log("server running at port 3000");
server.listen(process.env.PORT || 3000);