// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeToUpperCase() {
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("Thomas", "thomas@gmail.com", "1234")
console.log(userOne.encryptPassword());
console.log(userOne.changeToUpperCase());


// behind the scene


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeToUpperCase = function() {
    return `${this.username.toUpperCase()}`
}

const userTwo = new User("peter", "peter@gmail.com", "4567")
console.log(userTwo.encryptPassword());
console.log(userTwo.changeToUpperCase());

