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

// Definindo a relação entre Pet e Dono com onDelete: 'CASCADE'
Pet.belongsTo(Dono, { foreignKey: 'donoId', onDelete: 'CASCADE' });
Dono.hasMany(Pet, { foreignKey: 'donoId', onDelete: 'CASCADE' }); // Cascata na exclusão de Dono também

module.exports = Pet;
