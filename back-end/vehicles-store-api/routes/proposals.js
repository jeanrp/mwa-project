var express = require('express');
var router = express.Router();

var proposalController = require('../controllers/proposal-controller');

router.post('/:id', proposalController.create); 

module.exports = router;
