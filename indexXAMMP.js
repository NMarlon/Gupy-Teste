

//Ler o JSON
const express = require("express");

//Swagger OpenAPI sendo importado
const   swaggerUi =  require("swagger-ui-express");

//SwagerDocs para abrir o arquivo de Swagger
const  swaggerDocs  = require("./swagger.json");

//abrindo e configurando o app 
const app = express();
app.use(express.json());

//configurando o Swagger no diretório: /api-docs
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));
 

  
//colocando o restify para comunicação com a DB
const restify = require('restify');
 
//Para o restify mostrar os erros quando houverem
const errs = require('restify-errors');

//Criando servidor-virtual restify para comunicação
const server = restify.createServer({
  name: 'Gupy',
  version: '1.0.0' 
});

//Knex para authenticação com a DB e acessar os dados da Database (DB)
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
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
 
//Configurando a porta
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

//Aqui se vem permite abrir a localhost:8080/ (MOSTRA OS DADOS DA DB)
server.get('/', function (req, res, next) {

  knex('rest').then((dados)=>{//ENVIAR DADOS
    res.send(dados);
  },next);

}); 


//Adicionar Dados À DataBase no MySQL
server.post('/create', function (req, res, next) {

  knex('rest')
    .insert(req.body)
    .then((dados)=>{//ENVIAR DADOS
      res.send(dados);
    },next);
  
});


//Buscar dado pela ID
server.get('/show/:id', (req, res, next) => {
    
  const { id } = req.params;
   knex('rest')
    .where('testeid', id)
    .first()
    .then((dados) => {
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
        res.send(dados);
        console.log("DADOS: "+ JSON.stringify(dados));
        return dados;
    }, next)


});

//Atualizar algum dado
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
 
 //Deletar algum dado
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



//Aqui algumas configurações 
/*

swagger.json   OLD

{
  "openapi": "3.0.0",
  "info": {
      "title": "Funcionarios Gupy",
      "description": "Aqui você poderá gerenciar o cadastro dos funcionários Gupy",
      "version": "1.0",
      "contact":{
        "email":"marlonrviana@gmail.com"
      },
      "version":"1.0.0"
  },


  "servers":""
}