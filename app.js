const fs = require('fs'); //FILE SYSTEM MODULE
const http = require('http'); //global module HTTP

// fs.writeFileSync('hello.txt', 'Hello from Node') //creates a new file if the specified file does not exist

// function rqListener(req, res) {

// };


const server = http.createServer((req, res) => {
  console.log(req);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body>First body</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
