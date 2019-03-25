const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  if (request.url === '/') {
    const html = fs.readFileSync('01.html', 'utf8');
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Security-Policy': 'script-src \'self\'; form-action \'self\'; report-uri /report',
    });
    response.end(html);
  } else if (request.url.indexOf('.js') !== -1) { // js的运行请求环境
    console.log('js', request.url);
    response.writeHead(200, {
      'Content-Type': 'application/javascript', // 内容类型
    });
    response.end('console.log("loaded script")');
  }
}).listen(2323);
