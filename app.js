var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register')
var loginRouter = require('./routes/login')
var macmainRouter = require('./routes/macmain')
var macairRouter = require('./routes/macair')
var macproRouter = require('./routes/macpro')
var imacRouter = require('./routes/imac')
var macminiRouter = require('./routes/macmini')
var imacproRouter = require('./routes/imacpro')
var prodisplayxdrRouter = require('./routes/prodisplayxdr')
var MachxhRouter = require('./routes/Machxh')
var macjxRouter = require('./routes/macjx')
var macpjRouter = require('./routes/macpj')
var xsyhRouter = require('./routes/xsyh')
var wyRouter = require('./routes/wy')
var syyRouter = require('./routes/syy')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter)
app.use('/login',loginRouter)
app.use('/macmain',macmainRouter)
app.use('/macair',macairRouter)
app.use('/macpro',macproRouter)
app.use('/macmini',macminiRouter)
app.use('/imac',imacRouter)
app.use('/imacpro',imacproRouter)
app.use('/prodisplayxdr',prodisplayxdrRouter)
app.use('/Machxh',MachxhRouter)
app.use('/macjx',macjxRouter)
app.use('/macpj',macpjRouter)
app.use('/xsyh',xsyhRouter)
app.use('/wy',wyRouter)
app.use('/syy',syyRouter)



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

module.exports = app;
