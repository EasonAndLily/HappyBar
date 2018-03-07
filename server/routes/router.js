let comedyRouter = require('./comedy_router');

class Router {
    constructor(app) {
        app.use('/comedies', comedyRouter);
    }
};

module.exports = Router;