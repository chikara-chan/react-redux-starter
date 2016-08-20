var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common/index.js');
module.exports = {
    entry: {
        'order-monitor/index': './src/order-monitor/scripts/index.js'
    },
    output: {
        path: './build/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: "url?limit=10000"
        }]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'redux': 'window.Redux',
        'react-redux': 'window.ReactRedux',
        'react-bootstrap': 'window.ReactBootstrap',
        'superagent': 'window.superagent',
    },
    plugins: [commonsPlugin]
};