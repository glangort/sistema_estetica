const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ClientController = require('./controllers/ClientController');
const ScheduleController = require('./controllers/ScheduleController');
const AnamneseController = require('./controllers/AnamneseController');
const MeasuresController = require('./controllers/MeasuresController');
const AdministrationSchedules = require('./controllers/AdministrationScheduleController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.post('/user', UserController.store);
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.search);
routes.put('/user/:id/update', UserController.update);
// routes.put('/user/:id/inactive', UserController.inactive);
// routes.put('/user/:id/activate', UserController.activate);

routes.post('/client', ClientController.store);
routes.get('/client', ClientController.index);
routes.get('/client/list', ClientController.listAll);
routes.get('/client/:id', ClientController.search);
routes.put('/client/:id/update', ClientController.update);
// routes.put('/client/:id/inactive', ClientController.inactive);
// routes.put('/client/:id/activate', ClientController.activate);

routes.post('/schedule/:client_id', ScheduleController.store);
routes.get('/schedule', ScheduleController.index);
routes.get('/schedule/:id', ScheduleController.search);
routes.put('/schedule/:id/update', ScheduleController.update);
routes.delete('/schedule/:id/delete', ScheduleController.delete);
// routes.put('/schedule/:id/inactive', ScheduleController.inactive);
// routes.put('/schedule/:id/confirm', ScheduleController.activate);

routes.post('/anamnese/:client_id', AnamneseController.store);
routes.get('/anamnese', AnamneseController.index);
routes.get('/anamnese/:id', AnamneseController.search);
routes.put('/anamnese/:id/update', AnamneseController.update);
routes.delete('/anamnese/:id/delete', AnamneseController.delete);

routes.post('/measures/:client_id', MeasuresController.store);
routes.get('/measures', MeasuresController.index);
routes.get('/measures/:id', MeasuresController.search);
routes.put('/measures/:id/update', MeasuresController.update);
routes.delete('/measures/:id/delete', MeasuresController.delete);

routes.post('/administration', AdministrationSchedules.store);
routes.get('/administration', AdministrationSchedules.index);
routes.get('/administration/:id', AdministrationSchedules.search);
routes.put('/administration/:id/update', AdministrationSchedules.update);
routes.delete('/administration/:id/delete', AdministrationSchedules.delete);

module.exports = routes;
