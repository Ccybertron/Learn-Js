// object literals

const user = {
    username : "Cybertron",
    loginCount: 8,
    isLoggedIn: true,
    getUserDetail: function(){
        // console.log("got user deatails");
        // console.log(this.username)
        // console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());



//construction function


function User(username , loginCount , isLoggedIn ){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
    this.greeting = function(){
        console.log(`welcome : ${this.username}`);
        
    }
}
// const userOne = User ("cyber" , 10 , true)
// const userTwo = User("khan" , 5 , true)
const userOne =  new User ("cyber" , 10 , true)
const userTwo = new User("khan" , 5 , true)


console.log(userOne)
// console.log(userTwo);


//when used keyword "new" empty object is created called instance
//constructor function called via keyword "new" 
//Arguments inject in keyword "this"





