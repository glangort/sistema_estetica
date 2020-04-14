const crypto = require('crypto');
const User = require('../models/User');


module.exports = {
  async store(req, res) {
    const id = crypto.randomBytes(5).toString('HEX');

    const {
      name,
      username,
    } = req.body;

    const status = 'Active';

    const password = crypto.createHash('md5').update(req.body.password).digest('hex');

    const user = await User.create({
      id,
      name,
      username,
      status,
      password,
    });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async search(req, res) {
    const id = req.params;

    const user = await User.findOne({
      where: id,
    });

    return res.json(user);
  },

  async update(req, res) {
    const id = req.params;

    const user = await User.findOne({
      where: id,

    });

    if (!user) {
      return res.status(400).json({
        erro: 'Usuario não encontrado.',
      });
    }

    try {
      await User.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Usuario Editado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao editar o usuario',
      });
    }
  },

  // async inactive(req, res) {
  //   const id = req.params;

  //   const user = await User.findOne({
  //     where: id,

  //   });

  //   if (!user) {
  //     return res.status(400).json({
  //       erro: 'Usuario não encontrado.',
  //     });
  //   }

  //   try {
  //     await User.update({
  //       status: 'Inactive',
  //     }, {
  //       where: id,
  //     });
  //     return res.status(200).json({
  //       msg: 'Usuario inativado com Sucesso!',
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: 'Falha ao inativar o usuario',
  //     });
  //   }
  // },

  // async activate(req, res) {
  //   const id = req.params;

  //   const user = await User.findOne({
  //     where: id,

  //   });

  //   if (!user) {
  //     return res.status(400).json({
  //       erro: 'Usuario não encontrado.',
  //     });
  //   }

  //   try {
  //     await User.update({
  //       status: 'Active',
  //     }, {
  //       where: id,
  //     });
  //     return res.status(200).json({
  //       msg: 'Usuario ativado com Sucesso!',
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: 'Falha ao ativar o usuario',
  //     });
  //   }
  // },
};