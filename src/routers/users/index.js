const uuidV4 = require('uuid/v4');

// ダミーデータ(1以上の整数をidに持つuserデータ)
const dummy = {
  ids: [
    'c591c386-5360-49a7-b9b6-c168d90b1d3b',
    '80eed615-be37-4aeb-b533-3d0b7a9ee31c',
  ],
  results: {
    'c591c386-5360-49a7-b9b6-c168d90b1d3b': {
      name: 'user1',
    },
    '80eed615-be37-4aeb-b533-3d0b7a9ee31c': {
      name: 'user2',
    },
  },
};

// ユーザー一覧
const list = (ctx) => {
  ctx.body = dummy;
};

// ユーザー追加
const create = (ctx) => {
  if (ctx.request.body.name) {
    const id = uuidV4();
    // dummyの登録処理
    dummy.ids.push(id);
    dummy.results[id] = {
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
  if (dummy.ids.indexOf(id) !== -1) {
    ctx.body = dummy.results[id];
  } else {
    ctx.body = {};
  }
};

module.exports.init = (router) => {
  router.get('/users', list);
  router.get('/users/:id', show);
  router.post('/users', create);
};
