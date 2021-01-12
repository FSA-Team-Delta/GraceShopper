const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  numberOfItems: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  discounts: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Cart
