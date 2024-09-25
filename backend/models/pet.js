// backend/models/pet.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Dono = require('./dono');

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  raca: DataTypes.STRING,
  idade: DataTypes.INTEGER,
  porte: DataTypes.STRING,
  castrado: {
    type: DataTypes.BOOLEAN,
    allowNull: true, // Permitir nulo para o campo castrado
  },
  donoId: { // Alterado para donoId para manter consistência
    type: DataTypes.INTEGER,
    references: {
      model: Dono,
      key: 'id',
    },
    allowNull: false, // Adicionando restrição para não permitir null
  },
});

// Definindo a relação entre Pet e Dono
Pet.belongsTo(Dono, { foreignKey: 'donoId' }); // Alterado para donoId
Dono.hasMany(Pet, { foreignKey: 'donoId' }); // Alterado para donoId

module.exports = Pet;
