const User = require('./user')
const Checkout = require('./checkout')
const Product = require('./product')
const Cart = require('./cart')
const Order = require('./order')
const Sequelize = require('sequelize')
const Product_Order = require('./product_order')
/**
 *
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Product.belongsToMany(Order, {
  through: Product_Order
})
Order.belongsToMany(Product, {through: Product_Order})

User.hasMany(Order)

// console.log(Object.keys(Product_Order.__pr))

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Checkout,
  Product,
  Cart,
  Order,
  Product_Order
}
