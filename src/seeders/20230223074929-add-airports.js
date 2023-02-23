"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "kempegowda Internation Airport",
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysure Airport",
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pune International Airport",
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dubai International Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
