'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori_Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kategori_Kelas.init({
    nama_kategori: DataTypes.STRING,
    deskripsi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Kategori_Kelas',
  });
  return Kategori_Kelas;
};