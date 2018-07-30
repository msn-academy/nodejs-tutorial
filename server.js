// import http module
const http = require('http');

// create the server
const app = http.createServer((request, response) => {
  // specify the response headers
  response.writeHead(200, { "Content-type": "text/plain" });

  // specify the content to send back to the client
  response.end('Hello world');
});

// listen on port 8090
app.listen(8090);
