const Sequelize = require('sequelize');
const db = require('../db');

const Product_Order = db.define('Product_Order', {
  priceHistory: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Product_Order;
