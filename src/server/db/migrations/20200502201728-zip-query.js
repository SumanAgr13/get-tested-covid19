'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('TestCenter', 'latitude', {
          type: Sequelize.DataTypes.DECIMAL(9,6)
        }, { transaction: t }),
        queryInterface.changeColumn('TestCenter', 'longitude', {
          type: Sequelize.DataTypes.DECIMAL(9,6)
        }, { transaction: t }),
        queryInterface.changeColumn('TestCenterStagings', 'latitude', {
          type: Sequelize.DataTypes.DECIMAL(9,6)
        }, { transaction: t }),
        queryInterface.changeColumn('TestCenterStagings', 'longitude', {
          type: Sequelize.DataTypes.DECIMAL(9,6)
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('TestCenter', 'latitude', {
          type: Sequelize.DataTypes.FLOAT
        }, { transaction: t }),
        queryInterface.changeColumn('TestCenter', 'longitude', {
          type: Sequelize.DataTypes.FLOAT
        }, { transaction: t }),
        queryInterface.changeColumn('TestCenterStagings', 'latitude', {
          type: Sequelize.DataTypes.FLOAT
        }, { transaction: t }),
        queryInterface.changeColumn('TestCenterStagings', 'longitude', {
          type: Sequelize.DataTypes.FLOAT
        }, { transaction: t })
      ]);
    });
  }
};
