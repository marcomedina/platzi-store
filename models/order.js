'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    paypalId: DataTypes.STRING,
    status: DataTypes.STRING,
    meta: DataTypes.TEXT,
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};