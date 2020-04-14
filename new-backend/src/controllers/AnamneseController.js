const Anamnese = require('../models/Anamnese');

module.exports = {
  async index(req, res) {
    const anamnese = await Anamnese.findAll();

    return res.json(anamnese);
  },

  async store(req, res) {
    const { client_id } = req.params;

    const {
      diabetes_family,
      cardiac_history,
      family_others,
      physical_activity,
      physical_activity_which,
      aesthetic_procedure,
      aesthetic_procedure_which,
      surgery,
      surgery_which,
      metal_body,
      metal_body_type,
      healthy_eating,
      smoke,
      alcoholic_drinks,
      pregnancy,
      medicines,
      medicines_which,
      periodic_exams,
      periodic_exams_last_date,
      drug_allergy,
      drug_allergy_which,
      instinct_functioning,
      menstrual_cycle,
      contraceptive,
      hypotension,
      hypertension,
    } = req.body;

    const anamnese = await Anamnese.create({
      diabetes_family,
      cardiac_history,
      family_others,
      physical_activity,
      physical_activity_which,
      aesthetic_procedure,
      aesthetic_procedure_which,
      surgery,
      surgery_which,
      metal_body,
      metal_body_type,
      healthy_eating,
      smoke,
      alcoholic_drinks,
      pregnancy,
      medicines,
      medicines_which,
      periodic_exams,
      periodic_exams_last_date,
      drug_allergy,
      drug_allergy_which,
      instinct_functioning,
      menstrual_cycle,
      contraceptive,
      hypotension,
      hypertension,
      client_id,
    });

    return res.json(anamnese);
  },

  async search(req, res) {
    const id = req.params;
    const anamnese = await Anamnese.findOne({
      where: id,
    });

    if (!anamnese) {
      return res.status(400).json({
        erro: 'Ficha de Anamnese não encontrada.',
      });
    }

    return res.json(anamnese);
  },

  async update(req, res) {
    const id = req.params;

    const anamnese = await Anamnese.findOne({
      where: id,
    });

    if (!anamnese) {
      return res.status(400).json({
        erro: 'Ficha de Anamnese não encontrado.',
      });
    }

    try {
      await Anamnese.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Ficha de Anamnese editada com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao editar a Ficha de Anamnese',
      });
    }
  },

  async delete(req, res) {
    const id = req.params;

    const anamnese = await Anamnese.findOne({
      where: id,
    });

    if (!schedule) {
      return res.status(400).json({
        erro: 'Ficha de Anamnese não encontrada.',
      });
    }

    try {
      await Anamnese.destroy({
        where: id,
      });
      return res.status(200).json({
        msg: 'Ficha de Anaminese deletada com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        erro: 'Falha ao deletar a Ficha de Anamnese',
      });
    }
  },
};
