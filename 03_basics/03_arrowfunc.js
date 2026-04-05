const user = {
    username: "Emma",
    price: 999,

    welcomeMessage: function() {
        console.log(`Hello ${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Peter"
user.welcomeMessage()

// console.log(this);


// function one() {
//     let username = "Rahul"
//     console.log(this.username);
// }
// one()

// const one = function() {
//     let username = "Patrick"
//     console.log(this.username);
// }
// one()

const one = () => {
    let username = "Patrick"
    console.log(username);
}
one()


// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "John"})

console.log(addTwo(3, 4));
