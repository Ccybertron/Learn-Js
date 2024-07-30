const firstname = "ali"
const age = "18"

// console.log(firstname + lastName);
// alternative
console.log(`my name is ${firstname} and my age is ${age}` )


const name = new String('cybertron')
console.log(name[4])
console.log(name.__proto__)
console.log(name.length)

console.log(name.toUpperCase())

const newStr = name.substring(0 , 5)
console.log(newStr)

const anotherStr = name.slice(-5, 5)
console.log(anotherStr);

const strOne = "    cybertron   "
console.log(strOne)
console.log(strOne.trim)

const url = "https://abc.com/cybertron%20xyz"

console.log(url.replace('%20', 'dd'))

console.log(url.includes('cybertron'))