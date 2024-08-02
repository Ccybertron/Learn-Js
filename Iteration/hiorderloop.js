// for of
// ["" , "" , ""]
// [{}, {},]
const arr =[ 1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}

const greeting ="Hello"
for (const greet of (greeting)) {
   // console.log(`each charactor is ${greet}`);
}

// Map

const map = new Map()
map.set('pk' , "pakistan")
map.set('uk' , "united kingdom")
// console.log(map)
// for (const key of map) {
//     console.log(key)
// }
for (const [key , value] of map) {          //de structuring
    //console.log(key , ':-' , value)         
}

const myObj ={
    game1: "NFS" ,
    game2: "PUBG"
}
// for (const key of myObj) {
//     console.log(key);            //for of loop not working on object
// }


const myObject = {
    js : "javascrip",
    cpp: "c++",
    py: "python",
    rb : "ruby"
}

for (const key in myObject) {
    // console.log(myObject[key])
   // console.log(`${key} shortuct is for ${myObject[key]}`);
}

//for in loop on array

const programming = [ "cpp" , "php" , "sql" , "java" , "javascript"]
for (const key in programming) {
   //console.log(programming[key])
}

// for each loop
const programms = [ "cpp" , "php" , "sql" , "java" , "javascript"]
// programms.forEach(function (items) {
//     console.log(items);
// })

//using arrowfunction
// programms.forEach ((items)=>{
//     console.log(items);
// })

// function printME(items){
//     console.log(items)
// }
// programms.forEach(printME)

// programms.forEach ((items , index , arr) => {
//     console.log(items, index ,arr);
// })


// objects inside arrat

const myCoding =[
    {
        language:"javascript",
        languagefilename: "js",
    },
    {
        language:"java",
        languagefilename: "java",
    },
    {
        language:"python",
        languagefilename: "py",
    },
]
myCoding.forEach((items) => {
    console.log(items.languagefilename)
})