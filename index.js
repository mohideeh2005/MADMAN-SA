
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  fs.readFile('game.html', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading game.html');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Game server running on port 3000');
});
