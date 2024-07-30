// arrays
const myArray = [1,2,3,4,5,6]

console.log(myArray[0])

// arrays method
myArray.push(6)
myArray.push(7)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
myArray.shift(9)
console.log(myArray.includes(9))
console.log(myArray.indexOf(9))

let newArry = myArray.join()
console.log(typeof newArry)
console.log(myArray)

// slice and splice

console.log("A" , myArray)
const mynE1 = myArray.slice(1, 3)
console.log(mynE1)
console.log("B" , myArray)

const mynE2 = myArray.splice(1, 3)
console.log("c" , myArray)
console.log(mynE2)