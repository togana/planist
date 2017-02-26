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

// ユーザー詳細
const show = (ctx) => {
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
};
