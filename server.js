const http = require('http');
const fs = require('fs');

const getJsonData = (file) =>
  fs.readFileSync(`${__dirname}/jsonData/${file}.json`, 'utf-8');
let data = '';

const handlerRequest = (req, res) => {
  switch (req.url) {
    case '/users':
      data = getJsonData('users');
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      res.end(data);
      break;
    case '/docs':
      data = getJsonData('docs');
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      res.end(data);
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end('404 Page not found...');
  }
};

const server = http.createServer(handlerRequest);

const port = 3300;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
