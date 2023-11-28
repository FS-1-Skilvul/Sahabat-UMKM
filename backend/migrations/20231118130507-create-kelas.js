"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Kelas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_kelas: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      harga: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      nama_pengajar: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      detail_pengajar: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      durasi: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      rating: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Kelas");
  },
};
