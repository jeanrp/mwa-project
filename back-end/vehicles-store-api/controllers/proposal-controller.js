let CustomerSeller = require('../models/customer-seller-model');

var ObjectId = require('mongodb').ObjectID;

exports.create = async function (req, res, next) {
    try {     

        var proposals = {
            ...req.body 
        }; 
        
        let seller = await CustomerSeller.findById(proposals.customer_seller_id); 

        let vehicle = seller.vehicles_ads.filter((v,i) => 
        {  
            return proposals.vehicle_ads_id == v._id;
        });

        vehicle[0].interestType = 'customer';

        await CustomerSeller.findByIdAndUpdate(req.params.id, {
            $push: { vehicles_ads: vehicle[0] }
        });         
        
        await CustomerSeller.findByIdAndUpdate(seller._id, { $push: { proposals: {  _id: new ObjectId(), ...req.body  } } });                           
           
        res.status(200).json({ ok: true, message: "Proposal succesfully inserted"});
    } catch (error) {
        console.log(error);
        next(error);
    }
};
