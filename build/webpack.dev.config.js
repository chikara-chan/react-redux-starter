const webpack = require('webpack'),
  merge = require('webpack-merge'),
  baseConfig = require('./webpack.base.config')

module.exports = function(env) {
  const base = baseConfig(env)

  Object.keys(base.entry).forEach(key => {
    base.entry[key] = [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch'
    ].concat(base.entry[key])
  })

  return merge(base, {
    devtool: 'eval-source-map',
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
}
