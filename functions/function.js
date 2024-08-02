function myName() {
    console.log("c");
    console.log("y");
    console.log("b");
}
myName()

function add(num1, numb2) {
    console.log(num1 + numb2);
}
add(3, 6)

function add(num1, numb2) {
    let result = num1 + numb2;
    return result;
    return num1 + numb2
}
const result = add(3, 6)
// console.log("Result ",result);
function logInMsg(username = "jhon") {
    if (username === undefined) {
        console.log("enter your name")
        return
    }
    return `${username} just logged in`
}
// console.log(logInMsg("cybr"))
console.log(logInMsg())


function calCartPrice(val1, val2, ...number1) {
    return number1
}
console.log(calCartPrice(200,500,600))

const user = {
    username: "cyber",
    price: 355
}

function handlObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handlObject(user)
handlObject({ username: "jhon", price: 399 })


const myNewArray = [200, 300, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 600]));