'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('risks', {
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
      likelihood: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'medium'
      },
      impact: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'medium'
      },
      mitigation: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'identified'
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
    await queryInterface.dropTable('risks');
  }
};
