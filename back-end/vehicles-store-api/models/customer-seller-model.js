const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const String = mongoose.Schema.Types.String;
const Date = mongoose.Schema.Types.Date;
const Number = mongoose.Schema.Types.Number;


var customerSellerSchema = new mongoose.Schema({
    _id: { type: ObjectId },
    firstName: { type: String },
    lastName: { type: String },
    type: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
    birthDate: { type: Date },
    creationDate: { type: Date },
    address: {
        _id: { type: ObjectId },
        street: { type: String },
        state: { type: String },
        city: { type: String },
        zipcode: { type: String }
    },

    vehicles_ads: {
        type: Array, "default": [
            {
                _id: { type: ObjectId },
                interestType: { type: String },
                category: { type: String },
                vin: { type: String },
                odometer: { type: String },
                model: { type: String },
                brand: { type: String },
                condition: { type: String },
                fuel: { type: String },
                color: { type: String },
                transmission: { type: String },
                year: { type: Number },
                description: { type: String },
                price: { type: Number },
                title: { type: String },
                images: [{ type: String }],
                creationDate: { type: Date },
                sellDate: { type: Date },
                customer_seller_id: { type: ObjectId }
            }
        ]
    },
    proposals: {
        type: Array, "default": [{
            _id: { type: ObjectId },
            description: { type: String },
            proposalDate: { type: String },
            vehicle_ads_id: { type: ObjectId },
            customer_seller_id: { type: ObjectId }
        }]
    }

});

module.exports = mongoose.model("CustomerSeller", customerSellerSchema);




