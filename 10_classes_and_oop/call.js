function setUsername(username) {
    // complex DB calls
    this.username = username
}

function createUser(userName, email, password) {
    setUsername.call(this, userName)
    
    this.email = email
    this.password = password
}

const newUser = new createUser("patrick", "patrick@gmail.com", "1234")
console.log(newUser);
