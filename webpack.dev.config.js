var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
        loaders: ['style', 'css', 'postcss', 'sass']
      }]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})],
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
        new webpack.optimize.CommonsChunkPlugin('common/index.js')
    ],
};