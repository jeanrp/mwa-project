var createError = require('http-errors');
var express = require('express');
var customerSellersRoute = require('./routes/customer-sellers');
var mongoose = require('mongoose');
var app = express();


const uri = "mongodb+srv://admin:admin@vehiclesstore-fxe0j.mongodb.net/test?retryWrites=true&w=majority";

DB = false;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  if (!DB) {
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('connected', () => {
      DB = true;
    });
    db.on('error', () => {
      DB = false;
      console.log('MongoDB connection error:');
    });
  }
  next();
});


app.use('/customers-sellers/', customerSellersRoute); 


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
