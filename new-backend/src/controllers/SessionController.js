const crypto = require('crypto');
const User = require('../models/User');


module.exports = {
  async create(req, res) {
    const {
      username,
    } = req.body;

    const password = crypto.createHash('md5').update(req.body.password).digest('hex');

    const session = await User.findOne({
      attributes: ['id', 'status'],
      where: {
        username,
        password,
      },
    });

    if (!session) {
      return res.status(400).json({
        error: 'Usuario ou Senha Invalido',
      });
    }

    if (session.status === 'Inactive') {
      return res.status(400).json({
        error: 'Este usuario está desativado.',
      });
    }

    return res.json(session);
  },
};