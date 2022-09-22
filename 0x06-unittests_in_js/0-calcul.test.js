const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('must return sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('must round floats', () => {
    assert.strictEqual(calculateNumber(1, 3.6), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.3, 0), 0);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  });

  it('must check if non-integer are casted', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
    assert.strictEqual(calculateNumber('1.2', 3.7), 5);
  });

  it('must return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumber(2.2), 2);
    assert.strictEqual(calculateNumber(2.8), 3);
  });

  it('must throw typeerror if either param cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber(1.2, 'dog'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
