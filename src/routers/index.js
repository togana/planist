const users = require('./users');

module.exports.init = (router) => {
  users.init(router);
};
