const Router = require('koa-router');

const wrapper = require('../util/wrapper');
const checkError = require('../util/checkError');

const router = new Router();

router.prefix('/api/system');

module.exports = router;

router.get('/all', async (ctx, next) => {
  ctx.body = await wrapper('ok');
});
