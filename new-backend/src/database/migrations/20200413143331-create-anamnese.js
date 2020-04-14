module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('anamneses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      diabetes_family: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cardiac_history: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      family_others: {
        type: Sequelize.STRING,
      },

      physical_activity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      physical_activity_which: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      aesthetic_procedure: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aesthetic_procedure_which: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      surgery: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surgery_which: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      metal_body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      metal_body_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      healthy_eating: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      smoke: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alcoholic_drinks: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pregnancy: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      medicines: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medicines_which: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      periodic_exams: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      periodic_exams_last_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      drug_allergy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      drug_allergy_which: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      instinct_functioning: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      menstrual_cycle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contraceptive: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hypotension: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hypertension: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('anamnese');
  },
};
