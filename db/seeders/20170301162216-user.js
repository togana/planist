module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: 'c591c386-5360-49a7-b9b6-c168d90b1d3b',
      name: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '80eed615-be37-4aeb-b533-3d0b7a9ee31c',
      name: 'user2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
