const Router = require('koa-router');

const wrapper = require('../util/wrapper');

const router = new Router();

router.prefix('/admin');

module.exports = router;

router.get('/all', async (ctx, next) => {
  let list = [
    {
      id: 1,
      name: '11111111111111',
    },
    {
      id: 2,
      name: '22222222222222',
    },
    {
      id: 3,
      name: '33333333333333',
    },
  ];

  ctx.body = await wrapper(list);
});

