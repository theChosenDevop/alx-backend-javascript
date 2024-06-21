const calculateNumber = require('./0-calcul');
const assert = require('assert');

// Test Cases
assert.strictEqual(calculateNumber(1, 3), 4, '1 + 3 should return 4');
assert.strictEqual(calculateNumber(1.2, 3.7), 5, '1.2 + 3.7 should return 5');
