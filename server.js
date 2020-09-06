const http = require('http'),
  url = require('url');

http
  .createServer((req, res) => {
    let addr = req.url,
      q = url.parse(addr, true),
      filePath = '';

    if (q.pathname.includes('documentation')) {
      filePath = __dirname + '/documentation.html';
    } else {
      filePath = 'index.html';
    }
  })
  .listen(8080);
console.log('Connected to port 8080');
