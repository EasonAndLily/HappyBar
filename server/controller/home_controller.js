let comedyService = require('../service/comedy_service');

let comedyController = {
    getAllComedies: function (req, res) {
        let comedyPromise = comedyService.getAllComedies();
        comedyPromise.then((comedies) => {
            res.json(comedies);
        }).catch((err) => {
            console.log(err);
        });
    },
    getHomePageComedies: function(req, res) {
        comedyService.getHomePageComedies((homeComedies) => {
            res.json(homeComedies);
        });
    },
}

module.exports = comedyController;