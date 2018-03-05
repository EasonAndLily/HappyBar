let jsonfile = require('jsonfile');
let express = require('express');
let mongoose = require('mongoose');
let comedyEntity = require('./dao/entity/comedy_entity');

const configPath = './config/config.json';
const configData = jsonfile.readFileSync(configPath);

let app = express();
const mongooseConfigURL = configData.database.url + ":" + configData.database.port + "/" + configData.database.dbName;
mongoose.connect(mongooseConfigURL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connent!');
});

app.get('/', function(req, res){
  res.json(data);
});

const port = process.env.PORT || configData.serverPort;
app.listen(port, function() {
    console.log("Happy Bar server has started, port: " + port);
});