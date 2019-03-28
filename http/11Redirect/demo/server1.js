const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((request, response) => {
  console.log('request', request.url);
  const html = fs.readFileSync('1.html', 'utf8');
  if (request.url === '/') {
    response.writeHead(302, {
      Location: '/new',
    });
    response.end('');
  }
  if (request.url === '/new') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Encoding': 'gzip',
    });
    response.end(zlib.gzipSync(html));
  }
}).listen(1234);
