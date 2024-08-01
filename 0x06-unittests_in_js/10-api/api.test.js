const chai = require('chai');
const { expect } = chai;
const request = require('request');

describe('Index page', () => {
  it('localhost response', (done) => {
    try {
      request('http://localhost:7865/', (err, res, body) => {
        if (err) throw err;
        expect(body).to.equal('Welcome to the payment system');
        expect(response.statusCode).to.equal(200);
        done();
      });
    } catch (err) {
      done(err);
    }
  });
  describe('cart', () => {
    it('localhost response', (done) => {
      try {
        request('http://localhost:7865/cart/23', (err, res, body) => {
          if (err) throw error;
          expect(body).to.equal('Payment methods for cart 23');
          expect(res.statusCode).to.equal(200);
          done();
        });
      } catch (err) {
        done(err);
      }
    });
    it('not number', (done) => {
      try {
        request('http://localhost:7865/cart/book', (err, res) => {
          if (err) throw err;
          expect(res.statusCode).to.equal(404);
          done();
        });
      } catch (err) {
        done(err);
      }
    });
  });
  describe('available_payments', () => {
    it('localhost response', (done) => {
      try {
        request('http://localhost:7865/available_payments', (err, resp, body) => {
          if (err) throw err;
          expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          expect(res.statusCode).to.equal(200);
          done();
        });
      } catch (err) {
        done(err);
      }
    });
  });
  describe('login', () => {
    it('localhost response', (done) => {
      try {
        request.post({
          url: 'http://localhost:7865/login',
          json: { userName: 'Betty' },
        }, (err, res, body) => {
          if (err) throw error;
          expect(body).to.equal('Welcome Betty');
          expect(res.statusCode).to.equal(200);
          done();
        });
      } catch (err) {
        done(err);
      }
    });
  });
});
