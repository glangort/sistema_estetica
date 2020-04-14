const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        adress: DataTypes.STRING,
        number: DataTypes.INTEGER,
        birthday: DataTypes.DATEONLY,
        phonenumber: DataTypes.STRING,
        celphonenumber: DataTypes.STRING,
        status: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Schedule, {
      foreignKey: 'client_id',
      as: 'schedule',
    });

    this.hasOne(models.Anamnese, {
      foreignKey: 'client_id',
      as: 'anamnese',
    });

    this.hasMany(models.Measures, {
      foreignKey: 'client_id',
      as: 'measures',
    });
  }
}

module.exports = Client;
