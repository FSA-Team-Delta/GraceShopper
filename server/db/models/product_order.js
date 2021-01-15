const Sequelize = require('sequelize')
const db = require('../db')

const Product_Order = db.define('Product_Order', {
  priceHistory: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Product_Order
