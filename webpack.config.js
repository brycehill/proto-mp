var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.js' // Your appʼs entry point
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
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }

}
