"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("kelas", "id_kategori", {
      type: Sequelize.INTEGER,
      after: "id",
      allowNull: true,
      references: {
        model: "kategori_kelas",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("kelas", "id_kategori");
  },
};
