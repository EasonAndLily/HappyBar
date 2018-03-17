let express = require('express');
let router = express.Router();
let comedyController = require('../controller/home_controller');

// router.get('/', comedyController.getAllComedies);
router.get('/', comedyController.getHomePageComedies);

module.exports = router;