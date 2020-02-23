var express = require('express');
var router = express.Router();

//data
var products = require('../data/products.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Platzi Store',
    products: products
  });
});

router.get('/subscription', function(req, res, next) {
  res.render('subscription', {
    title: 'Platzi Store',
    products: products
  });
});

router.post('/success', function(req, res, next) {
  res.render('success', {
    title: 'Platzi Store',
    details: req.body.details 
  });
});

module.exports = router;
