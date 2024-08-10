// let myName = "saif         "
// let myFavSubj = "javascript           "

// console.log(myName.TrueLength);
// console.log(myFavSubj.length);


let hero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanpwer: function () {
        console.log(`spiderman power is ${this.spiderman}`);

    }
}
Object.prototype.cybertron = function () {
    console.log("cybertron is prestent in all objects");

}
// heroPower.cybertron()
// hero.cybertron()


Array.prototype.cybee = function () {
    console.log(`welcome to cybeeee`);

}
// hero.cybee()
// heroPower.cybee()

//inheritance 
const user = {
    name: "khan",
    email: "example@google.com"
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeNotes: 'JS Notes',
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)



let anotherUsername = "saif     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"cybertron".trueLength()