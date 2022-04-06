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
routes.post('/signup', SessionController.create);
routes.post('/freela', FreelaController.store);
routes.post('/freelas/:freela_id/registers', RegisterController.store);
routes.post('/register/:register_id/approve', RegisterController.approve);
routes.post('/registers/:register_id/reject', RegisterController.reject);

//Rotas Get
routes.get('/freelas', FreelaController.index);
routes.get('/dashboard/:dev_id', DashboardController.show);
routes.get('/devs', SessionController.index);
routes.get('/registers', RegisterController.index);

//Rotas PUT
routes.put('/devs/:_id', SessionController.update)

module.exports = routes;