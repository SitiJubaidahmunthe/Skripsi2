'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pinjam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pinjam.init({
    nim: DataTypes.INTEGER,
    nama: DataTypes.TEXT,
    uid: DataTypes.TEXT,
    alamat: DataTypes.TEXT,
    nohp: DataTypes.INTEGER,
    password: DataTypes.TEXT,
    buku: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pinjam',
  });
  return Pinjam;
};