const { Model, DataTypes } = require('sequelize');

class Anamnese extends Model {
  static init(sequelize) {
    super.init(
      {
        diabetes_family: DataTypes.STRING,
        cardiac_history: DataTypes.STRING,
        family_others: DataTypes.STRING,
        physical_activity: DataTypes.STRING,
        physical_activity_which: DataTypes.STRING,
        aesthetic_procedure: DataTypes.STRING,
        aesthetic_procedure_which: DataTypes.STRING,
        surgery: DataTypes.STRING,
        surgery_which: DataTypes.STRING,
        metal_body: DataTypes.STRING,
        metal_body_type: DataTypes.STRING,
        healthy_eating: DataTypes.STRING,
        smoke: DataTypes.STRING,
        alcoholic_drinks: DataTypes.STRING,
        pregnancy: DataTypes.STRING,
        medicines: DataTypes.STRING,
        medicines_which: DataTypes.STRING,
        periodic_exams: DataTypes.STRING,
        periodic_exams_last_date: DataTypes.DATEONLY,
        drug_allergy: DataTypes.STRING,
        drug_allergy_which: DataTypes.STRING,
        instinct_functioning: DataTypes.STRING,
        menstrual_cycle: DataTypes.STRING,
        contraceptive: DataTypes.STRING,
        hypotension: DataTypes.STRING,
        hypertension: DataTypes.STRING,
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

module.exports = Anamnese;
