const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
	contentBase: './dist'
  },
  module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};