const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack')
let entry = {
}

fs.readdirSync(path.resolve(__dirname, '../src')).forEach(filename => {
  if (!~['.DS_Store', 'layout', 'shared'].indexOf(filename)) {
    entry[`${filename}/bundle`] = `./src/${filename}`
  }
})

module.exports = function(env) {
  let modules

  if (env && typeof env.module === 'string') {
    modules = env.module.split(/,/)
    entry = modules.reduce((entry, module) => {
      entry[`${module}/bundle`] = `./src/${module}`

      return entry
    }, {
    })
  }

  return {
    context: path.resolve(__dirname, '..'),
    entry,
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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }
}
