const Sequelize = require('sequelize')
const db = require('../db')

const Checkout = db.define('checkout', {
  numberOfItems: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  discounts: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  },
  typeOfPayment: {
    type: Sequelize.STRING
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = Checkout
