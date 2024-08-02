// //var a = 400
// let a = 300
// if (true) {
//     let a = 10
//     const b = 12          // => block scope
//     var c = 14
//     console.log("inner:",a)
// }
// console.log(a);
// // console.log(b);
// console.log(c);

//nested Scope

function one() {
    const username = "cyber"

    function two() {
        const website = "youtube"
        console.log(username)
        console.log(website)
    }
    // console.log(website)
    two()
}
one()

if (true) {
    const username = "cyber"
    if (username === "cyber") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username);

// *********** intersting Concept *******//
console.log(addone(5))
function addone(num) {
    return num + 1
}
// addone(5)

// addtwo(5)
const addtwo = function(num){
    return num + 2
}

addtwo(5)

// console.log(addone);
// console.log(addtwo);