let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let createMydate = new Date(2023 , 0 ,23 , 8 ,9)
console.log(createMydate.toLocaleDateString())

let myTimeStamp =  Date.now()
console.log(myTimeStamp)

console.log(createMydate.getTime())

console.log(Math.floor(Date.now()))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())