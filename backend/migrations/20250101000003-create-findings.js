'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('findings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      severity: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'medium'
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'open'
      },
      auditId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'audits',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('findings');
  }
};
