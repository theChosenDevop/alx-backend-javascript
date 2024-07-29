const calculateNumber = require('./0-calcul');
const assert = require('assert');

// Test Cases
describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});

// Test Suite for rounding the second number
describe('rounding the second number', () => {
  it('should return 5 when inputs 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
});
