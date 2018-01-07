const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const util = require('util');
const verify = util.promisify(jwt.verify); // 解密

const wrapper = require('../util/wrapper');
const checkError = require('../util/checkError');

const secret = 'react-starter';

const router = new Router();

router.prefix('/api/auth');

module.exports = router;

router.post('/check', async (ctx, next) => {
  const token = ctx.request.headers.authorization;
  if (!token) {
    ctx.body = await wrapper(new Error('请求有误.'));
    return false;
  }

  const payload = await verify(token, secret).catch(ex => {
    console.log(ex.message);
  });

  if (!payload) {
    ctx.body = wrapper(new Error('请登录'));
    return false;
  }

  const user = {
    username: payload.username,
  };

  ctx.body = wrapper(user);
});

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    ctx.body = await wrapper(new Error('请求有误.'));
    return false;
  }

  const token = jwt.sign({ username, }, secret, { expiresIn: '1h' });  //token签名 有效期为1小时

  ctx.body = wrapper(token);
});

router.post('/logout', async (ctx, next) => {
  const token = ctx.request.headers.authorization;
  if (!token) {
    ctx.body = await wrapper(new Error('请求有误.'));
    return false;
  }
  console.log(token);
  ctx.body = await wrapper(token);
});
