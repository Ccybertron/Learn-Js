// const tindrUser = new Object()
const tindrUser = {}

tindrUser.id ="123"
tindrUser.name = "jhon"
tindrUser.isLoggedIn = false
console.log(tindrUser)

const regUser = {
    email : "jhon@goole.com",
        fullname:{
            username:{
                firstname: "Rock",
                lastname: "jolly"
            }
        }
}
console.log(regUser.fullname.username.lastname);

object1 = {1: "a" , 2: "b"}
object2 = {3: "c" , 4: "d"}
// const object3 = (object1 , object2);
// const object3 = Object.assign({}, object1 , object2)
const object3 = { ...object1, ...object2}
console.log(object3);

const user =[
    {
        id : "1",
        email :"abc@gmail.com"
    },
    {
        id : "1",
        email :"abc@gmail.com"
    },
    {
        id : "1",
        email :"abc@gmail.com"
    },  
]

user[1].email
console.log(tindrUser)

console.log(Object.keys(tindrUser));
console.log(Object.values(tindrUser));
console.log(Object.entries(tindrUser));

console.log(tindrUser.hasOwnProperty('isLoggedIn'))


