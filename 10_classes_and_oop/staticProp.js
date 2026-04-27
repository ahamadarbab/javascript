class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return Math.floor(Math.random() * 1000 + 1)
    }
}

const userOne = new User("Happy")
//console.log(userOne.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const teacherOne = new Teacher("mathew", "mathew@gmail.com")
teacherOne.logMe()
// console.log(teacherOne.createId())

