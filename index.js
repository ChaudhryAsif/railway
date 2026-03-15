const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Frendlia Core - System Online');
});
const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => {
  console.log('Server listening on port. ' + port);
});
