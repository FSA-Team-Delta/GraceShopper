const router = require('express').Router();
const {Product_Order} = require('../db/models');
const Order = require('../db/models/order');
const {Product} = require('../db/models');
const {restart} = require('nodemon');

router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        completed: false,
        userId: req.session.passport.user,
      },
    });
    res.send(await order.getProducts());
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        completed: false,
        userId: req.session.passport.user,
      },
    });
    if (order) {
      order.completed = true;
      await order.save();
      res.send(order);
    }
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const quantity = req.body.quantity || 1;

    const cartItem = await Product_Order.findByPk(req.params.id);

    res.send(await cartItem.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.session);
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

router.delete('/:id', async (req, res, next) => {
  try {
    const userId = req.session.passport.user;
    const productId = req.params.id;

    const order = await Order.findOne({
      where: {
        userId,
        completed: false,
      },
    });

    await order.removeProduct(productId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
