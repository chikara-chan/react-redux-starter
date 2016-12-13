var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        'order-monitor/index': ['./src/order-monitor/scripts/index.js', 'webpack-hot-middleware/client']
    },
    output: {
        path: __dirname + '/build/',
        filename: '[name].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: "url?limit=10000"
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
      }]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'redux': 'window.Redux',
        'react-redux': 'window.ReactRedux',
        'react-bootstrap': 'window.ReactBootstrap',
        'react-bootstrap-datetimepicker': 'window.ReactBootstrapDatetimePicker',
        'superagent': 'window.superagent',
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss', '.html']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common/index',
          filename: '[name].js'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
};
