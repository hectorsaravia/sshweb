const http = require('http');
const {createReadStream} = require('fs')

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  createReadStream('source/index.html').pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});