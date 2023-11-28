"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Transaksis", [
      {
        id_user: 7,
        id_kelas: 17,
        tanggal_transaksi: new Date(),
        total: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 8,
        id_kelas: 18,
        tanggal_transaksi: new Date(),
        total: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 7,
        id_kelas: 20,
        tanggal_transaksi: new Date(),
        total: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
