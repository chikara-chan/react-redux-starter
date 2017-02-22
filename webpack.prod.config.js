const path = require('path'),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src',
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
    filename: '[name].js'
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
      loader: ExtractTextPlugin.extract('style', 'css?modules&camelCase&importLoaders=1&localIdentName=[hash:base64:8]!postcss!sass')
    }, {
      test: /\.(jpg|png|gif|webp)$/,
      loader: 'url?limit=8000'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  postcss: [autoprefixer({browsers: ['> 5%']})],
  resolve: {extensions: ['', '.js', '.json', '.scss']},
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      filename: '[name].js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      comments: false
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    new ExtractTextPlugin('[name].css')
  ]
}
