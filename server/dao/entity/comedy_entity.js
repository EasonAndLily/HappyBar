var mongoose = require('mongoose');
var playerSchemas = require('../schemas/comedy_schemas');
var comedy = mongoose.model('comedy', playerSchemas);

module.exports = comedy;