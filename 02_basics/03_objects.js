// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "David",
    "full name": "David Lee",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "david123@google.com",
    isLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "davidnew@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "david@office360.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();






