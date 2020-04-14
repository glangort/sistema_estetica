/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/session', 'SessionController.store');

Route.post('/user', 'UserController.store');
Route.get('/userid/:username', 'UserController.show');

Route.group(() => {
  Route.post('/cad_cliente', 'ClienteController.store');
  Route.get('/clientes', 'ClienteController.index');
  Route.get('/clientes/:id', 'ClienteController.show');
  Route.put('/clientes/:id', 'ClienteController.update');

  Route.get('/agendamentos', 'AgendamentoController.index');
  Route.get('/agendamentos/:id', 'AgendamentoController.show');

  Route.put('/agendamentos/:id', 'AgendamentoController.update');
  Route.post('/cad_agendamento', 'AgendamentoController.store');

  Route.post('/cad_anaminese', 'AnamineseController.store');
  Route.get('/fichas_anaminese', 'AnamineseController.index');
  Route.get('/fichas_anaminese/:id', 'AnamineseController.show');
  Route.put('/fichas_anaminese/:id', 'AnamineseController.update');

  Route.get('/buscaAtendimento/:id', 'ProfileController.buscaUltiAtendimento');
  Route.get('/agendamentosdata/:data', 'ProfileController.buscaData');
  Route.get('/agendamentoshoras/:data', 'ProfileController.buscaHora');
}).middleware(['auth']);
