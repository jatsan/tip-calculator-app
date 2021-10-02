const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/template.html'),
      favicon: path.resolve(__dirname, './src/images/favicon-32x32.png'),
    }),
    new ESLintPlugin(),
  ],
}
