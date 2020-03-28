const { test, trait } = use('Test/Suite')('Cliente');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('Auth/Client');
trait('DatabaseTransactions');

const Cliente = use('App/Models/Cliente');
//const User = user('App/Models/User');

test('Cadastrando um novo cliente', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();
  const cliente = await Factory.model('App/Models/Cliente').make();

  const response = await client

    .post('/cad_cliente')
    .loginVia(user, 'jwt')
    .send({
      user_id: user.id,
      ...cliente.toJSON(),
    })
    .end();

  response.assertStatus(201);

  assert.exists(response.body);
});

test('Listando clientes', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make();
  await user.clientes().save(cliente);

  const response = await client

    .get('/clientes')
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
});

test('Listando somente um cliente', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make();
  await user.clientes().save(cliente);

  const response = await client

    .get(`/clientes/${cliente.id}`)
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
  assert.equal(response.body.data);
});

test('Realizando update em um cliente', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make({
    nome: 'Gabriel Langort',
  });
  await user.clientes().save(cliente);

  const response = await client

    .put(`/clientes/${cliente.id}`)
    .loginVia(user, 'jwt')
    .send({ ...cliente.toJSON(), nome: 'Karen' })
    .end();

  response.assertStatus(201);
  assert.equal(response.body.nome, 'Karen');
});
