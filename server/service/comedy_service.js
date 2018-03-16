let comedyEntity = require('../dao/entity/comedy_entity');
let Promise = require('promise');

let comedyService = {
    getAllComedies() {
        return comedyEntity.getAllComedies({"name":-1});
    },
    getHomePageComedies: function(callback) {
        Promise.all([
            comedyEntity.getCommdiesByConditions({}, 4, 0, {'playAmount': -1}),
            comedyEntity.getAllComedies({"name":-1})
        ]).then((data) => {
            let homeComedies = {};
            homeComedies.carouselComedies = data[0];
            homeComedies.allComedies = data[1];
            callback(homeComedies);
        }).catch((err) => {
            console.log(err);
        })
    }
}

module.exports = comedyService;