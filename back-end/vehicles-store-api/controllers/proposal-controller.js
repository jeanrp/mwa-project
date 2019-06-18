let CustomerSeller = require('../models/customer-seller-model');

var ObjectId = require('mongodb').ObjectID;

exports.create = async function (req, res, next) {
    try {     

        let seller = await CustomerSeller.findById(req.params.id);
        
        await CustomerSeller.findByIdAndUpdate(seller._id, { $push: { proposals: {  _id: new ObjectId(), ...req.body  } } });

        res.status(200).json({ ok: true, message: "Proposal succesfully inserted"});
    } catch (error) {
        console.log(error);
        next(error);
    }
};
