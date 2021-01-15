const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  dateOfPurchase: {
    type: Sequelize.DATE,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalPriceOfOrder: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Order;
