const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: {
    server: './index.js',
  },
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()], // This avoids an error with webpack and Express
  module: {
    rules: [{
      // Transpiles ES6-8 into ES5
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
}