const Schedule = require('../models/Schedule');

module.exports = {
  async index(req, res) {
    const schedules = await Schedule.findAll();

    return res.json(schedules);
  },

  async store(req, res) {
    const { client_id } = req.params;

    const { date, starttime, endtime, status } = req.body;

    const schedule = await Schedule.create({
      date,
      starttime,
      endtime,
      status,
      client_id,
    });

    return res.json(schedule);
  },

  async search(req, res) {
    const id = req.params;
    const schedule = await Schedule.findOne({
      where: id,
    });

    if (!schedule) {
      return res.status(400).json({
        erro: 'Agendamento não encontrado.',
      });
    }

    return res.json(schedule);
  },

  async update(req, res) {
    const id = req.params;

    const schedule = await Schedule.findOne({
      where: id,
    });

    if (!schedule) {
      return res.status(400).json({
        erro: 'Agendamento não encontrado.',
      });
    }

    try {
      await Schedule.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Agendamento editado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao editar o Agendamento',
      });
    }
  },

  // async inactive(req, res) {
  //   const id = req.params;

  //   const schedule = await Schedule.findOne({
  //     where: id,

  //   });

  //   if (!schedule) {
  //     return res.status(400).json({
  //       erro: 'Agendamento não encontrado.',
  //     });
  //   }

  //   try {
  //     await Schedule.update({
  //       status: 'Inactive',
  //     }, {
  //       where: id,
  //     });
  //     return res.status(200).json({
  //       msg: 'Agendamento inativado com Sucesso!',
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: 'Falha ao inativar o Agendamento',
  //     });
  //   }
  // },

  // async confirm(req, res) {
  //   const id = req.params;

  //   const schedule = await Schedule.findOne({
  //     where: id,

  //   });

  //   if (!schedule) {
  //     return res.status(400).json({
  //       erro: 'Agendamento não encontrado.',
  //     });
  //   }

  //   try {
  //     await Schedule.update({
  //       status: 'Confirmed',
  //     }, {
  //       where: id,
  //     });
  //     return res.status(200).json({
  //       msg: 'Agendamento confirmado com Sucesso!',
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: 'Falha ao confirmar o Agendamento',
  //     });
  //   }
  // },

  async delete(req, res) {
    const id = req.params;

    const schedule = await Schedule.findOne({
      where: id,
    });

    if (!schedule) {
      return res.status(400).json({
        erro: 'Agendamento não encontrado.',
      });
    }

    try {
      await Schedule.destroy({
        where: id,
      });
      return res.status(200).json({
        msg: 'Agendamento deletado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao deletar o Agendamento',
      });
    }
  },
};
