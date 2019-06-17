let CustomerSeller = require('../models/customer-seller-model');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.login = async function (req, res, next) {
    try {
        let result = await CustomerSeller.findOne({ email: req.body.email, password: req.body.password });
        if (!result) {
            res.status(403).json({ ok: false, message: "Email or password are incorrect" });
        } else {
            let token = jwt.sign({ email: result.email },
                config.secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            res.status(200).json({
                ok: true,
                message: 'Authentication successful!',
                result: {
                    token: token,
                    data: {
                        _id: result._id,
                        email: result.email,
                        phone: result.phone,
                        type: result.type,
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
}


