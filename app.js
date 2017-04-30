var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var nunjucks = require('nunjucks');
var dateFilter = require('nunjucks-date-filter');

var config = require('./config');

var routes = require('./routes/index');
var messages = require('./routes/messages');
var contact = require('./routes/contact');

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';


app.use(session({
  name: config.connectName,
  secret: config.secretKey,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 30,
    path: '/messages'
  },
  rolling: true
}));

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
var nunjucksEnv = nunjucks.configure('views', {
    autoescape: true,
    express: app
});
dateFilter.setDefaultFormat('MMM d, Y hh:mm:ss');
nunjucksEnv.addFilter('date', dateFilter);

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  req.lang = req.acceptsLanguages('zh-TW', 'es', 'en');
  next();
});
app.use('/', routes);
app.use('/messages', messages);
app.use('/contact', contact);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if(err.status === 404) {
      res.render('error', {
          title: 'Ray Chang - Resume | error',
          message: err.message,
          error: app.get('env') === 'development' ? err : {}
      });
    } else {
      res.send(err.message)
    }
});


module.exports = app;
