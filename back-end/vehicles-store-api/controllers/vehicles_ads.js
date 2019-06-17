let CustomerSeller = require('../models/customer-seller-model');


var flatMap = require('flatmap');
var ObjectId = require('mongodb').ObjectID;

exports.create = async function (req, res, next) {
    try {
        let vehicle_ad = {
            _id: new ObjectId(),
            ...req.body
        };
        let customer = await CustomerSeller.findById(req.params.id);
        await CustomerSeller.findByIdAndUpdate(req.params.id, { $push: { vehicles_ads: { vehicle_ad } } });
        res.json(vehicle_ad);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.list = async function (req, res, next) {
    try {
        let result = await CustomerSeller.find({"vehicles_ads.interestType": "seller" }, { vehicles_ads: 1, _id: 0 });
        let newResult = [];
        result.forEach((v, i) => {
            v.vehicles_ads.forEach((val, index) => {                         
                if (val.brand.length > 10)
                    val.brand = val.brand.substr(0,9) + "...";
                newResult.push(val);
            });
        });

        res.status(200).json(newResult);
    } catch (error) {
        console.log(error);
        return next(err);
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
        await CustomerSeller.findByIdAndUpdate(req.params.id, { $set: req.body });
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
