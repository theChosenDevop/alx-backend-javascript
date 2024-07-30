/*
 * Test case for 2-calcul.js
 */

const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type === SUM', () => {
    it('should return positive number', () => {
      expect(calculateNumber('SUM', 4.0, 2.0)).to.equal(6);
    });
    it('negative number and positive number sum', () => {
      expect(calculateNumber('SUM', -2.0, 3.0)).to.equal(1);
    });
    it('two negative numbers', () => {
      expect(calculateNumber('SUM', -1.0, -1.0)).to.equal(-2);
    });
    it('two negative numbers rounded', () => {
      expect(calculateNumber('SUM', -1.3, -1.8)).to.equal(-3);
    });
    it("two zero's", () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
    it('two positive numbers rounded', () => {
      expect(calculateNumber('SUM', 2.4, 1.8)).to.equal(4);
    });
  });

  describe('type === SUBTRACT', () => {
    it('should return positive number', () => {
      expect(calculateNumber('SUBTRACT', 4.0, 2.0)).to.equal(2);
    });
    it('negative number and positive number subtraction', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 3.0)).to.equal(-5);
    });
    it('two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.0, -1.0)).to.equal(0);
    });
    it('two negative numbers rounded', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -1.8)).to.equal(1);
    });
    it("two zero's", () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
    it('two positive numbers rounded', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 1.8)).to.equal(0);
    });
  });

  describe('type === DIVIDE', () => {
    it('two positive numbers', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
    });
    it('negative number and positive number division', () => {
      expect(calculateNumber('DIVIDE', -6.0, 3.0)).to.equal(-2); 
    });
    it('two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });
    it("division by zero returns 'Error'", () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
    it("division by zero returns 'Error'", () => {
      expect(calculateNumber('DIVIDE', 4.0, 0.0)).to.equal('Error');
    });
  });
});
