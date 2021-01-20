const router = require('express').Router();
const {Product_Order} = require('../db/models');
const Order = require('../db/models/order');
const {Product} = require('../db/models');

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
    const userId = req.session.passport.user;
    const productId = req.body.id;

    const [order, wasCreated] = await Order.findOrCreate({
      where: {
        completed: false,
        userId,
      },
      defaults: {
        userId,
      },
    });

    const product = await Product.findByPk(productId);

    await order.addProduct(product);

    console.log(req.body);

    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    const product = await Product.findByPk(req.body.id);

    await order.addProduct(product);

    res.send(await order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
