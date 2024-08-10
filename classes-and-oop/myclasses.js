// class user {
//     constructor(username , email , password){
//         this.username = username
//         this.email =email
//         this.password = password
//     }
//     encryptPassowrd(){
//         return (`${this.password}abc`)
//     }

//     UserNameTransform (){
//         return (`${this.username.toUpperCase()}`)
//     }
// }

// const createUser = new user ("cybee" , "cybee@cybee.com" , "123")
// console.log(createUser.encryptPassowrd());
// console.log(createUser.UserNameTransform());

//behind the scene

function user (username , email , password){
    this.username = username
    this.email =email
    this.password = password
}

user.prototype.encryptPassowrd = function (){
    return (`${this.password}abc`)
}
user.prototype.UserNameTransform = function (){
    console.log(this.username.toUpperCase());
}


const createUser = new user ("khan" , "khan@cybee.com" , "123")
// console.log(createUser)
console.log(createUser.encryptPassowrd());
console.log(createUser.UserNameTransform());