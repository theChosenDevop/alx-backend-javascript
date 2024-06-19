// Create http server
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
