//Bibliotecas:

//express: Leitura de arquivos
const express = require('express');

//randomID para buscar um ID aleatório
const randomId = require('random-id');

//criando o app que vai ser suporte para o servidor virtual
const app = express(),
      bodyParser = require("body-parser"),
      fs = require('fs'),
      port = 8080;

//Swagger OpenAPI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//Poder customizar a CSS
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

//Request para puxar dados da MOCKApi
var request = require('request');


//====================================================
// PARTE Para VOCÊ escolher se vai puxar os dados à partir da MOCKApi online...
// ... ou se vai usar uma data base predefinida (DadosDeExemplo)
//

//ESCOLHA AQUI (true/false), 
//true: para a versão ONLINE do MOCKAPI
//false: para a database pré gerada nesse mesmo MockApi 
if(true){

  var data = request('https://614225344d16670017ba2c39.mockapi.io/api/teste/TipoDeProfissional', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var importedJSON = JSON.parse(body);
      var data = importedJSON;
    }
  });
}else{
  var DadosDeExemplo=[{"situacao":true,"UpdatedAt":1631726074,"createdAt":1631726074,"descricao":"descricao 1","id":"1"},{"situacao":true,"UpdatedAt":1631726014,"createdAt":1631726014,"descricao":"descricao 2","id":"2"},{"situacao":true,"UpdatedAt":1631725954,"createdAt":1631725954,"descricao":"descricao 3","id":"3"},{"situacao":false,"UpdatedAt":1631725894,"createdAt":1631725894,"descricao":"descricao 4","id":"4"},{"situacao":false,"UpdatedAt":1631725834,"createdAt":1631725834,"descricao":"descricao 5","id":"5"},{"situacao":false,"UpdatedAt":1631725774,"createdAt":1631725774,"descricao":"descricao 6","id":"6"},{"situacao":true,"UpdatedAt":1631725714,"createdAt":1631725714,"descricao":"descricao 7","id":"7"},{"situacao":false,"UpdatedAt":1631725654,"createdAt":1631725654,"descricao":"descricao 8","id":"8"},{"situacao":true,"UpdatedAt":1631725594,"createdAt":1631725594,"descricao":"descricao 9","id":"9"},{"situacao":false,"UpdatedAt":1631725534,"createdAt":1631725534,"descricao":"descricao 10","id":"10"},{"situacao":false,"UpdatedAt":1631725474,"createdAt":1631725474,"descricao":"descricao 11","id":"11"},{"situacao":false,"UpdatedAt":1631725414,"createdAt":1631725414,"descricao":"descricao 12","id":"12"},{"situacao":false,"UpdatedAt":1631725354,"createdAt":1631725354,"descricao":"descricao 13","id":"13"},{"situacao":false,"UpdatedAt":1631725294,"createdAt":1631725294,"descricao":"descricao 14","id":"14"},{"situacao":true,"UpdatedAt":1631725234,"createdAt":1631725234,"descricao":"descricao 15","id":"15"},{"situacao":false,"UpdatedAt":1631725174,"createdAt":1631725174,"descricao":"descricao 16","id":"16"},{"situacao":false,"UpdatedAt":1631725114,"createdAt":1631725114,"descricao":"descricao 17","id":"17"},{"situacao":false,"UpdatedAt":1631725054,"createdAt":1631725054,"descricao":"descricao 18","id":"18"},{"situacao":false,"UpdatedAt":1631724994,"createdAt":1631724994,"descricao":"descricao 19","id":"19"},{"situacao":false,"UpdatedAt":1631724934,"createdAt":1631724934,"descricao":"descricao 20","id":"20"},{"situacao":false,"UpdatedAt":1631724874,"createdAt":1631724874,"descricao":"descricao 21","id":"21"},{"situacao":false,"UpdatedAt":1631724814,"createdAt":1631724814,"descricao":"descricao 22","id":"22"},{"situacao":false,"UpdatedAt":1631724754,"createdAt":1631724754,"descricao":"descricao 23","id":"23"},{"situacao":false,"UpdatedAt":1631724694,"createdAt":1631724694,"descricao":"descricao 24","id":"24"},{"situacao":false,"UpdatedAt":1631724634,"createdAt":1631724634,"descricao":"descricao 25","id":"25"},{"situacao":false,"UpdatedAt":1631724574,"createdAt":1631724574,"descricao":"descricao 26","id":"26"},{"situacao":false,"UpdatedAt":1631724514,"createdAt":1631724514,"descricao":"descricao 27","id":"27"},{"situacao":false,"UpdatedAt":1631724454,"createdAt":1631724454,"descricao":"descricao 28","id":"28"},{"situacao":false,"UpdatedAt":1631724394,"createdAt":1631724394,"descricao":"descricao 29","id":"29"},{"situacao":false,"UpdatedAt":1631724334,"createdAt":1631724334,"descricao":"descricao 30","id":"30"},{"situacao":false,"UpdatedAt":1631724274,"createdAt":1631724274,"descricao":"descricao 31","id":"31"},{"situacao":false,"UpdatedAt":1631724214,"createdAt":1631724214,"descricao":"descricao 32","id":"32"},{"situacao":false,"UpdatedAt":1631724154,"createdAt":1631724154,"descricao":"descricao 33","id":"33"},{"situacao":false,"UpdatedAt":1631724094,"createdAt":1631724094,"descricao":"descricao 34","id":"34"},{"situacao":true,"UpdatedAt":1631724034,"createdAt":1631724034,"descricao":"descricao 35","id":"35"},{"situacao":false,"UpdatedAt":1631723974,"createdAt":1631723974,"descricao":"descricao 36","id":"36"},{"situacao":false,"UpdatedAt":1631723914,"createdAt":1631723914,"descricao":"descricao 37","id":"37"},{"situacao":false,"UpdatedAt":1631723854,"createdAt":1631723854,"descricao":"descricao 38","id":"38"},{"situacao":false,"UpdatedAt":1631723794,"createdAt":1631723794,"descricao":"descricao 39","id":"39"},{"situacao":false,"UpdatedAt":1631723734,"createdAt":1631723734,"descricao":"descricao 40","id":"40"},{"situacao":false,"UpdatedAt":1631723674,"createdAt":1631723674,"descricao":"descricao 41","id":"41"},{"situacao":false,"UpdatedAt":1631723614,"createdAt":1631723614,"descricao":"descricao 42","id":"42"},{"situacao":false,"UpdatedAt":1631723554,"createdAt":1631723554,"descricao":"descricao 43","id":"43"},{"situacao":false,"UpdatedAt":1631723494,"createdAt":1631723494,"descricao":"descricao 44","id":"44"},{"situacao":false,"UpdatedAt":1631723434,"createdAt":1631723434,"descricao":"descricao 45","id":"45"},{"situacao":false,"UpdatedAt":1631723374,"createdAt":1631723374,"descricao":"descricao 46","id":"46"},{"situacao":false,"UpdatedAt":1631723314,"createdAt":1631723314,"descricao":"descricao 47","id":"47"},{"situacao":false,"UpdatedAt":1631723254,"createdAt":1631723254,"descricao":"descricao 48","id":"48"},{"situacao":false,"UpdatedAt":1631723194,"createdAt":1631723194,"descricao":"descricao 49","id":"49"},{"situacao":false,"UpdatedAt":1631723220,"createdAt":1631723220,"descricao":"descricao 50","id":"50"}];
  var data = DadosDeExemplo;
}

//
//
//================================================


//Esses dados foram gerados de https://614225344d16670017ba2c39.mockapi.io/api/teste/:endpoint
let tasks = data; 



//Todos os requests AQUI São apenas pra exemplo de solicitações
//Quando for algo oficial elas serão ligeiramente alteras para as necessidades específicas do projeto do front-end
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.get('/api/todos', (req, res) => { 
  console.log('api/todos called!!!!!')
  res.json(tasks);
  console.log(tasks);
});
 
app.post('/api/todo', (req, res) => {
   const task = req.body.task;
   task.id = randomId(10);
   tasks.push(task);
   res.json(tasks);
});
 
app.delete('/api/todo/:id', (req, res) => {
  console.log("Id to delete:::::", req.params.id)
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json(tasks);
});

app.put('/api/todos/:id', (req, res) => {
  console.log("Id to update:::::", req.params.id)
  const taskToUpdate = req.body.task;
  tasks = tasks.map(task => {
    if (task.id == req.params.id) {
      task = taskToUpdate;
      task.id = parseInt(req.params.id);
    }
    return task;
});
  res.json(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});
// const express = require("express");

// const   swaggerUi =  require("swagger-ui-express");

// const  swaggerDocs  = require("./swagger.json");

// const app = express();
// app.use(express.json());

// app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));
 

  

// const restify = require('restify');
 
// //PARA Os erros
// const errs = require('restify-errors');

 
// const server = restify.createServer({
//   name: 'Gupy',
//   version: '1.0.0' 
// });


// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     //port : 3306,
//     user : 'root',
//     password : '',
//     database : 'gupy'
//   }
// }); 
// //PARA ACESSO AO BANCO DE DADOS
 
 
// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());
 

// server.listen(8080, function () {
//   console.log('%s listening at %s', server.name, server.url);
// });

// //Mostrar tabela
// server.get('/', function (req, res, next) {

//   knex('rest').then((dados)=>{//ENVIAR DADOS
//     res.send(dados);
//   },next);

// }); 


// //Adicionar Dados
// server.post('/create', function (req, res, next) {

//   knex('rest')
//     .insert(req.body)
//     .then((dados)=>{//ENVIAR DADOS
//       res.send(dados);
//     },next);
  
// });



// server.get('/show/:id', (req, res, next) => {
    
//   const { id } = req.params;
//    knex('rest')
//     .where('testeid', id)
//     .first()
//     .then((dados) => {
//         if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
//         res.send(dados);
//         console.log("DADOS: "+ JSON.stringify(dados));
//         return dados;
//     }, next)


// });
// server.put('/update/:id', (req, res, next) => {
    
//     const { id } = req.params;

//     knex('rest')
//         .where('id', id)
//         .update(req.body)
//         .then((dados) => {
//             if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
//             res.send('dados atualizados');
//         }, next)
        
// });
 
// server.del('/delete/:id', (req, res, next) => {
    
//     const { id } = req.params;

//     knex('rest')
//         .where('id', id)
//         .delete()
//         .then((dados) => {
//             if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
//             res.send('dados excluidos');
//         }, next)
        
// });


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

//var DadosDeExemplo=[{"situacao":true,"UpdatedAt":1631726074,"createdAt":1631726074,"descricao":"descricao 1","id":"1"},{"situacao":true,"UpdatedAt":1631726014,"createdAt":1631726014,"descricao":"descricao 2","id":"2"},{"situacao":true,"UpdatedAt":1631725954,"createdAt":1631725954,"descricao":"descricao 3","id":"3"},{"situacao":false,"UpdatedAt":1631725894,"createdAt":1631725894,"descricao":"descricao 4","id":"4"},{"situacao":false,"UpdatedAt":1631725834,"createdAt":1631725834,"descricao":"descricao 5","id":"5"},{"situacao":false,"UpdatedAt":1631725774,"createdAt":1631725774,"descricao":"descricao 6","id":"6"},{"situacao":true,"UpdatedAt":1631725714,"createdAt":1631725714,"descricao":"descricao 7","id":"7"},{"situacao":false,"UpdatedAt":1631725654,"createdAt":1631725654,"descricao":"descricao 8","id":"8"},{"situacao":true,"UpdatedAt":1631725594,"createdAt":1631725594,"descricao":"descricao 9","id":"9"},{"situacao":false,"UpdatedAt":1631725534,"createdAt":1631725534,"descricao":"descricao 10","id":"10"},{"situacao":false,"UpdatedAt":1631725474,"createdAt":1631725474,"descricao":"descricao 11","id":"11"},{"situacao":false,"UpdatedAt":1631725414,"createdAt":1631725414,"descricao":"descricao 12","id":"12"},{"situacao":false,"UpdatedAt":1631725354,"createdAt":1631725354,"descricao":"descricao 13","id":"13"},{"situacao":false,"UpdatedAt":1631725294,"createdAt":1631725294,"descricao":"descricao 14","id":"14"},{"situacao":true,"UpdatedAt":1631725234,"createdAt":1631725234,"descricao":"descricao 15","id":"15"},{"situacao":false,"UpdatedAt":1631725174,"createdAt":1631725174,"descricao":"descricao 16","id":"16"},{"situacao":false,"UpdatedAt":1631725114,"createdAt":1631725114,"descricao":"descricao 17","id":"17"},{"situacao":false,"UpdatedAt":1631725054,"createdAt":1631725054,"descricao":"descricao 18","id":"18"},{"situacao":false,"UpdatedAt":1631724994,"createdAt":1631724994,"descricao":"descricao 19","id":"19"},{"situacao":false,"UpdatedAt":1631724934,"createdAt":1631724934,"descricao":"descricao 20","id":"20"},{"situacao":false,"UpdatedAt":1631724874,"createdAt":1631724874,"descricao":"descricao 21","id":"21"},{"situacao":false,"UpdatedAt":1631724814,"createdAt":1631724814,"descricao":"descricao 22","id":"22"},{"situacao":false,"UpdatedAt":1631724754,"createdAt":1631724754,"descricao":"descricao 23","id":"23"},{"situacao":false,"UpdatedAt":1631724694,"createdAt":1631724694,"descricao":"descricao 24","id":"24"},{"situacao":false,"UpdatedAt":1631724634,"createdAt":1631724634,"descricao":"descricao 25","id":"25"},{"situacao":false,"UpdatedAt":1631724574,"createdAt":1631724574,"descricao":"descricao 26","id":"26"},{"situacao":false,"UpdatedAt":1631724514,"createdAt":1631724514,"descricao":"descricao 27","id":"27"},{"situacao":false,"UpdatedAt":1631724454,"createdAt":1631724454,"descricao":"descricao 28","id":"28"},{"situacao":false,"UpdatedAt":1631724394,"createdAt":1631724394,"descricao":"descricao 29","id":"29"},{"situacao":false,"UpdatedAt":1631724334,"createdAt":1631724334,"descricao":"descricao 30","id":"30"},{"situacao":false,"UpdatedAt":1631724274,"createdAt":1631724274,"descricao":"descricao 31","id":"31"},{"situacao":false,"UpdatedAt":1631724214,"createdAt":1631724214,"descricao":"descricao 32","id":"32"},{"situacao":false,"UpdatedAt":1631724154,"createdAt":1631724154,"descricao":"descricao 33","id":"33"},{"situacao":false,"UpdatedAt":1631724094,"createdAt":1631724094,"descricao":"descricao 34","id":"34"},{"situacao":true,"UpdatedAt":1631724034,"createdAt":1631724034,"descricao":"descricao 35","id":"35"},{"situacao":false,"UpdatedAt":1631723974,"createdAt":1631723974,"descricao":"descricao 36","id":"36"},{"situacao":false,"UpdatedAt":1631723914,"createdAt":1631723914,"descricao":"descricao 37","id":"37"},{"situacao":false,"UpdatedAt":1631723854,"createdAt":1631723854,"descricao":"descricao 38","id":"38"},{"situacao":false,"UpdatedAt":1631723794,"createdAt":1631723794,"descricao":"descricao 39","id":"39"},{"situacao":false,"UpdatedAt":1631723734,"createdAt":1631723734,"descricao":"descricao 40","id":"40"},{"situacao":false,"UpdatedAt":1631723674,"createdAt":1631723674,"descricao":"descricao 41","id":"41"},{"situacao":false,"UpdatedAt":1631723614,"createdAt":1631723614,"descricao":"descricao 42","id":"42"},{"situacao":false,"UpdatedAt":1631723554,"createdAt":1631723554,"descricao":"descricao 43","id":"43"},{"situacao":false,"UpdatedAt":1631723494,"createdAt":1631723494,"descricao":"descricao 44","id":"44"},{"situacao":false,"UpdatedAt":1631723434,"createdAt":1631723434,"descricao":"descricao 45","id":"45"},{"situacao":false,"UpdatedAt":1631723374,"createdAt":1631723374,"descricao":"descricao 46","id":"46"},{"situacao":false,"UpdatedAt":1631723314,"createdAt":1631723314,"descricao":"descricao 47","id":"47"},{"situacao":false,"UpdatedAt":1631723254,"createdAt":1631723254,"descricao":"descricao 48","id":"48"},{"situacao":false,"UpdatedAt":1631723194,"createdAt":1631723194,"descricao":"descricao 49","id":"49"},{"situacao":false,"UpdatedAt":1631723220,"createdAt":1631723220,"descricao":"descricao 50","id":"50"}];
*/