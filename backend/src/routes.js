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
const upload = multer(uploadConfig);

//Rotas Post
routes.post('/login', SessionController.store);
routes.post('/freela', FreelaController.store);
routes.post('/freelas/:freela_id/registers', RegisterController.store);


//Rotas Get
routes.get('/devs', SessionController.index);
routes.get('/freelas', FreelaController.index);
routes.get('/dashboard', DashboardController.show);


module.exports = routes;