function integrate(coefficient, exponent) {
    let newCoefficient = coefficient / (exponent + 1);
    let newExponent = exponent ++;
    return `${newCoefficient}x^${newExponent}`;
  }