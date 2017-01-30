function countdown(callback) {
console.log ('the keyboard tunes stop')
return window.setTimeout(callback, 2000)
}

function callback (){
console.log ('the vocals kick in')
}

function createMultiplier(multiplier) {
return (value)=>multiplier*value
}

function multiplierValue(score) {
return createMultiplier(score)
}

var doubler = multiplierValue(2)
var tripler = multiplierValue(3)

function multiplier(multiplierValue, value) {
return multiplierValue* value
}

var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)


