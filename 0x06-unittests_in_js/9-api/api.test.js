const chai = require('chai');
const { expect } = chai;
const request = require('request');

describe('Index page', () => {
  it('response', (done) => {
    try {
      request('http://localhost:7865/', (err, res, body) => {
        if (err) throw err;
        expect(body).to.equal('Welcome to the payment system');
        expect(res.statusCode).to.equal(200);
        done();
      });
    } catch (err) {
      done(err);
    }
  });
  describe('cart', () => {
    it('response', (done) => {
      try {
        request('http://localhost:7865/cart/7', (err, res, body) => {
          if (err) throw err;
          expect(body).to.equal('Payment methods for cart 7');
          expect(res.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
    it('not number', (done) => {
      try {
        request('http://localhost:7865/cart/theChosenDevop', (err, res) => {
          if (err) throw error;
          expect(res.statusCode).to.equal(404);
          done();
        });
      } catch (err) {
        done(err);
      }
    });
  });
});
