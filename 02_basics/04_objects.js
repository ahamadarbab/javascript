// object singleton

// const tinderUser = new Object()     // Singleton object
const tinderUser1 = {}      // Non-singleton object

tinderUser1.id = 123
tinderUser1.name = "Sammy"
tinderUser1.isLoggedIn = false

// console.log(tinderUser);
console.log(tinderUser1);

const regularUser = {
    email: "david456@gmail.com",
    fullname: {
        userFullname: {
            firstname: "David",
            lastname: "Lee"
        }
    }
}

console.log(regularUser.fullname.userFullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "email1@gmail.com"
    },
    {
        id: 2,
        email: "email2@gmail.com"
    },
    {
        id: 3,
        email: "email3@gmail.com"
    },
    {
        id: 4,
        email: "email4@gmail.com"
    }  
]
console.log(users[1].email);

console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));




const course = {
    coursename: "JavaScript Mastery",
    price: 999,
    courseInstructor: "Peter"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);



