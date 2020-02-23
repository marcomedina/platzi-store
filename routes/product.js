var express = require('express');
var router = express.Router();

//data
var products = require('../data/products.json');

router.get('/:productId', function(req, res, next) {
  var id = req.params.productId;
  res.render('product', {
    title: 'Platzi Store',
    product: products[id]
  });
});

module.exports = router;
