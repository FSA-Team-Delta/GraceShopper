const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  types: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  },
  rarity: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'common'
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Product
