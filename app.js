const fs = require('fs'); //FILE SYSTEM MODULE
const http = require('http'); //global module HTTP

// fs.writeFileSync('hello.txt', 'Hello from Node') //creates a new file if the specified file does not exist

// function rqListener(req, res) {

// };


const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
