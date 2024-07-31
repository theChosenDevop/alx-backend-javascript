const chai = require('chai');
const { expect } = chai;
const request = require('request');

describe('Index page', () => {
  it('localhost response', (done) => {
    try {
      request('http://localhost:7865/', (err, res, body) => {
        if (err) throw err;
	expect(body).to.be.equal('Welcome to the payment system');
	expect(res.statusCode).to.equal(200);
	done();
      });
    } catch(err) {
      done(err);
    }
  });

  describe('Cart', () => {
    it('localhost response', (done) => {
      try {
        request('http://localhost:7865/cart/23', (err, res, body) => {
          if (err) throw err;
	  expect(body).to.equal('Payment methods for cart 23');
	  expect(res.statusCode).to.equal(200);
	  done();
        });
      } catch (err){
        done(err);
      }
    }
    it('not number', (done) => {
      try{
        request('http://localhost:7865/cart/theChosenDevop', (err, res, body) => {
          if (err) throw err;
	  expect(res.statusCode).to.equal(404);
	  done();
        });
      } catch(err){
        done(err)
      }
    });
  });
});
