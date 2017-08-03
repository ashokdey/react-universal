// using ES6 on the server by requireing babel and giving presets 
require('babel-core/register')({
  "presets": ["react", "es2015", "stage-0"]
});

// require custom configuration file 
const config = require('./config');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// require the proxy package 
const httpProxy = require('http-proxy');

//require the request handler 
const requestHandler = require('./requestHandler');

// create the express app instance 
const app = express();

// create proxy to the API server 
const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001',
  changeOrigin: true
});

//middleware to serve the proxy 
app.use('/api', function(req, res) {
  apiProxy.web(req,res);
});


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../public', 'favicon.png')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));

// set views folder location
app.set('views', path.resolve(__dirname, './views'));

// set ejs as view engine 
app.set('view engine', 'ejs');

// use custom middleware to handle requests
app.use(requestHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
