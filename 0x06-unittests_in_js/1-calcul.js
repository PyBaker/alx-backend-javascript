const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  let NumberA = Number(a);
  let NumberB = Number(b);

  if (Number.isNaN(NumberA) || Number.isNaN(NumberB))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  NumberA = Math.round(NumberA);
  NumberB = Math.round(NumberB);

  switch (type) {
    case SUM:
      return NumberA + NumberB;
    case SUBTRACT:
      return NumberA - NumberB;
    case DIVIDE:
      if (NumberB === 0) return 'ERROR';
      const quotient = NumberA / NumberB;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
};
