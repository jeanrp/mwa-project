var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var faker = require('faker');
var base64Img = require('base64-img');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carsRouter = require('./routes/cars');
var ObjectID = require('mongodb').ObjectID;


var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            fs.readFile(path.resolve(dirname, filename), 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename, content);
            });
        });
    });
}

var app = express();

const MongoClient = require('mongodb').MongoClient;
const client = require('mongodb').MongoClient('mongodb://localhost:27017');

let db;

app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('cars').collection('cars');
            req.db = db;
            next();
        });
    } else {
        req.db = db;
        next();
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

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


var images64array = [];

let t = 1;
// console.log(t);

const testFolder = 'images/';

var images = [];

fs.readdirSync(testFolder).forEach(file => {
    var image = base64Img.base64Sync(testFolder + file);
    images.push(image);
});

// console.log("size of images" + images.length);

let debug = 1;

// readFiles(path.resolve(__dirname, 'images/'), function (filename, content) {
//     // console.log(filename)
//     base64Img.base64('images/car.png', function (err, data) {
//         fs.appendFileSync('image.json', data);
//         // fs.appendFileSync('data.json', "\n")
//         // console.log(data);
//     });
//     // images64array.push(filename)
//
// }, function (error) {
//     throw err;
// });
// console.log(t);

let types = ["seller", "buyer"];
var brands = [
    {
        "name": "BUICK"
    },
    {
        "name": "CADILLAC"
    },
    {
        "name": "CAPARO"
    },
    {
        "name": "CARBONTECH"
    },
    {
        "name": "CARICE"
    },
    {
        "name": "CHANG'AN"
    },
    {
        "name": "CHANGHE"
    },
    {
        "name": "CHERY"
    },
    {
        "name": "CHEVROLET"
    },
    {
        "name": "CHEVRON"
    },
    {
        "name": "CITROËN"
    },
    {
        "name": "CHRYSLER"
    },
    {
        "name": "COMMUTER CARS"
    }, {
        "name": "EQUUS"
    },
    {
        "name": "FORD"
    },
    {
        "name": "FORD AUSTRALIA"
    },
    {
        "name": "FORD GERMANY"
    },
    {
        "name": "FORNASARI"
    },
    {
        "name": "FRASER"
    },

    {
        "name": "HENNESSEY"
    },
    {
        "name": "HINDUSTAN"
    },
    {
        "name": "HOLDEN"
    },
    {
        "name": "HONDA"
    },
    {
        "name": "HONGQI"
    },
    {
        "name": "HRADYESH"
    },
    {
        "name": "HTT TECHNOLOGIES"
    },
    {
        "name": "HULME"
    },
    {
        "name": "HYUNDAI"
    },
    {
        "name": "ICML"
    },
    {
        "name": "IFR"
    },
    {
        "name": "IRAN KHODRO"
    },
    {
        "name": "IKCO"
    },
    {
        "name": "IMPERIA"
    },
    {
        "name": "INFINITI"
    },
    {
        "name": "IVM"
    },
    {
        "name": "JAGUAR"
    },
    {
        "name": "JEEP"
    },
    {
        "name": "JENSEN MOTORS"
    },
    {
        "name": "JETCAR"
    },
    {
        "name": "JONWAY"
    },
    {
        "name": "KORRES"
    },
    {
        "name": "KIA"
    },
    {
        "name": "KIAT"
    },
    {
        "name": "KISH KHODRO"
    },
    {
        "name": "KTM"
    },
    {
        "name": "LADA"
    },
    {
        "name": "LAMBORGHINI"
    },
    {
        "name": "LANCIA"
    },
    {
        "name": "LAND ROVER"
    },
    {
        "name": "LEOPARD"
    },
    {
        "name": "LEXUS"
    },
    {
        "name": "LI-ION"
    },
    {
        "name": "LIFAN"
    },
    {
        "name": "LIGHTNING"
    },
    {
        "name": "LINCOLN"
    },
    {
        "name": "LISTER"
    },
    {
        "name": "LOTUS CARS"
    },
    {
        "name": "LUCRA CARS"
    },
    {
        "name": "UAZ"
    },
    {
        "name": "VEPR"
    },
    {
        "name": "VOLKSWAGEN"
    },
    {
        "name": "VOLVO"
    },
    {
        "name": "WHEEGO"
    },
    {
        "name": "WIESMANN"
    },
    {
        "name": "XENIA"
    },
    {
        "name": "YES!"
    },
    {
        "name": "YOUABIAN PUMA"
    },
    {
        "name": "ZASTAVA AUTOMOBILES"
    },
    {
        "name": "ZENDER CARS"
    },
    {
        "name": "ZENOS CARS"
    },
    {
        "name": "ZENVO"
    }

];
var cars = [];

// console.log("size " + images64array.length);


function generateDocument(i) {
    let id_customer_seller = new ObjectID();
    let id_address = new ObjectID();
    var vehicles_ads_id = new ObjectID();
    let data = {
        "_id": {
            "$oid": id_customer_seller
        },
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "type": types[i % 2],
        "phone": faker.phone.phoneNumber(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "birthDate": {$date: faker.date.past()},
        "creationDate": {$date: faker.date.past()},
        "address": {
            "_id": {
                "$oid": id_address
            },
            "street": faker.address.streetName(),
            "state": faker.address.state(),
            "city": faker.address.city(),
            "zipcode": faker.address.zipCode()
        },
        "vehicles_ads": [
            {
                "_id": {
                    "$oid": vehicles_ads_id
                },
                "interestType": "Lorem",
                "category": "Lorem",
                "vin": faker.random.number() + "",
                "odometer": faker.random.number(({min: 0, max: 300000})),
                "model": "Lorem",
                "brand": brands[faker.random.number({min: 0, max: brands.length - 1})].name,
                "condition": "Lorem",
                "fuel": "Lorem",
                "color": faker.commerce.color(),
                "transmission": "Lorem",
                "year": faker.random.number({min: 1980, max: 2019}),
                "description": faker.lorem.sentences(),
                "price": +faker.random.number({min: 1000, max: 10000}),
                "title": faker.lorem.word,
                "images": [
                    "Lorem"
                ],
                "creationDate": faker.date.past(),
                "sellDate": {$date: faker.date.past()},
                "customer_seller_id": {
                    "$oid": id_customer_seller
                }
            }
        ],
        "proposals": [
            {
                "description": faker.lorem.sentences(),
                "proposalDate": {
                    $date: faker.date.recent()
                },
                "vehicle_ads_id": {
                    "$oid": vehicles_ads_id
                },
                "customer_seller_id": {
                    "$oid": id_customer_seller
                }
            }
        ]
    };
    return data;
}

var documents = [];

for (let i = 0; i < 20; i++) {
    var docs = generateDocument(i);
    documents.push(docs);
    // fs.appendFileSync('data.json', JSON.stringify(docs));
    // fs.appendFileSync('data.json', "\n")
}


documents.forEach(function (value, index) {
    value.vehicles_ads[0].images[0] = images[index];
    fs.appendFileSync('data.json', JSON.stringify(value) + "\n");
});

// console.log(documents[0].vehicles_ads[0].images[0]);


// app.listen(80, function(){
//     console.log("app running at localhost:4000");
// });
// console.log('teste');

module.exports = app;
