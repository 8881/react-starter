const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router-dom/StaticRouter').default;
const Routes = require('../../lib/routes');

const view = (ctx, next) => {
  const { originalUrl } = ctx;
  const context = {};
  const markup = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, {
        location: originalUrl,
        context: context,
      },
      React.createElement(Routes)
    )
  );

  if (markup === '') {
    ctx.body = 'opps.';
    return false;
  }
  let html = `
<!doctype html>
  <html lang="zh-hans">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no">
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
      <title>${`server rendering`}</title>
      <style></style>
    </head>
    <body>
      <div id="${`test1`}">${markup}1234567</div>
      <script>window.initialState = '';</script>
    </body>
</html>
`;

  // ctx.body = html.replace(/\s{2,}/img, '');
  ctx.body = html.trim();
};

module.exports = view;
