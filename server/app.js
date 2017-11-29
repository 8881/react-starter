if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(9001, () => {
  console.log(`[server] http://localhost:9001`);
});
