const Koa = require('koa'),
  convert = require('koa-convert'),
  serve = require('koa-static'),
  webpack = require('webpack'),
  path = require('path'),
  devMiddleware = require('koa-webpack-dev-middleware'),
  hotMiddleware = require('koa-webpack-hot-middleware'),
  config = require('./webpack.dev.config'),
  app = new Koa(),
  compiler = webpack(config),
  port = process.env.port || 3000

app.use(convert(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.use(serve(path.join(__dirname, 'views')))
app.listen(port)
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
