//This file provide a proxy server for web-app to access
let jsonfile = require('jsonfile');
let http = require('http'); 
let httpProxy = require('http-proxy');
const configPath = './config/config.json';
const configData = jsonfile.readFileSync(configPath);
  
// Create a Proxy Server object  
let proxy = httpProxy.createProxyServer({});  
  
// Catch error  
proxy.on('error', function (err, req, res) {  
  res.writeHead(500, {  
    'Content-Type': 'text/plain'  
  });  
  res.end('Something went wrong: ' + err);  
});  
  
//Use the proxy to dispatch request
let server = require('http').createServer(function(req, res) {   
  const host = req.headers.host;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;  
  
  switch(host){  
    case configData.proxyServer.ip + ':' + configData.proxyServer.port:     
        proxy.web(req, res, { target: configData.loacalURL });
    break;   
    default:  
        res.writeHead(200, {  
            'Content-Type': 'text/plain'  
        });  
        res.end('Welcome to proxy server!please access this url: ' + configData.proxyServer.url);  
  }  
});  
  
console.log("Proxy server has started, listen the port: " + configData.proxyServer.port);
server.listen(configData.proxyServer.port);
