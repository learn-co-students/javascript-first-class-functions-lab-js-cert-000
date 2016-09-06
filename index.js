// Exercise 1: The Final Countdown
function countdown(callback) {
  setTimeout(function () {
    callback()
  }, 2000)
}

// Exercise 2: Playing Scrabble
function createMultiplier (multiplierValue) {
  return function(value) {
    return multiplierValue * value
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

// Exercise 3: It's Part(y)(ial) Time
function multiplier (multiplierValue, value) {
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
