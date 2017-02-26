const path = require('path'),
  webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '..'),
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src'
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'superagent'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]!sass-loader'
    }, {
      test: /\.(jpg|png|gif|webp)$/,
      loader: 'url-loader?limit=8000'
    }]
  },
  resolve: {
    modules: [
      './src',
      'node_modules'
    ],
    extensions: ['.js', '.json', '.scss']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      filename: '[name].js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
