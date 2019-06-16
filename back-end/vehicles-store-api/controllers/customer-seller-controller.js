let CustomerSeller = require('../models/customer-seller-model');

var ObjectId = require('mongodb').ObjectID;

exports.create = function (req, res) {
    var product = new CustomerSeller(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    CustomerSeller.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json('Product Created successfully')
    })
};

exports.details = function (req, res) {
    console.log(req.params.id);
    CustomerSeller.findById(req.params.id, function (err, product) {
        console.log(err);
        console.log(product)
        if (err) return next(err);
        res.json(product);
    })
};

exports.update = function (req, res) {
    CustomerSeller.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.json('Product udpated.');
    });
};

exports.delete = function (req, res) {
    CustomerSeller.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json('Deleted successfully!');
    })
};