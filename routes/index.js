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
  res.render("success", {
    title: "Platzi Store",
    details: req.body.details
  });
});

module.exports = router;
