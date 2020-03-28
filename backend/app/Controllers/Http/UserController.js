'use strict';
const User = use('App/Models/User');

class UserController {
  async store({ request, response }) {
    const data = request.only(['username', 'name', 'email', 'password']);
    const user = await User.create(data);

    return response.status(201).json(user);
  }

  async show({ params }) {
    const user = await User.query()
      .select('id')
      .where('username', '=', params.username)
      .fetch();

    return user;
  }
}

module.exports = UserController;
