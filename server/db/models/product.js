const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrlHiRes: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true,
    },
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true,
    },
    allowNull: false,
  },
  hp: {
    type: Sequelize.STRING,
  },
  resistances: {
    type: Sequelize.JSON,
  },
  weaknesses: {
    type: Sequelize.ARRAY(Sequelize.JSON),
  },
  convertedRetreatCost: {
    type: Sequelize.INTEGER,
  },
  atttacks: {
    type: Sequelize.ARRAY(Sequelize.JSON),
  },
  types: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
  },
  rarity: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'common',
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0,
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Product;
