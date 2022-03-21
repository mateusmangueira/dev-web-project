//Imports de bibliotecas usadas na aplicacao
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


//Controllers
const SessionController = require('./controllers/SessionController');
const FreelaController = require('./controllers/FreelaController');
const RegisterController = require('./controllers/RegisterController');
const DashboardController = require('./controllers/DashboardController');

//Router Express
const routes = express.Router();

//Rotas Post
routes.post('/login', SessionController.store);
routes.post('/freela', FreelaController.store);

//Rotas Get
routes.get('/devs', SessionController.index);
routes.get('/freelas', FreelaController.index);


module.exports = routes;