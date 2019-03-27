const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  console.log('request', request.url);
  const html = fs.readFileSync('1.html', 'utf8');
  const img = fs.readFileSync('test.png');
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      Connection: 'close',
    });
    response.end(html);
  } else {
    response.writeHead(200, {
      'Content-Type': 'image/png',
      Connection: 'close',
    });
    response.end(img);
  }
}).listen(1234);
