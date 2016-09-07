

function callback(){
  console.log('the final countdown');
}


function countdown(callback){

  window.setTimeout( () => { callback() }, 2000 );
}

countdown(callback);

function createMultiplier(multiplierValue){
    retun () => {
       1 * multiplierValue;
    }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);


function multiplier(multiplierValue, value){
   return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
