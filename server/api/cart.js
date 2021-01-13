// const router = require('express').Router()
// const Cart = require('../models/cart')

// router.get('/', async (req, res, next) => {
//   try {
//     const items = await Cart.findAll();

//     res.send(items)
//   } catch (error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const item = await Cart.findByPk(req.params.id)
//     if (!item) res.sendStatus(404)
//     else {
//       await item.destroy()
//       res.sendStatus(200)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// module.exports = router
