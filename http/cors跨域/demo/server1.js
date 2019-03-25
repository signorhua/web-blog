const http = require('http');

http.createServer((request, response) => {
  console.log('request', request.url);
  response.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:1234',
  });
  response.end('i am server1');
}).listen(1235);
