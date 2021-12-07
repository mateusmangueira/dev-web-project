const express = require('express');


//Controllers
const SessionController = require('./controllers/SessionController');

//Router Express
const routes = express.Router();

//Rotas Post
routes.post('/sessions', SessionController.store);

//Rotas Get
routes.get('/users', SessionController.index);


module.exports = routes;