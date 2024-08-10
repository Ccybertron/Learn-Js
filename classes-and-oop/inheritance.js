class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log (`Username is : ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username ,email , password){
        super(username)
        this.email =email
        this.password=password
    }
    addCourse(){
        console.log(`New course is added by : ${this.username}`)
    }
}

const CreateUser = new Teacher ("Ali Khan", "al@gmail.com" , "12345968")
// console.log(CreateUser)
CreateUser.addCourse()

console.log (CreateUser instanceof Teacher)