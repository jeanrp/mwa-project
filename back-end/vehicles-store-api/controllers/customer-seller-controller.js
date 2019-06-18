let CustomerSeller = require('../models/customer-seller-model');

var ObjectId = require('mongodb').ObjectID;

exports.create = async function (req, res, next) {
    try {
        var customerSeller = new CustomerSeller(
            {
                _id: new ObjectId(),
                ...req.body, 
                birthDate: null,
                creationDate: new Date(),
                address: {
                    _id: new ObjectId(),
                    street: '',
                    state: '',
                    city: '',
                    zipcode: ''
                }
            }
        );
 
        await customerSeller.save();

        res.json("Success");
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.details = async function (req, res, next) {
    try {
        let result = await CustomerSeller.findById(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
        return next(err);
    }
};

exports.detailsByCar = async function (req, res, next) {
    try { 
        let result = await CustomerSeller.find({ "vehicles_ads._id": ObjectId(req.params.id) }); 
        res.json(result);
    } catch (error) {
        console.log(error);
        return next(err);
    }
};
exports.update = async function (req, res, next) {
    try {
        let customerSeller = req.body;
        customerSeller.birthDate = new Date(customerSeller.birthDate); 
        await CustomerSeller.findByIdAndUpdate(req.params.id, { $set: customerSeller });
        res.json('Product udpated.');
    } catch (error) {
        console.log(error);
        return next(err);
    }
};

exports.delete = async function (req, res, next) {
    try {
        await CustomerSeller.findByIdAndRemove(req.params.id)
        res.json('Deleted successfully!');
    } catch (error) {
        console.log(error);
        return next(err);
    }
};
