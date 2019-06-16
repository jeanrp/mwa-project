var mongoose = require('mongoose');
const String = mongoose.Schema.Types.String;


var customerSellerSchema = new mongoose.Schema({
    firstName: String
  });

module.exports = mongoose.model("CustomerSeller", customerSellerSchema, "customers_sellers");




