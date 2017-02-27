const Koa = require('koa'),
  convert = require('koa-convert'),
  serve = require('koa-static'),
  webpack = require('webpack'),
  path = require('path'),
  devMiddleware = require('koa-webpack-dev-middleware'),
  hotMiddleware = require('koa-webpack-hot-middleware'),
  argv = process.argv,
  config = require('./webpack.dev.config')({
    module: ~argv.indexOf('--env.module') ?
      argv[argv.indexOf('--env.module') + 1] :
      false
  }),
  app = new Koa(),
  compiler = webpack(config),
  port = process.env.port || 3000

app.use(convert(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.use(serve(path.resolve(__dirname, '../public')))
app.listen(port)
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
