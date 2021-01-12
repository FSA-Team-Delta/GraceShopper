const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  dateOfPurchase: {
    type: Sequelize.DATE,
    allowNull: false
  },
  numberOfItems: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = Order
