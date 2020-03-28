'use strict';

class SessionController {
  async store({ request, auth }) {
    const { username, password } = request.only(['username', 'password']);

    const { token } = await auth.attempt(username, password);

    return { token };
  }
}

module.exports = SessionController;
