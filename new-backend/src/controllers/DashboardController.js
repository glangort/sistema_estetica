const Schedule = require('../models/Schedule');
const Client = require('../models/Client');
const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {
  async search(req, res) {
    const schedule = await Schedule.findAll({
      where: {
        date: { [Op.gte]: moment().format('YYYYMMDD') },
      },
      include: [
        {
          model: Client,
          as: 'client',
          attributes: ['name', 'phonenumber'],
        },
      ],
    });
    return res.json(schedule);
  },
};
