const { test, trait } = use('Test/Suite')('Agendamento');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('Auth/Client');
trait('DatabaseTransactions');

const Cliente = use('App/Models/Cliente');

test('Cadastrando um novo agendamento', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();
  const cliente = await Factory.model('App/Models/Cliente').make();
  const agendamento = await Factory.model('App/Models/Agendamento').make();

  await user.clientes().save(cliente);

  const response = await client

    .post('/cad_agendamento')
    .loginVia(user, 'jwt')
    .send({
      user_id: user.id,
      ...agendamento.toJSON(),
    })
    .end();

  response.assertStatus(201);
  assert.exists(response.body);
});

test('Listando agendamentos', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const agendamento = await Factory.model('App/Models/Agendamento').make();
  await user.agendamentos().save(agendamento);

  const response = await client

    .get('/agendamentos')
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
});

test('Listando somente um agendamento', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const agendamento = await Factory.model('App/Models/Agendamento').make();
  await user.agendamentos().save(agendamento);

  const response = await client

    .get(`/agendamentos/${agendamento.id}`)
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
  assert.equal(response.body.data, agendamento.data);
});

test('Fazendo update em um agendamento', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const agendamento = await Factory.model('App/Models/Agendamento').make({
    data: '10-01-2020',
  });
  await user.agendamentos().save(agendamento);

  const response = await client

    .put(`/agendamentos/${agendamento.id}`)
    .loginVia(user, 'jwt')
    .send({ ...agendamento.toJSON(), data: '11-01-2020' })
    .end();

  response.assertStatus(201);
  assert.equal(response.body.data, '11-01-2020');
});
