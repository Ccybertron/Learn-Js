class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log (`Username is : ${this.username}`)
    }

   static createId(){
        return '123'
    }
}



const CreatUser = new user ("cybeee")
// console.log(CreatUser.createId())

class Teacher extends user {
    constructor(username ,email){
        super(username)
        this.email = email
    }
}

const anotherUser = new Teacher ("anotheruser" , "anotheruser@another.com")
// anotherUser.logMe()
console.log(anotherUser.createId())