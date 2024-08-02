const user = {
    username : "cyber",
    price : 233,

    welcomeMsg: function(){
        console.log(`${this.username} , welcom`);
        // console.log(this);
    }

}
user.welcomeMsg() 
user.username ="jhon"
user.welcomeMsg()

console.log(this)
function one (){
    let username = "jolyy"
    console.log(this.username)
}
one()

const myfunction = ()=>{
    let username = "xyz"
    console.log(this.username);
}
// myfunction()

// basic arrow function 
// const add = (num1 , num2) =>{
//     return num1 + num2 
// }
// console.log(add(4 ,4));

//implicit return
const add = (num1 , num2) => num1 + num2 
   

console.log(add(4 ,5));