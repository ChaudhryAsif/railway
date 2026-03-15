const http = require('http');

const server = http.createServer((req, res) => {
  // Return a 200 OK for any request (Required for Railway's Health Check)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('CI/CD Pipeline is LIVE! Verified by Asif.');
});

// Use Railway's port, fallback to 8080
const port = process.env.PORT || 8080;

// Explicitly bind to 0.0.0.0
server.listen(port, '0.0.0.0', () => {
  console.log(`Server is officially listening on port ${port}`);
});