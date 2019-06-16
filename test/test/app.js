var createError = require('http-errors');
var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var app = express();

var CustomerSeller = require('./models/user');

const uri = "mongodb+srv://admin:admin@vehiclesstore-fxe0j.mongodb.net/VehiclesStore?retryWrites=true&w=majority";

DB = false;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  if (!DB) {
    mongoose.connect(uri, { keepAlive: 1 });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    console.log(db);

    db.once('open', function () {
      console.log("Successfully connected");

      new CustomerSeller({
        firstName: "teste"
      }).save(function (err, doc)
      {
          console.log(err);
          console.log(doc);
      });

      CustomerSeller.findById({ firstName: "teste" }, (err, res) => {
        console.log(res);
        console.log(err);
      });

      DB = true;
    });

    db.on('error', () => {
      DB = false;
      console.log('MongoDB connection error:');
    });
  }
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

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
