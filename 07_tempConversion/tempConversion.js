const ftoc = function() {
  let celsius = (arguments[0] - 32) * 5/9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function() {
  let fahrenheit = arguments[0] * 9/5 + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

module.exports = {
  ftoc,
  ctof
};
