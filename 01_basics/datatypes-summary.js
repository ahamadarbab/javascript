// 1. Primitive

// 7 types: Number, String, Boolean, BigInt, null, Symbol, undefined

const score = 100   // Number
const scoreValue = 100.3    // Number

let name = "Ajay"   // String
let city = "Jaipur"    // String

const isLoggedIn = false    // Boolean
const istrue = true    // Boolean

const bigNumber = 343165133561353555113n    // BigInt

const outsideTemp = null    // null

const id = Symbol('123')    // Symbol
const anotherId = Symbol('123')    // Symbol

let userEmail;    // undefined
let userPhone = undefined    // undefined


// 2. Non primitive (Reference)

// Array, Objects, Functions

const superHeros = ["Shaktiman", "krish", "Hulk"];    // Array

let myObj = {       
    name: "Rohan",      // Object
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");     // Function
}
myFunction();

console.log(typeof bigNumber);



// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) & heap (Non primitive)

let myCityName = "Agra"

let anotherCityName = myCityName
anotherCityName = "Noida"

console.log(myCityName);
console.log(anotherCityName);


let userOne = {
    email: "user@gmail.com",
    city: "Agra",
}

let userTwo = userOne
userTwo.email = "user123@google.com"

console.log(userOne.email);
console.log(userTwo.email);

