const router = require('express').Router();
const {Product_Order} = require('../db/models');
const Order = require('../db/models/order');
const {Product} = require('../db/models');

// console.log(Order.prototype);

//POST request
//find all orders
//find if they have any incomplete
//if we have user id
//find all orders where userid is one and there is false
//if there's none then we use findOrCreate sequelize method
//now we have access to an order id
//we can use it to put details into our through table
//can do it all in one request
//first find order
//using that order, add details
//by directly using sequelize methods as a regular table
//req.body is an object that takes as much info as we need
//let quantity = req.body.quantity
//have request body, find an order, now we have all we need to put details in the through

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.json(await order.getProducts());
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    // console.log('$$$$$$$$$$$$$$$$', req.body);

    const order = await Order.findByPk(req.params.id);
    const product = await Product.findByPk(req.body.id);

    await order.addProduct(product);
    let test = await order.getProducts();
    console.log('$$$$$$$$$$$$$$$', test[0]);

    res.send(await order.getProducts());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
