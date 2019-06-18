var express = require('express');
var token = require('../middlewares/checkAuthToken');
var router = express.Router();

var proposalController = require('../controllers/proposal-controller');

router.post('/:id', token.checkAuthToken , proposalController.create); 

module.exports = router;
