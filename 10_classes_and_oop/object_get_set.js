const User = {
    _email: "peter@gmail.com",
    _password: "abc123",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set password(value) {
        this._password = value
    }
}

const userOne = Object.create(User)
console.log(userOne.email);
