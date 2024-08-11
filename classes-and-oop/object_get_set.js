const user = {
    _email: 'khan@gmail.com',
    _password: 'abnvff',


    get email (){
        return this._email.toUpperCase()
    },

    set email  (value){
        this._email = value
    }

}

const person = Object.create(user)
console.log(person.email);
