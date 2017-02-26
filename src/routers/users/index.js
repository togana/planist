// ダミーデータ(1以上の整数をidに持つuserデータ)
const dummy = {
  ids: [1, 2],
  results: {
    1: {
      name: 'user1',
    },
    2: {
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
    const id = dummy.ids[dummy.ids.length - 1] + 1;
    // dummyの登録処理
    dummy.ids.push(id);
    dummy.results[id] = {
      name: ctx.request.body.name,
    };
    ctx.body = { result: true };
  } else {
    ctx.body = { result: false };
  }
};

// ユーザー詳細
const show = (ctx) => {
  console.log(ctx);
  const id = +ctx.params.id;
  if (dummy.ids.indexOf(id) !== -1) {
    ctx.body = dummy.results[id];
  } else {
    ctx.body = {};
  }
};

module.exports.init = (router) => {
  router.get('/users', list);
  router.get('/users/:id(\\d+)', show);
  router.post('/users', create);
};
