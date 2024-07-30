// Primitive Data Types

// Number
console.log(42);        
console.log(3.14);      

// String
console.log("hello");   
console.log('world');   

// Boolean
console.log(true);      
console.log(false);     

// Undefined
let x;

// Null
let y = null;

// Symbol 
const id = Symbol('546');
const anotherId = Symbol('546')  ;

console.log(id === anotherId)  

const bigNumber = 4623643276401646
 
// Non-Primitive Data Types (Arrays , objects , Funtion)

const games = ["cricket", " football" , "hockey"]
console.log(games)

let myObj = {
    name: "cybertron",
    age: 12,
    address: "peshawar"
}
 
const myfunction = function() {
    console.log("hello world")
    console.log(myfunction)
}


//memory in js 
//stack (primitive) , heap (non-primitive)

let myName = "cybertron"

let anotherName = myName
anotherName = "jumbotran"

console.log(myName)
console.log(anotherName)

let userOne ={
    emai:"user@gamil.com"
}

let userTwo = userOne
userTwo.emai = "abc@gmail.com"
console.log(userOne)
console.log(userTwo)

