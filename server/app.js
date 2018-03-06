let jsonfile = require('jsonfile');
let express = require('express');
let mongoose = require('mongoose');
let comedyController = require('./controller/comedy_controller');

const configPath = './config/config.json';
const configData = jsonfile.readFileSync(configPath);

let app = express();
const mongooseConfigURL = configData.database.url + ":" + configData.database.port + "/" + configData.database.dbName;
mongoose.connect(mongooseConfigURL);

app.get('/', function(req, res){
    let comedyPromise = comedyController.getAllComedies();

    comedyPromise.then((comedies) => {
        res.json(comedies);
    }).catch((err) => {
        console.log(err);
    });
});

const port = process.env.PORT || configData.serverPort;
app.listen(port, function() {
    console.log("Happy Bar server has started, port: " + port);
});