const Schedule = require('../models/Schedule');

module.exports = {
  async index(req, res) {
    const schedules = await Schedule.findAll();

    return res.json(schedules);
  },

  async store(req, res) {
    const { starttime, endtime } = req.body;

    const schedule = await Schedule.create({
      starttime,
      endtime,
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
        erro: 'Horario não encontrado.',
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
        erro: 'Horario não encontrado.',
      });
    }

    try {
      await Schedule.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Horario editado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao editar o Horario',
      });
    }
  },

  async delete(req, res) {
    const id = req.params;

    const schedule = await Schedule.findOne({
      where: id,
    });

    if (!schedule) {
      return res.status(400).json({
        erro: 'Horario não encontrado.',
      });
    }

    try {
      await Schedule.destroy({
        where: id,
      });
      return res.status(200).json({
        msg: 'Horario deletado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao deletar o Horario',
      });
    }
  },
};
