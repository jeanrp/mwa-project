let CustomerSeller = require('../models/customer-seller-model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

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
        res.send('Product Created successfully')
    })
};

exports.details = function (req, res) {
    CustomerSeller.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.update = function (req, res) {
    CustomerSeller.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.delete = function (req, res) {
    CustomerSeller.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};