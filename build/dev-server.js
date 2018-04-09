
var port = process.env.port ||  config.dev.port

var proxyTab  = config.dev.proxyTable

var app = express()

var appData = require('../data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var apiRoutes = express.Router()

apiRoutes.get('/seller',function(req,res){
    res.json({
      errno: 0,
      data: seller
    })
})

apiRoutes.get('/goods',function(req,res){
  res.json({
    errno: 0,
    data: goods
  })
})

apiRoutes.get('/ratings',function(req,res){
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api'.apiRoutes)









var devMiddleware = require = require('webpack-dev-middleware')(compiler,{
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
