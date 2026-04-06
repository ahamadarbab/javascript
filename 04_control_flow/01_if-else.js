// if, if-else, if-else-if

const temperature = 41

if(temperature < 40) {
    console.log("less than 40");  
}
else {
    console.log("greater than 40");
}

// console.log("Execute");



const score = 200

if(score > 100) {
    let power = "fly"
    console.log(`User power is: ${power}`);
}

// console.log(`User power: ${power}`);



const balance = 1000

// if(balance > 500) console.log("Greater than 500");

if(balance < 500) {
    console.log("Balance less than 500");
}
else if(balance < 750) {
    console.log("Balance less than 750");
}
else if(balance < 900) {
    console.log("Balance less than 900");
}
else {
    console.log("Balance less than 1200");
}
 


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard) {
    console.log("User is allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in!");
}