const Measures = require('../models/Measures');

module.exports = {
  async index(req, res) {
    const measure = await Measures.findAll();

    return res.json(measure);
  },

  async store(req, res) {
    const { client_id } = req.params;

    const {
      date,
      wight,
      bust,
      left_arm,
      right_arm,
      abdomen,
      waist,
      hip,
      saddlebag,
      left_thigh,
      right_thigh,
      left_calf,
      right_calf,
    } = req.body;

    const measure = await Measures.create({
      client_id,
      date,
      wight,
      bust,
      left_arm,
      right_arm,
      abdomen,
      waist,
      hip,
      saddlebag,
      left_thigh,
      right_thigh,
      left_calf,
      right_calf,
    });

    return res.json(measure);
  },

  async search(req, res) {
    const id = req.params;
    const measure = await Measures.findOne({
      where: id,
    });

    if (!measure) {
      return res.status(400).json({
        erro: 'Medidas não encontrada',
      });
    }

    return res.json(measure);
  },

  async update(req, res) {
    const id = req.params;

    const measure = await Measures.findOne({
      where: id,
    });

    if (!measure) {
      return res.status(400).json({
        erro: 'Medidas não encontradas.',
      });
    }

    try {
      await Measures.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Medidas editadas com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao editar as Medidas',
      });
    }
  },

  async delete(req, res) {
    const id = req.params;

    const measure = await Measures.findOne({
      where: id,
    });

    if (!measure) {
      return res.status(400).json({
        erro: 'Medidas não encontradas.',
      });
    }

    try {
      await Measures.destroy({
        where: id,
      });
      return res.status(200).json({
        msg: 'Medidas deletadas com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao deletar as Medidas',
      });
    }
  },
};
