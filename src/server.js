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
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();
// para o server ouvir o protocolo webSocket
// precisamos da variavel io para anotar os usuarios da aplicação
const io = socketio(server);

const connectedUsers = {};

io.on('connection', socket => {
    
    // a mensagem se chama hello e seu conteudo é world
    const { user_id } = socket.handshake.query;
    // relacionando o id do usuario a seu id de conexao
    connectedUsers[user_id] = socket.id;
});
// adicionar uma funcionalidade em toda rota
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

mongoose.connect('mongodb+srv://natalia:novasenha2@omnistack-oq54w.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



// sinalizando para o express que sera utilizado o formato json
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));

// usando as rotas importadas
app.get('/', function(req, res) {
    res.send('Server running');
  });
app.use(routes);
server.listen(process.env.PORT || 3000);