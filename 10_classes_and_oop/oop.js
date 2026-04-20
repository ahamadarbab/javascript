// Object literal

const user = {
    username: "Peter",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor function

const promiseOne = new Promise()
const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }
    // return this
}

const userOne = new User("Patrick", 12, true)
const userTwo = new User("Thomas", 10, false)
console.log(userOne);
// console.log(userOne instanceof User);
console.log(userTwo);
