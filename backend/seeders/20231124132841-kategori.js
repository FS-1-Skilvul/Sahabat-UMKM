"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategori_kelas", [
      {
        nama_kategori: "Kategori 1",
        deskripsi: "Description for Kategori 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Kategori 2",
        deskripsi: "Description for Kategori 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Kategori 3",
        deskripsi: "Description for Kategori 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kategori_Kelas", null, {});
  },
};
