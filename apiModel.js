const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const API = sequelize.define('API', {
  name: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  usage: { type: DataTypes.TEXT },
  category: { type: DataTypes.STRING, allowNull: false },
});

module.exports = API;
