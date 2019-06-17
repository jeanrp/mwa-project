let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token.startsWith('Bearer '))
        token = token.slice(7, token.length);

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    ok: false,
                    message: 'The token is not valid!'
                });
            } else {
                req.tokenDecoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            ok: false,
            message: 'Authorization token not supplied'
        });
    }
};

module.exports = {
    checkAuthToken: checkAuthToken
}