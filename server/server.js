// require custom configuration file 
const config = require('./config');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// require the proxy package 
const httpProxy = require('http-proxy');
// require the routes file 
const BookRoutes = require('./routes');

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



// replaced default with my own code from server.js
app.get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

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
  res.render('error');
});

module.exports = app;
