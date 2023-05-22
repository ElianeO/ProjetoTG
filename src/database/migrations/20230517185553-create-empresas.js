'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      razao_social: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      nome_fantasia: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      atividade: {
        type: Sequelize.STRING(20),
        allowNull: false
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
    await queryInterface.dropTable('Empresas');
  }
};