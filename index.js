const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser"),
      fs = require('fs'),
      port = 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

// place holder for the data
let tasks = [
  {
    id: 1,
    task: 'task1',
    assignee: 'assignee1000',
    status: 'completed'
  },
  {
    id: 2,
    task: 'task2',
    assignee: 'assignee1001',
    status: 'completed'
  },
  {
    id: 3,
    task: 'task3',
    assignee: 'assignee1002',
    status: 'completed'
  },
  {
    id: 4,
    task: 'task4',
    assignee: 'assignee1000',
    status: 'completed'
  },
  
]; 

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.get('/api/todos', (req, res) => {
  console.log('api/todos called!!!!!')
  res.json(tasks);
});

app.post('/api/todo', (req, res) => {
   const task = req.body.task;
   task.id = randomId(10);
   tasks.push(task);
   res.json(tasks);
})

app.delete('/api/todo/:id', (req, res) => {
  console.log("Id to delete:::::", req.params.id)
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json(tasks);
})

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


*/