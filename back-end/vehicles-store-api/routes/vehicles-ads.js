var express = require('express');
var router = express.Router();
var token = require('../middlewares/checkAuthToken');

var vehiclesAds = require('../controllers/vehicles_ads');

router.post('/:id',token.checkAuthToken, vehiclesAds.create);

router.get('/', vehiclesAds.list);

router.get('/:id', vehiclesAds.details);

router.patch('/:id', vehiclesAds.update);

router.delete('/:id/vehicle_ad/:vehicle_id', vehiclesAds.delete);


module.exports = router;
