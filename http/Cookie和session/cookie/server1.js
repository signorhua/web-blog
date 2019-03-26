const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  console.log('request', request.url);
  const html = fs.readFileSync('1.html', 'utf8');
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-cookie': ['id=123; max-age=2', 'abc=456; HttpOnly'],
    });
    response.end(html);
  }
}).listen(1234);
