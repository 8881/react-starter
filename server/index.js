'use strict';

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}

const Koa = require('koa');
const kcors = require('kcors');
const KoaBody = require('koa-body');
const jwtKoa = require('koa-jwt');

const app = new Koa();

const PORT = process.env.PORT || 9091;

const auth = require('./api/auth');
const admin = require('./api/admin');
const system = require('./api/system');

app.use((ctx, next) => (
  next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        status: 401,
        msg: err.originalError ? err.originalError.message : err.message,
        data: null,
      };
    } else {
      throw err;
    }
  })
));

app.use(KoaBody());
app.use(kcors());
app.use(system.routes());
app.use(auth.routes());

// 后台需要走token校验
const jwtMiddleWare = jwtKoa({
  secret: 'react-starter',
});

app.use(jwtMiddleWare);
app.use(admin.routes());

app.use(async (ctx, next) => {
  ctx.body = 'oops.';
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
