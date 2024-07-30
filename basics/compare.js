console.log(2 > 1);
console.log(2 >= 1);
console.log(8 < 5);
console.log(2 >= 1);
// keep  in mind (data type must be same) whenever comapring 
console.log("2" > 1)
console.log ("04" > 1)



// Avoid these types of conversion
console.log (null > 0)
console.log (null == 0)
console.log (null >= 0) //comparison convert null to number.

console.log(undefined == 0)
console.log(undefined >= 1)



// Strict Equality (===)
console.log(5 === 5);  // true
console.log(5 === "5");  // false (casue now checking datatypes)



