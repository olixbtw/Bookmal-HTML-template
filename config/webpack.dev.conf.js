const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const StylelintPlugin = require('stylelint-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 3001,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  // module: {
  //   rules: [{
  //     enforce: 'pre',
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     loader: 'eslint-loader',
  //   }]
  // },
  plugins: [
    new StylelintPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
