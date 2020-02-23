"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Playera",
          price: 100,
          image: "tshirt.png",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          name: "Gorra",
          price: 40,
          image: "hat.png",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          name: "Botella de Agua",
          price: 60,
          image: "bottle.png",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          name: "Carcasa iPhone",
          price: 30,
          image: "case.png",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
