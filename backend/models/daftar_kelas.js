'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Daftar_Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Daftar_Kelas.init({
    id_user: DataTypes.INTEGER,
    id_kelas: DataTypes.INTEGER,
    status_pendaftaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Daftar_Kelas',
  });
  return Daftar_Kelas;
};