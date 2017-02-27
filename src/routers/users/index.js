const uuidV4 = require('uuid/v4');
const modules = require('../../models');

const userData = modules.users.find();

// ユーザー一覧
const list = (ctx) => {
  ctx.body = userData;
};

// ユーザー追加
const create = (ctx) => {
  if (ctx.request.body.name) {
    const id = uuidV4();
    // dummyの登録処理
    userData.result.push(id);
    userData.entities.users[id] = {
      id,
      name: ctx.request.body.name,
    };
    ctx.body = { result: true, id };
  } else {
    ctx.body = { result: false };
  }
};

// ユーザー詳細
const show = (ctx) => {
  const id = ctx.params.id;
  if (userData.result.indexOf(id) !== -1) {
    ctx.body = userData.entities.users[id];
  } else {
    ctx.body = {};
  }
};

module.exports.init = (router) => {
  router.get('/users', list);
  router.get('/users/:id', show);
  router.post('/users', create);
};
