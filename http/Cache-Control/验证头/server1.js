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
    const etag = request.headers['if-none-match'];
    if (etag === '777') {
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=100000000000, no-cache',
        'Last-Modified': '123',
        Etag: '777',
      });
      response.end('');
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=100000000000, no-cache',
        'Last-Modified': '123',
        Etag: '777',
      });
      response.end(js);
    }
  }
}).listen(1234);
