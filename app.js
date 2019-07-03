var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
//我是用ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//頁面設定
var index = require('./routes/index');
var depression = require('./routes/depression');
var about = require('./routes/about');
var anxiety = require('./routes/anxiety');
var mad = require('./routes/mad');
var food = require('./routes/food');

//導過去
app.use('/',index);
app.use('/about',about);
app.use('/depression', depression);
app.use('/anxiety', anxiety);
app.use('/food', food);
app.use('/mad', mad);





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
