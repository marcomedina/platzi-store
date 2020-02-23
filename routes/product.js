var express = require("express");
var router = express.Router();

//Database
var db = require("../models");

router.get("/:productId", function(req, res, next) {
  var id = parseInt(req.params.productId);
  return db.Product.findByPk(id)
    .then(product => {
      res.render("product", {
        title: "Platzi Store",
        product: product
      });
    })
    .catch(err => {
      console.log("***Error getting product", JSON.stringify(err));
      res.status(400).send(err);
    });
});

module.exports = router;
