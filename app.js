const http = require('http'); //global module HTTP
const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler); //connection to routes.js

server.listen(3000);
