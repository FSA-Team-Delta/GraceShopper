const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  shippingOption: {
    type: Sequelize.STRING,
    defaultValue: '2 Week Ground Shipping'
  }
});

module.exports = Order;
