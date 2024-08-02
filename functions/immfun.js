//Immediatly Inovked Function Expression (IIFE)
(function cyber (){   // named iife
    console.log(`DB CONNECTED`)
})();
//in iife 1st code must end to run 2nd code (unsing semicolon).

( (name) =>{  //simple (unnamed iife) iife
    console.log(`DB CONECTED TWO ${name}`);
} ) ('cybertron')