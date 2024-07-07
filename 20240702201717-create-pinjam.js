'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pinjams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nim: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.TEXT
      },
      uid: {
        type: Sequelize.TEXT

      },
      alamat: {
        type: Sequelize.TEXT
      },
      nohp: {
        type: Sequelize.INTEGER
      },
      buku: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pinjams');
  }
};