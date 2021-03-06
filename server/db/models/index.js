const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Sequelize = require('sequelize');
const Product_Order = require('./product_order');

Product.belongsToMany(Order, {
  through: Product_Order,
});
Order.belongsToMany(Product, {through: Product_Order});

User.hasMany(Order);

Order.belongsTo(User);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  Product_Order,
};
