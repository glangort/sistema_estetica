const { Model, DataTypes } = require('sequelize');

class Measures extends Model {
  static init(sequelize) {
    super.init(
      {
        date: DataTypes.DATEONLY,
        wight: DataTypes.REAL,
        bust: DataTypes.REAL,
        left_arm: DataTypes.REAL,
        right_arm: DataTypes.REAL,
        abdomen: DataTypes.REAL,
        waist: DataTypes.REAL,
        hip: DataTypes.REAL,
        saddlebag: DataTypes.REAL,
        left_thigh: DataTypes.REAL,
        right_thigh: DataTypes.REAL,
        left_calf: DataTypes.REAL,
        right_calf: DataTypes.REAL,
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

module.exports = Measures;
