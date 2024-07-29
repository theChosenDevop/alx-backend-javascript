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

  it('should return 1 when inputs are -1.0 and 1.5', () => {
    assert.strictEqual(calculateNumber(-1.0, 1.5), 1);
  });

  it('should return 1 when inputs are -1.4 and 1.5', () => {
    assert.strictEqual(calculateNumber(-1.4, 1.5), 1)
  });

  it('should return 2 when inputs are 0.5 and 0.5', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });

  it('should return -6 with -1.6 and -3.7', () => {
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
  });

  it('should return 2 with -1.6 and 3.7', function() {
    assert.strictEqual(calculateNumber(-1.6, 3.7), 2);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
