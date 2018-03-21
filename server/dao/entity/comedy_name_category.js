let mongoose = require('mongoose');
let comedyNameCategroySchemas = require('../schemas/comedy_name_category_schemas');
let comedyNameCategroy = mongoose.model('comedy_name_category', comedyNameCategroySchemas);

module.exports = comedyNameCategroy;