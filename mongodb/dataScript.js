var faker = require('faker');
var base64Img = require('base64-img'); 
var ObjectID = require('mongodb').ObjectID;

let carData = require('./brand-models.json');
var fs = require('fs');

let t = 1;

const testFolder = 'images/';

var images = [];

fs.readdirSync(testFolder).forEach(file => {
    var image = base64Img.base64Sync(testFolder + file);
    images.push(image);
}); 

let types = ["seller", "customer"];
 

function generateDocument(i) {
    var car = carData[faker.random.number({min: 0, max: carData.length - 1})];
    var brand = car.brand;
    var model = car.models[faker.random.number({min: 0, max: car.models.length - 1})]; 

    let id_customer_seller = new ObjectID();
    let id_address = new ObjectID();
    var vehicles_ads_id = new ObjectID();
    var proposal_id = new ObjectID();
    let data = {
        "_id": {
            "$oid": id_customer_seller
        },
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(), 
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
                "interestType": types[i % 2],
                "category": "Lorem",
                "vin": faker.random.number() + "",
                "odometer": faker.random.number(({min: 0, max: 300000})),
                "model": model,
                "brand": brand,
                "condition": "Lorem",
                "fuel": "Lorem",
                "color": faker.commerce.color(),
                "transmission": "Lorem",
                "year": faker.random.number({min: 1980, max: 2019}),
                "description": faker.lorem.sentences(),
                "price": +faker.random.number({min: 1000, max: 10000}),
                "title": "Lorem",
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
                "_id":  {
                    "$oid": proposal_id
                },
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

for (let i = 0; i < 41; i++) {
    var docs = generateDocument(i);
    documents.push(docs); 
}

documents.forEach(function (value, index) {
    value.vehicles_ads[0].images[0] = images[index];
    fs.appendFileSync('data.json', JSON.stringify(value) + "\n");
});
 