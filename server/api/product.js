const router = require('express').Router();
const Product = require('../db/models/product');

router.get('/', async (req, res, next) => {
  try {
    const item = await Product.findAll();

    res.send(item);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const item = await Product.findByPk(req.params.id);
    if (!item) {
      res.send('Pokemon not found');
    }
    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
