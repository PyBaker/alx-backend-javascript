module.exports = function calculateNumber(a, b = 0) {
  const NumberA = Number(a);
  const NumberB = Number(b);

  if (Number.isNaN(NumberA) || Number.isNaN(NumberB))
    throw TypeError('Parameters must be numbers');

    return Math.round(NumberA) + Math.round(NumberB);
  };
