var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var reg = require('./routes/reg') ;
var login = require('./routes/login') ;
var post = require('./routes/post') ;
var logout = require('./routes/logout');

var setting = require('./setting') ;
var session = require('express-session') ;
var MongoStore = require('connect-mongo')(session) ;


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));//__dirname项目所在的实际硬盘地址
app.set('view engine', 'ejs');

console.info('----------------------------') ;
console.info(__dirname) ;//打印的为项目所在的实际硬盘地址
console.info('----------------------------') ;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret:setting.cookieSecret,
    key:setting.db,
    cookie:{maxAge:1000*60*60*24*30},
    store: new MongoStore({
      db:setting.db,
      host:setting.host,
      port:setting.port
    })
})) ;

//路由的配置
app.use('/', routes);
app.use('/login',login) ;
app.use('/reg',reg) ;
app.use('/post',post) ;
app.use('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
