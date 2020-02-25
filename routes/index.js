var express = require("express");
var router = express.Router();

//Database
var db = require("../models");

/* GET home page. */
router.get("/", function(req, res, next) {
  return db.Product.findAll()
    .then(products => {
      res.render("index", {
        title: "Platzi Store",
        products: products
      });
    })
    .catch(err => {
      console.log("There was an error querying products", JSON.stringify(err));
      return res.send(err);
    });
});

router.get("/subscription", function(req, res, next) {
  res.render("subscription", {
    title: "Platzi Store"
  });
});

router.post("/success", function(req, res, next) {
  const orderDetails = JSON.parse(req.body.details);
  return db.Order.create({
    paypalId: orderDetails.id,
    name: orderDetails.payer.name.given_name,
    status: orderDetails.status,
    email: orderDetails.payer.email_address,
    meta: JSON.stringify(orderDetails)
  })
  .then(order => {
    res.render("success", {
      title: "Platzi Store",
      details: req.body.details
    });
  })
  .catch(err => {
    console.log(
      "***There was an error creating an order",
    );
    return res.status(400).send(err);
  });
});

module.exports = router;
