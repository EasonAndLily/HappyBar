let express = require('express');
let router = express.Router();
let comedyController = require('../controller/comedy_controller');

router.get('/', comedyController.getAllComedies);

module.exports = router;