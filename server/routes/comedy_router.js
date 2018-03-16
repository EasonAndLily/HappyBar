let express = require('express');
let router = express.Router();
let comedyController = require('../controller/comedy_controller');

router.get('/', comedyController.getAllComedies);
router.get('/homePage', comedyController.getHomePageComedies);

module.exports = router;