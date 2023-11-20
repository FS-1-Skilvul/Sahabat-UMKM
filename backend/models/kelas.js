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
      Kelas.belongsTo(models.Kategori_Kelas, {
        foreignKey: "id_kategori",
      });
    }
  }
  Kelas.init(
    {
      id_kategori: DataTypes.INTEGER,
      nama_kelas: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      harga: DataTypes.INTEGER,
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
