const normalizr = require('normalizr');

const schema = normalizr.schema;
const normalize = normalizr.normalize;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
  }, {
    classMethods: {
      findNormalize: async () => {
        const userlist = await User.findAll();
        const fixData = userlist.map(v => v.dataValues);
        const userSchema = new schema.Entity('users');
        const userListSchema = new schema.Array(userSchema);

        const normalizedData = normalize(fixData, userListSchema);
        return normalizedData;
      },
    },
  });
  return User;
};
