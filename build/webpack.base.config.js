const path = require('path'),
  webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'home/bundle': './src/home',
    'login/bundle': './src/login'
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
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    redux: 'window.Redux',
    'react-redux': 'window.ReactRedux',
    superagent: 'window.superagent'
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)})
  ]
}
