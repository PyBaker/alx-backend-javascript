const Utils = {
    isNegZero(n) {
      const num = Number(n);
      return num === 0 && 1 / num === -Infinity;
    },
    calculateNumber(type, a, b = 0) {
      let NumberA = Number(a);
      let NumberB = Number(b);

      if (Number.isNaN(NumberA) || Number.isNaN(NumberB))
        throw TypeError('Parameters must be numbers or able to coerce to number');

      NumberA = Math.round(NumberA);
      NumberB = Math.round(NumberB);

      let quotient;

      switch (type) {
        case 'SUM':
          return NumberA + NumberB;
        case 'SUBTRACT':
          return NumberA - NumberB;
        case 'DIVIDE':
          if (NumberB === 0) return 'ERROR';
          quotient = NumberA / NumberB;
          return this.isNegZero(quotient) ? 0 : quotient;
        default:
          throw Error(
            'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
          );
      }
    }
  };

  module.exports = Utils;
