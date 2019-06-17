let CustomerSeller = require('../models/customer-seller-model');

var ObjectId = require('mongodb').ObjectID;

exports.create = async function (req, res, next) {
    try {
        let vehicle_ad = {
            _id: new ObjectId(),
            ...req.body
        };
        let customer = await CustomerSeller.findById(req.params.id);
        await CustomerSeller.findByIdAndUpdate(req.params.id, {$push: {vehicles_ads: {vehicle_ad}}});
        // await customerSeller.save();
        res.json(vehicle_ad);
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

exports.update = async function (req, res, next) {
    try {
        await CustomerSeller.findByIdAndUpdate(req.params.id, {$set: req.body});
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
