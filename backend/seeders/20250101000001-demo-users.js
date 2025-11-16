'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@auditly.com',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jdoe',
        email: 'john.doe@auditly.com',
        firstName: 'John',
        lastName: 'Doe',
        role: 'auditor',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jsmith',
        email: 'jane.smith@auditly.com',
        firstName: 'Jane',
        lastName: 'Smith',
        role: 'reviewer',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'bwilson',
        email: 'bob.wilson@auditly.com',
        firstName: 'Bob',
        lastName: 'Wilson',
        role: 'viewer',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
