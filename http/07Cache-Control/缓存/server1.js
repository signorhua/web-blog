const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  console.log('request', request.url);
  const html = fs.readFileSync('1.html', 'utf8');
  const js = fs.readFileSync('script.js', 'utf8');
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(html);
  }
  if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=20',
    });
    response.end(js);
  }
}).listen(1234);
