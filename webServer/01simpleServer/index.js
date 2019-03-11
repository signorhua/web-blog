const http = require('http');

const hostName = '127.0.0.1';
const port = '1612';
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.end('hello nodejs');
});

server.listen(port, hostName, () => {
  console.log(`服务器运行在http://${hostName}:${port}`);
});
