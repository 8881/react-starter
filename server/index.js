'use strict';

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}

const path = require('path');
const pingme = require('pingme');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chokidar = require('chokidar');

const app = require('./server');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 9090;

if (process.env.NODE_ENV === 'development') {
  const devServer = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    disableHostCheck: true,
    stats: {
      colors: true
    },
    proxy: {
      '**': `http://localhost:${PORT + 1}`,
    },
  });

  // webpack-dev-middleware
  devServer.middleware.waitUntilValid(() => {

    // hot reload
    const watcher = chokidar.watch(__dirname, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    });
    watcher.on('ready', () => {
      console.log('>>>>>>> ', 'watcher ready');

      // start the koa server
      app.listen(PORT + 1, () => {
        console.log('>>>>>>> ', `http://localhost:${PORT+1}`);
      });

      function deleteCache(nodeModulePath) {
        try {
          var nodeModule = require.cache[nodeModulePath]
          var childrenCache = nodeModule && nodeModule.children || [];
          childrenCache.forEach(function (childCache) {
            deleteCache(childCache.id)
            delete require.cache[childCache.id]
          })
          delete require.cache[nodeModulePath]
        } catch (e) {
          console.log('[Error]', e);
        }
      }

      const serverFile = Object.keys(require.cache).filter((id) => /[\/\\]server[\/\\]/.test(id));
      watcher.on('all', (event, path) => {
        serverFile.forEach(id => {
          if (path === id) {
            console.log('[clear] ', Date.now());
            deleteCache(id);
          }
        });
      });
    });
  });

  // start webpack dev server
  devServer.listen(PORT, () => {
    console.log('>>>>>>> ', `devServer start at ${PORT+1}`);
  });
} else {
  // start the koa server
  app.listen(PORT, () => {
    console.log('>>>>>>> ', `http://localhost:${PORT}`);
  });

  pingme({
    app,
    status: f => f,
    ping: f => f,
  });
}