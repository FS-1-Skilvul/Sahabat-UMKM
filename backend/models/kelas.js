"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // many to one relation with kategori table
      Kelas.belongsTo(models.Kategori_Kelas, {
        foreignKey: "id_kategori",
      });

      // many-to-many relation with user table using daftar_kelas as a junction table
      Kelas.belongsToMany(models.User, {
        through: "daftar_kelas",
        foreignKey: "id_kelas",
      });
    }
  }
  Kelas.init(
    {
      id_kategori: DataTypes.INTEGER,
      nama_kelas: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      harga: DataTypes.INTEGER,
      gambar: DataTypes.STRING,
      video: DataTypes.STRING,
      nama_pengajar: DataTypes.STRING,
      detail_pengajar: DataTypes.TEXT,
      durasi: DataTypes.TIME,
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Kelas",
    }
  );
  return Kelas;
};
