// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// Parameters, when function is defined
// Arguments, when function is called

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 6)
console.log("Result:", result);


function loginUserMessage(username = "sam") {
    if(username === undefined) {
        return "Please enter a username"
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage());
console.log(loginUserMessage("Thomas"));


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Thomas",
    price: 199
}

function handleObject(anyObject) { 
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Peter",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30, 40, 50]));
