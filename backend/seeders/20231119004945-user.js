'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password:'123',
        role: 'admin',
      },
      {
        name: 'riva',
        email: 'riva@gmail.com',
        password:'123',
        role: 'client',
      }
    ])
   
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
