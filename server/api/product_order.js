// const router = require('express').Router();
// const {Product_Order, Order, Product, User} = require('../db/models');

// //Post route /api/product_order to create a new product order
// router.post('/', async (req, res, next) => {
//   try {
//     const {orderId, productId, quantity, priceHistory} = req.body;
//     const productInfo = await Product_Order.create({
//       orderId,
//       productId,
//       quantity,
//       priceHistory,
//     });
//     const prod = await Product.findById(productInfo.productId);
//     const product_orderResponse = {
//       ...productInfo.dataValue,
//     };
//   } catch (err) {
//     next(err);
//   }
// });

// // router.delete('/:product_orderId', async (req, res, next) => {
// //   try {
// //     const
// //   }
// // })

// router.get('/', async (req, res, next) => {
//   try {
//     const item = await Product_Order.findAll();
//     res.send(item);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     const item = await Product_Order.create(req.body);
//     res.json(item);
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;