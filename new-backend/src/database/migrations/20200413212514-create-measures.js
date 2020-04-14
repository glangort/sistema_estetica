module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('measures', {
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
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      wight: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      bust: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      left_arm: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      right_arm: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      abdomen: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      waist: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      hip: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      saddlebag: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      left_thigh: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      right_thigh: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      left_calf: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      right_calf: {
        type: Sequelize.REAL,
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
    return queryInterface.dropTable('measures');
  },
};
