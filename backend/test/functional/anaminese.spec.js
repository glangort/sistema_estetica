const { test, trait } = use('Test/Suite')('Anaminese');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

const User = use('App/Models/User');
const Anaminese = use('App/Models/Anaminese');
const Cliente = use('App/Models/Cliente');

trait('Test/ApiClient');
trait('Auth/Client');
trait('DatabaseTransactions');

test('Cadastrando uma nova ficha anaminese', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make();
  await user.clientes().save(cliente);

  const anaminese = await Factory.model('App/Models/Anaminese').create();

  //console.log(anaminese);
  const response = await client

    .post('/cad_anaminese')
    .loginVia(user, 'jwt')
    .send({
      cliente_id: cliente.id,
      ...anaminese.toJSON(),
    })
    .end();

  response.assertStatus(201);
});

test('Listando fichas de anaminese', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make();
  await user.clientes().save(cliente);

  const anaminese = await Factory.model('App/Models/Anaminese').create();

  const response = await client

    .get('/fichas_anaminese')
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
});

test('Listando somente uma ficha anaminese', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make();
  await user.clientes().save(cliente);

  const anaminese = await Factory.model('App/Models/Anaminese').create();
  const response = await client

    .get(`/fichas_anaminese/${anaminese.id}`)
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
  assert.equal(response.body.id, anaminese.id);
});

test('Fazendo update em uma ficha de anaminese', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const cliente = await Factory.model('App/Models/Cliente').make();
  await user.clientes().save(cliente);

  const anaminese = await Factory.model('App/Models/Anaminese').create({
    diabete_familia: 'Não',
  });

  const response = await client
    .put(`/fichas_anaminese/${anaminese.id}`)
    .loginVia(user, 'jwt')
    .send({ ...anaminese.toJSON(), diabete_familia: 'Sim' })
    .end();

  response.assertStatus(201);
  assert.equal(response.body.diabete_familia, 'Sim');
});
