const restify = require('restify');

//PARA Os erros
const errs = require('restify-errors');


const server = restify.createServer({
  name: 'Gupy',
  version: '1.0.0'
});


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    //port : 3306,
    user : 'root',
    password : '',
    database : 'gupy'
  }
}); 
//PARA ACESSO AO BANCO DE DADOS


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});


server.get('/', function (req, res, next) {

  knex('rest').then((dados)=>{//ENVIAR DADOS
    res.send(dados);
  },next);

});

server.post('/create', function (req, res, next) {

  knex('rest')
    .insert(req.body)
    .then((dados)=>{//ENVIAR DADOS
      res.send(dados);
    },next);
  
});

server.get('/show/:id', function (req, res, next) {
  const { id } = req.param;

  knex('rest')
   .where('id',id)
   .first()
   .then((dados)=>{
      if(!dados) return res.send(new errs.BadRequestError('Nada foi encontrado')) 
      res.send(dados);
    },next);
});


server.put('/update/:id', function (req, res, next) {
  const { id } = req.param;

  knex('rest')
   .where('id',id)
   .update(req.body)
   .then((dados)=>{
    if(!dados) return res.send(new errs.BadRequestError('Nada foi encontrado')) 
    res.send('dados atualizados');
  },next);
});



server.put('/delete/:id', function (req, res, next) {
  const {id}= req.param;

  knex('rest')
   .where('id',id)
   .delete()
   .then((dados)=>{
    if(!dados) return res.send(new errs.BadRequestError('Nada foi encontrado')) 
    res.send('dados deletados');
  },next);
});
