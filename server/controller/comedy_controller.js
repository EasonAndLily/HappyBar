let comedyService = require('../service/comedy_service');

let comedyController = {
    getAllComedies() {
        return comedyService.getAllComedies();
    }
}

module.exports = comedyController;