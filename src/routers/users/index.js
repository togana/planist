const modules = require('../../models');

// ユーザー一覧
const list = async (ctx) => {
  const userData = await modules.User.findNormalize();
  ctx.body = userData;
};

// ユーザー追加
const create = async (ctx) => {
  if (ctx.request.body.name) {
    // dummyの登録処理
    const user = await modules.User.create({ name: ctx.request.body.name });
    ctx.body = { result: true, user };
  } else {
    ctx.body = { result: false };
  }
};

// ユーザー詳細
const show = async (ctx) => {
  const id = ctx.params.id;
  const userData = await modules.User.findNormalize();
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
