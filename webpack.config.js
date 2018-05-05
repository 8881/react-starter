if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}

const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostCssNext = require('postcss-cssnext');
const PostCssImport = require('postcss-import');
const precss = require('precss');

const config = {
  entry: {
    client: './src/client.js',
    vendor: [
      'react', 'react-router', 'react-dom', 'react-redux',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    crossOriginLoading: "anonymous",
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.[p]?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production',
                modules: true,
                localIdentName: '[local]___[hash:base64:8]',
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  PostCssImport, PostCssNext({
                    browsers: [
                      ">1%",
                      "last 4 versions",
                      "not ie < 8"
                    ],
                  }), precss
                ],

              },
            }
          ],
          allChunks: true,
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=image/[name]-[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'url-loader?limit=10000'
      },
    ],
  },
  target: 'web',
  stats: 'errors-only',
  cache: false,
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('vendor.[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
    new htmlPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: true,
      cache: true,
    }),
  ]
};

// TODO  dllplugin
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  );
}

module.exports = config;