"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("kelas", "gambar", {
      type: Sequelize.STRING,
      after: "harga",
      allowNull: false,
      defaultValue: "",
    });

    await queryInterface.addColumn("kelas", "video", {
      type: Sequelize.STRING,
      after: "gambar",
      allowNull: false,
      defaultValue: "",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Kelas", "gambar");
    await queryInterface.removeColumn("Kelas", "video");
  },
};
