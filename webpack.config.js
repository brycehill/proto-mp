var path = require('path')

module.exports = {

    entry: [
        'webpack-dev-server/client?/',
        './src/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        }, {
            test: /.styl$/,
            loader: 'style!css!stylus',
            exclude: /node_modules/
        }
      ]
    },

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },

    devServer: {
        historyApiFallback: true,
        proxy: {
            '*': 'http://localhost:9090'
        }
    }
}
