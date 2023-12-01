"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Transaksi one to many relation ship with user dan kelas
      // Transaksi.hasMany(models.user, {
      //   foreignKey: "id_user",
      // });
      // Transaksi.hasMany(models.kelas, {
      //   foreignKey: "id_kelas",
      // });
    }
  }
  Transaksi.init(
    {
      id_user: DataTypes.INTEGER,
      id_kelas: DataTypes.INTEGER,
      tanggal_transaksi: DataTypes.DATE,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaksi",
    }
  );
  return Transaksi;
};
