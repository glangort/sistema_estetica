const Client = require('../models/Client');
const Schedule = require('../models/Schedule');
const Anamnese = require('../models/Anamnese');
const Measures = require('../models/Measures');

module.exports = {
  async index(req, res) {
    const clients = await Client.findAll();

    return res.json(clients);
  },

  async listAll(req, res) {
    const clients = await Client.findAll({
      attributes: [
        'id',
        'name',
        'adress',
        'phonenumber',
        'celphonenumber',
        'status',
      ],
      include: [
        {
          model: Schedule,
          as: 'schedule',
          attributes: ['date'],
          separate: true,
          order: [['createdAt', 'DESC']],
          limit: '1',
        },
        {
          model: Anamnese,
          as: 'anamnese',
          attributes: [
            'diabetes_family',
            'cardiac_history',
            'family_others',
            'physical_activity',
            'physical_activity_which',
            'aesthetic_procedure',
            'aesthetic_procedure_which',
            'surgery',
            'surgery_which',
            'metal_body',
            'metal_body_type',
            'healthy_eating',
            'smoke',
            'alcoholic_drinks',
            'pregnancy',
            'medicines',
            'medicines_which',
            'periodic_exams',
            'periodic_exams_last_date',
            'drug_allergy',
            'drug_allergy_which',
            'instinct_functioning',
            'menstrual_cycle',
            'contraceptive',
            'hypotension',
            'hypertension',
          ],
        },
        {
          model: Measures,
          as: 'measures',
          attributes: [
            'id',
            'date',
            'wight',
            'bust',
            'left_arm',
            'right_arm',
            'abdomen',
            'waist',
            'hip',
            'saddlebag',
            'left_thigh',
            'right_thigh',
            'left_calf',
            'right_calf',
          ],
        },
      ],
    });

    return res.json(clients);
  },

  async store(req, res) {
    const {
      name,
      adress,
      number,
      birthday,
      phonenumber,
      celphonenumber,
    } = req.body;

    const status = 'Active';

    const client = await Client.create({
      name,
      adress,
      number,
      birthday,
      phonenumber,
      celphonenumber,
      status,
    });

    return res.json(client);
  },
  async search(req, res) {
    const id = req.params;

    const client = await Client.findOne({
      where: id,
    });

    return res.json(client);
  },

  async update(req, res) {
    const id = req.params;

    const user = await Client.findOne({
      where: id,
    });

    if (!user) {
      return res.status(400).json({
        erro: 'Usuario não encontrado.',
      });
    }

    try {
      await Client.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Cliente Editado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  },

  // async inactive(req, res) {
  //   const id = req.params;

  //   const client = await Client.findOne({
  //     where: id,

  //   });

  //   if (!client) {
  //     return res.status(400).json({
  //       erro: 'Cliente não encontrado.',
  //     });
  //   }

  //   try {
  //     await Client.update({
  //       status: 'Inactive',
  //     }, {
  //       where: id,
  //     });
  //     return res.status(200).json({
  //       msg: 'Cliente inativado com Sucesso!',
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: 'Falha ao inativar o Cliente',
  //     });
  //   }
  // },

  // async activate(req, res) {
  //   const id = req.params;

  //   const client = await Client.findOne({
  //     where: id,

  //   });

  //   if (!client) {
  //     return res.status(400).json({
  //       erro: 'Cliente não encontrado.',
  //     });
  //   }

  //   try {
  //     await Client.update({
  //       status: 'Active',
  //     }, {
  //       where: id,
  //     });
  //     return res.status(200).json({
  //       msg: 'Cliente ativado com Sucesso!',
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: 'Falha ao ativar o Cliente',
  //     });
  //   }
  // },
};
