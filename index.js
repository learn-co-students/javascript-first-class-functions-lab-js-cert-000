function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function multiplierValue(number) {
  return function(value) {
    return number * value;
  }
}

function createMultiplier(value) {
    return multiplierValue(value);
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(mult1, mult2) {
  return mult1 * mult2;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
