var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// *** Pull in routers here.
var indexRouter = require('./routes/index');
var emailRouter = require('./routes/sendEmail');
var fileRouter = require('./routes/getFile');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// This lets the Express app serve compiled React code, stored in the build folder:
app.use(express.static( path.resolve("./build")));

// *** Apply routers here.
app.use('/', indexRouter);
app.use('/sendEmail', emailRouter);
app.use('/getFile', fileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// Apply routers here:
app.use('/', indexRouter);
app.use('/getFile', fileRouter);

module.exports = app; 