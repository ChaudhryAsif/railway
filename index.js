const http = require('http');

const server = http.createServer((req, res) => {
  // 1. Health Check Route (Standard Practice)
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
    return;
  }

  // 2. Main Landing Page
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('CI/CD Pipeline is LIVE! Verified by Asif.');
});

// Railway provides the PORT, we default to 8080 to match your previous logs
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});