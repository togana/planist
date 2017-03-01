const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const routers = require('./routers');
const models = require('./models');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodyParser());

routers.init(router);
app.use(router.routes());
app.use(router.allowedMethods());

models.sequelize.sync().then(() => {
  app.listen(3000);
});
