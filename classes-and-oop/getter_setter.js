class user {
    constructor(name , email , password){
        this.name = name
        this.email = email
        this.password= password
    }

    get email (){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
         this._email = value
    }
    get password (){
        return (`${this._password}cyb`)
    }
    set password(value){
        this._password = value
    }
}

const User = new user ("khan" , "khan@gmail.com" , "abc")
// console.log(User.password);
console.log(User.email);

