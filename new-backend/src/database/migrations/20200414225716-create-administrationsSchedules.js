module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('administrationSchedules', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      starttime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      endtime: {
        type: Sequelize.TIME,
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
    return queryInterface.dropTable('administrationSchedules');
  },
};
