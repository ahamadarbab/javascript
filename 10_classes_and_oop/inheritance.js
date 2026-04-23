class NewUser {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends NewUser {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherOne = new Teacher("Tony", "tony@gmail.com", "1234")
teacherOne.addCourse()

const userOne = new NewUser("Steve")
userOne.logMe()


// console.log(teacherOne === userOne);
// console.log(teacherOne === Teacher);
// console.log(teacherOne instanceof Teacher);
console.log(teacherOne instanceof NewUser);

