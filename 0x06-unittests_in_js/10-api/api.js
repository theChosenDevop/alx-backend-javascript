const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  res.send(`Welcome ${username}`);
});

app.get('/available_payments', (req, res) => {
  res.json(
    {
      payment_methods: {
      credit_cards: true,
      paypal: false
      },
    });
});

app.listen(PORT, () => {
  console.log(` API available on localhost port ${PORT}`);});

module.exports = app;
