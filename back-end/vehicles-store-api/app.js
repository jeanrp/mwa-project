var createError = require('http-errors');
var express = require('express');
var customerSellersRoute = require('./routes/customer-sellers');
var loginRoute = require('./routes/login');
var mongoose = require('mongoose'); 
var cors = require('cors')
var config = require('./config');

var app = express();

const uri = `mongodb+srv://${config.userDb}:${config.passwordDb}@vehiclesstore-fxe0j.mongodb.net/${config.dataBaseName}?retryWrites=true&w=majority`;

console.log(uri);
DB = false;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(function (req, res, next) {
  if (!DB) { 
    mongoose.connect(uri, { keepAlive: 1 });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    console.log(db);
    
    mongoose.set('debug', true);
    
    db.on('connected', () => {
      console.log("Successfully connected");
      DB = true;
    });
    db.on('error', () => {
      DB = false;
      console.log('MongoDB connection error:');
    });

  }
  next();
});

app.use('/customers-sellers', customerSellersRoute);
app.use('/authentication', loginRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
