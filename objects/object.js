//singleton  => through constructor
// object.crate

//object literals
const mySmbl = Symbol("key1")
const jsuser ={
    [mySmbl] : "key1",
    name : "cyber",
    age : 20 ,
    location : "swat",
    isLoggedIn: true 
}

console.log(jsuser.location)
console.log(jsuser["name"])
console.log(jsuser[mySmbl])

jsuser.name = "khan"
console.log(jsuser["name"])

Object.freeze(jsuser)
jsuser.name ="ali"
console.log(jsuser["name"])

jsuser.greeting = function (){
    console.log("hello")
}
jsuser.greetingtwo = function (){
    console.log(`hello user , ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())


