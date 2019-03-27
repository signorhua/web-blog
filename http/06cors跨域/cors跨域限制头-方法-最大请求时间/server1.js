const http = require('http');

http.createServer((request, response) => {
  console.log('request', request.url);
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    // 'Access-Control-Allow-Methods': 'X-Test-Cors',
  });
  response.end('i am server1');
}).listen(1235);
