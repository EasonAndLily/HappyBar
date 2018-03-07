let comedyService = require('../service/comedy_service');

let comedyController = {
    getAllComedies(req, res) {
        let comedyPromise = comedyService.getAllComedies();
        comedyPromise.then((comedies) => {
            res.json(comedies);
        }).catch((err) => {
            console.log(err);
        });
    }
}

module.exports = comedyController;