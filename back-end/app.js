
require('./api/config/DBConnection');
var express = require('express'),
router = express.Router(),
  logger = require('morgan'),
  cors = require('cors'),
  helmet = require('helmet'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  routes = require('./api/routes'),
  config = require('./api/config/Config'),
  app = express();
  const authentication = require('../back-end/api/controllers/authentication')(router);
  

app.set('secret', config.SECRET);

app.use(logger(process.env.NODE_ENV === 'Production' ? 'combined' : 'dev'));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use('/api', routes);

// 500 internal server error handler
app.use(function(err, req, res, next) {
  if (err.statusCode === 404) return next();
  res.status(500).json({
    // Never leak the stack trace of the err if running in Production mode
    err: process.env.NODE_ENV === 'Production' ? null : err,
    msg: '500 Internal Server Error',
    data: null
  });
});
app.use('/authentication' , authentication);
console.log('test');
// 404 error handler
app.use(function(req, res) {
  res.status(404).json({
    err: null,
    msg: '404 Not Found',
    data: null
    
  });
}); 

module.exports = app;

