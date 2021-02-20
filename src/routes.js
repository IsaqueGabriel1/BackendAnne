const { Router } = require('express');

const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');
const UpdateController = require('./controllers/UpdateController');
const DeleteController = require('./controllers/DeleteController');
const ModuleController = require('./controllers/ModuleController');

const routes = new Router;

routes.post('/users', RegisterController.indexAction);
routes.post('/login', LoginController.indexAction);
routes.post('/alterarsenha', UpdateController.indexAction);
routes.post('/delete/:id', DeleteController.indexAction);
routes.post('/modulos/:id', ModuleController.indexAction);

module.exports = routes;