const normalizr = require('normalizr');

const schema = normalizr.schema;
const normalize = normalizr.normalize;

const find = () => {
  // ダミーデータ(DBからの取得予定)
  const dummy = [
    {
      id: 'c591c386-5360-49a7-b9b6-c168d90b1d3b',
      name: 'user1',
    },
    {
      id: '80eed615-be37-4aeb-b533-3d0b7a9ee31c',
      name: 'user2',
    },
  ];

  const userSchema = new schema.Entity('users');
  const userListSchema = new schema.Array(userSchema);

  const normalizedData = normalize(dummy, userListSchema);
  return normalizedData;
};

module.exports = { find };
