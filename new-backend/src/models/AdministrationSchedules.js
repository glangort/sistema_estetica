const { Model, DataTypes } = require('sequelize');

class AdministrationSchedules extends Model {
  static init(sequelize) {
    super.init(
      {
        starttime: DataTypes.TIME,
        endtime: DataTypes.TIME,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = AdministrationSchedules;
