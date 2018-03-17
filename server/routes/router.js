let comedyRouter = require('./home_router');

class Router {
    constructor(app) {
        app.use('/home', comedyRouter);
    }
};

module.exports = Router;