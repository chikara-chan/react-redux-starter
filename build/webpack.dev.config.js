const webpack = require('webpack'),
  merge = require('webpack-merge'),
  baseConfig = require('./webpack.base.config'),
  entry = baseConfig.entry
let devEntry = {}

Object.keys(entry).forEach(key => {
  const hot = [
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  ]

  hot.push(entry[key])
  devEntry[key] = hot
})

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  entry: devEntry,
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]!sass-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
