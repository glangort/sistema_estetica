const { Model, DataTypes } = require('sequelize');

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        date: DataTypes.DATEONLY,
        starttime: DataTypes.TIME,
        endtime: DataTypes.TIME,
        status: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Client, {
      foreignKey: 'client_id',
      as: 'client',
    });
  }
}

module.exports = Schedule;
