var webpack = require('webpack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'src/app/src/index'),
  ],
  resolveLoader: {
      root: path.resolve(__dirname, 'node_modules')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }]
  },
  output: {
    path: path.resolve(ROOT_PATH, 'src/app/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'src/app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.IP || "localhost",
    port: process.env.port || "8080"
  },
  devtool: 'source-map',  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Lemon Vote',
      template: 'src/app/src/index.ejs'
    })
  ]
};
