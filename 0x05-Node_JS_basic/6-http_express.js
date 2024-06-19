// Create server with express
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, (req, res) => {
  console.log('app is listening on port 1245');
});

module.exports = app;
