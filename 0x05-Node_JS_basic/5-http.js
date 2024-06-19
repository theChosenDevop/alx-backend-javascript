// create HTTP server
const countStudents = require('./3-read_file_async');

const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');

  if (req.url === '/') {
  res.write('Hello Holberton School!');
  }
  else if (req.url === '/students') {
    res.write('This is the list of our students');
    const file = process.argv[2];
    countStudents(file).then((data) => {
      res.end(data);
    }).catch((error) => {
      res.statusCode = 500;
      res.end(error.message);
    })
  } else {
    res.statusCode = 404;
    res.end("Invalid route");
  }
})

const port = 1245;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
