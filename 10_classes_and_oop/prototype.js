// // let myName = "Tony"

// // console.log(myName.truelength);


let myHeros = ["Thor", "Hulk", "Spiderman"]

let heroPower = {
    Thor: "hammer",
    Hulk: "Strength",
    Spiderman: "Web",

    getSpiderPower: function() {
        console.log(`Spiderman power is ${this.Spiderman}`);
    }
}

Object.prototype.marvel = function() {
    console.log(`All heros are from Marvel`);
}


Array.prototype.superheros = function() {
    console.log(`All are superheros`);
}

// heroPower.marvel()
myHeros.marvel()
myHeros.superheros()
// heroPower.superheros()



// inheritance

const User = {
    name: "Harry",
    email: "harry@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "Poindexter       "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Mathew".trueLength()
"Nelson".trueLength()