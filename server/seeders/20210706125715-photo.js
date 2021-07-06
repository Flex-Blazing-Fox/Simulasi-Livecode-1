'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Photos', [
      {
        imageUrl: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        userId: 1,
        createdAt: '2020-06-12T16:22:40.469Z',
        updatedAt: '2020-06-12T16:22:40.469Z',
      },
      {
        imageUrl: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        userId: 2,
        createdAt: '2020-06-12T16:22:40.469Z',
        updatedAt: '2020-06-12T16:22:40.469Z',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Photos', null, {})
  },
}
