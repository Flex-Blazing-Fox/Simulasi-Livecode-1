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
        imageUrl: 'https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650',
        userId: 1,
        createdAt: '2020-06-12T16:22:40.469Z',
        updatedAt: '2020-06-12T16:22:40.469Z',
      },
      {
        imageUrl: 'https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650',
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
