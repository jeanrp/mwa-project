var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
 var customerSeller = require('../controllers/customer-seller-controller');

router.post('/', customerSeller.create);

router.get('/:id', customerSeller.details);

router.put('/:id', customerSeller.update);

router.delete('/:id', customerSeller.delete);


module.exports = router;