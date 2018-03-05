const match = (url) => (name) => {
  const reg = new RegExp(`^/api/${name}`);
  return reg.test(url);
};

const api = (ctx, next) => {
  const { request: { method }, originalUrl } = ctx;
  console.log(method, originalUrl);
  if (/^\/api\/foo/img.test(originalUrl)) {
    ctx.body = 'foo';
  }

  if (/^\/api\/test/img.test(originalUrl)) {
    ctx.body = 'test';
  }

};

module.exports = api;
