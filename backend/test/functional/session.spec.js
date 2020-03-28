const { test, trait } = use('Test/Suite')('Session');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');

const User = use('App/Models/User');
test('deve usar o token JWT quando criar uma sessao', async ({
  assert,
  client,
}) => {
  const sessionPayload = {
    username: 'gabriel',
    password: '123456',
  };

  const user = await Factory.model('App/Models/User').create(sessionPayload);

  const response = await client
    .post('/session')
    .send(sessionPayload)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
