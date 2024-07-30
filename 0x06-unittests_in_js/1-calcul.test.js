const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type === SUM', () => {
    it('should return positive number', () => {
      assert.strictEqual(calculateNumber('SUM', 4.0, 2.0), 6);
    });
    it('negative number and positive number sum', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 3.0), 1);
    });
    it('two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.0, -1.0), -2);
    });
    it('two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.3, -1.8), -3);
    });
    it("two zero's", () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
    it('two positive  numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 1.8), 4);
    });
  });

  describe('type === SUBTRACT', () => {
    it('should return positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.0, 2.0), 2);
    });
    it('negative number and positive number sum', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 3.0), -5);
    });
    it('two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.0, -1.0), 0);
    });
    it('two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.3, -1.8), 1);
    });
    it("two zero's", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
    it('two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 1.8), 0);
    });
  });

  describe('type === DIVIDE', () => {
    it('two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2);
    });
    it('negative number and positive number division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.0, 3.0), -2); 
    });
    it('two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });
    it("two zero's", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
    it('two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 0.0), 'Error');
    });
  });
});
