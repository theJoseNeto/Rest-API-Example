'use strict';
const tableName = "students";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      last_mame: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      age: {
        type: Sequelize.INTEGER,
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

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(tableName);
  }
};
