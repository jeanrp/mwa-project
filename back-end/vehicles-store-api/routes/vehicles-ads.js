var express = require('express');
var router = express.Router();

var vehiclesAds = require('../controllers/vehicles_ads');

router.post('/:id', vehiclesAds.create);

router.get('/:id', vehiclesAds.details);

router.patch('/:id', vehiclesAds.update);

router.delete('/:id', vehiclesAds.delete);


module.exports = router;
