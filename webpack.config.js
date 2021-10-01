const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

let buildMode = 'development'

if (process.env.NODE_ENV === 'production') {
  buildMode = 'production'
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/index.js'),
  },
  mode: buildMode,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: '[hash][ext][query]',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(ico|png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // plugins
  plugins: [new ESLintPlugin()],
}
