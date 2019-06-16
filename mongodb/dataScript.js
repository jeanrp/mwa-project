var faker = require('faker');
var base64Img = require('base64-img'); 
var ObjectID = require('mongodb').ObjectID;

var fs = require('fs');

let t = 1;

const testFolder = 'images/';

var images = [];

fs.readdirSync(testFolder).forEach(file => {
    var image = base64Img.base64Sync(testFolder + file);
    images.push(image);
}); 

let types = ["seller", "customer"];
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

function generateDocument(i) {
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

for (let i = 0; i < 20; i++) {
    var docs = generateDocument(i);
    documents.push(docs); 
}

documents.forEach(function (value, index) {
    value.vehicles_ads[0].images[0] = images[index];
    fs.appendFileSync('data.json', JSON.stringify(value) + "\n");
});
 