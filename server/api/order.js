const router = require('express').Router();
const {Product_Order} = require('../db/models');
const Order = require('../db/models/order');
const {Product} = require('./product');

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
    console.err(err);
  }
});

// router.put('/:id', async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     res.json(product);
//   } catch (err) {
//     console.err(err);
//   }
// });

module.exports = router;
