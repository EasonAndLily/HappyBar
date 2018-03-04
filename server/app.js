let jsonfile = require('jsonfile');
let express = require('express');
let app = express();

const configPath = './config/config.json';
const configData = jsonfile.readFileSync(configPath);

app.get('/', function(req, res){
  res.json(configData);
});

const port = process.env.PORT || configData.serverPort;
app.listen(port, function() {
    console.log("Happy Bar server has started, port: " + port);
});