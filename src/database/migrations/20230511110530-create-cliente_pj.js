'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientesPJ', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      razao_social: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nome_fantasia: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      atividade: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      data_abertura:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientesPJ');
  }
};
