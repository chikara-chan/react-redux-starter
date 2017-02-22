const path = require('path'),
  webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      './src',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
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
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
          cacheDirectory: true
      }
    }, {
      test: /\.css$/,
      loaders: [
        'style',
        'css'
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
        'sass'
      ]
    }, {
      test: /\.(jpg|png|gif|webp)$/,
      loader: 'url?limit=8000'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  resolve: {extensions: ['', '.js', '.json', '.scss']},
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      filename: '[name].js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)})
  ]
}
