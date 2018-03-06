let comedyEntity = require('../dao/entity/comedy_entity');

let comedyService = {
    getAllComedies() {
        return comedyEntity.getAllComedies({"name":-1});
    }
}

module.exports = comedyService;