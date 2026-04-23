class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email
    }

    set email(userEmail) {
        this._email = userEmail
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}qwerty`
    }

    set password(value) {
        this._password = value
    }
}

const userOne = new User("peter@gmail.com", "abc1234")
console.log(userOne.password);
console.log(userOne.email);

