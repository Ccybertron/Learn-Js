function SetUserName(username){
    this.username = username
    console.log("called")
}
function CreateUser(username , email , password){

    SetUserName.call(this, username)
    
    this.email = email ;
    this.password = password;

}

const cyber = new CreateUser ("cybertron" , "cyb@gooogle.com" , "1234")
console.log(cyber);
