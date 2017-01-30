function countdown(callback) {
console.log ('the keyboard tunes stop')
return window.setTimeout(callback, 2000)
}

function callback (){
console.log ('the vocals kick in')
}


function multiplierValue(multiplier) {
return (value)=>multiplier*value
}

function createMultiplier(score) {
if (score==='double'){
return multiplierValue(2)
}
if (score==='triple'){
return multiplierValue(3)
}
}

var doubler = createMultiplier('double')
var tripler = createMultiplier('triple')


function multiplier(multiplierValue, value) {
return multiplierValue* value
}

var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)


