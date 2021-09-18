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



server.get('/show/:id', (req, res, next) => {
    
  const { id } = req.params;
    var isso =  knex('rest')
              .where('testeid', id)
              .first()
              .then((dados) => {
                  if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                  res.send(dados);
                  console.log("DADOS: "+ JSON.stringify(dados));
                  return dados;
              }, next)
    

   
   
  // isso.then(total => {
  //   console.log('isso');
  //   console.log(total)
  // })
});

// isso.then(function(result) {
//    console.log("result"+result) // "Some User token"
// })



// void async function(){
//       var total = await isso();
//       console.log(total);
// }

server.put('/update/:id', (req, res, next) => {
    
    const { id } = req.params;

    knex('rest')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados atualizados');
        }, next)
        
});
 
server.del('/delete/:id', (req, res, next) => {
    
    const { id } = req.params;

    knex('rest')
        .where('id', id)
        .delete()
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados excluidos');
        }, next)
        
});


