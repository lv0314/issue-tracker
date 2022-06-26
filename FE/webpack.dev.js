const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');
const common = require('./webpack.common');

dotenv.config();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: process.env.SERVER_ADDRESS,
        pathRewrite: { '/api': '/' },
      },
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
