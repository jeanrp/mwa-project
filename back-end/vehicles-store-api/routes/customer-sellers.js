var express = require('express');
var router = express.Router();
var token = require('../middlewares/checkAuthToken');

var customerSeller = require('../controllers/customer-seller-controller');

router.post('/', customerSeller.create);

router.get('/:id', customerSeller.details);

router.get('/vehicle/:id', customerSeller.detailsByCar);

router.put('/:id', token.checkAuthToken, customerSeller.update);

router.delete('/:id', customerSeller.delete);


module.exports = router;