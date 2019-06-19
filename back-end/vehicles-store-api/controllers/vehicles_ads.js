let CustomerSeller = require('../models/customer-seller-model');


var flatMap = require('flatmap');
var ObjectId = require('mongodb').ObjectID;

exports.create = async function (req, res, next) {
    try {
        await CustomerSeller.findByIdAndUpdate(req.params.id, {
            $push: {
                vehicles_ads:
                    {_id: new ObjectId(), ...req.body}
            }
        });
        res.json({
            success: true
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.list = async function (req, res, next) {
    try {
        let result = await CustomerSeller.find({"vehicles_ads.interestType": "seller"}, {vehicles_ads: 1, _id: 0});
        let newResult = [];
        result.forEach((v, i) => {
            v.vehicles_ads.forEach((val, index) => {
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
        console.log(req.params.id);
        let result = await CustomerSeller.find({"vehicles_ads._id": ObjectId(req.params.id)});
        console.log(result);
        res.json(result[0].vehicles_ads);
    } catch (error) {
        console.log(error);
        return next(err);
    }
};

exports.update = async function (req, res, next) {
    try {
        // await CustomerSeller.findByIdAndUpdate(req.params.id, {$set: req.body});
        let customer = await CustomerSeller.find({"vehicles_ads._id": ObjectId(req.params.id)});
        res.json('Product udpated.');
    } catch (error) {
        console.log(error);
        return next(err);
    }
};

exports.delete = async function (req, res, next) {
    console.log('call me on the back-end1');
    try {
       await CustomerSeller.update(
            {_id: ObjectId(req.params.id)},
            {
                $pull: {vehicles_ads: {_id: ObjectId(req.params.vehicle_id)}},
            });
        res.json({success: true});
    } catch (error) {
        console.log(error);
        return next(error);
    }
};
