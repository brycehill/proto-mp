// var webpack = require('webpack')
// var WebpackDevServer = require('webpack-dev-server')
// var config = require('./webpack.config')

// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     stats: {
//         colors: true
//     },
//     historyApiFallback: true
// }).listen(8080, 'localhost', function (err) {
//     if (err) console.error(err)
//     console.log('Listening at localhost:8080')
// })


var express = require('express')
var path = require('path')
var port = process.env.PORT || 9090
var app = express()

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
