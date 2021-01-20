const router = require('express').Router();
const {Product_Order} = require('../db/models');
const Order = require('../db/models/order');

router.get('/', async (req, res, next) => {
  try {
    // console.log(Order.prototype);
    const order = await Order.findAll();
    console.log('ORDER FIND ALL', order);
    res.json(await order[0].getProducts());
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

//Fix put routes for checkout...
// router.put('/', async (req, res, next) => {
//   try {
//     const id = req.params;
//     console.log('id console', id);
//     const order = await Order.findByPk(id);
//     res.send(await order.update(req.body));
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
