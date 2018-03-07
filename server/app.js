let jsonfile = require('jsonfile');
let express = require('express');
let mongoose = require('mongoose');
let comedyController = require('./controller/comedy_controller');
let Router = require('./routes/router');

// Get the config data and connect the mongodb.
const configPath = './config/config.json';
const configData = jsonfile.readFileSync(configPath);
const mongooseConfigURL = configData.database.url + ":" + configData.database.port + "/" + configData.database.dbName;
mongoose.connect(mongooseConfigURL);

//Register service and start it.
const port = process.env.PORT || configData.serverPort;
let app = express();
app.listen(port, function() {
    console.log("Happy Bar server has started, port: " + port);
});

//Make router to process the url.
new Router(app);