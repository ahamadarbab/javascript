// promise one

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})


// promise two

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// promise three

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Peter", email: "peter@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user); 
})


// promise four

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Thomas", password: "1234"})
        }
        else {
            reject("ERROR: Something went wrong!")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((userName) => {
    console.log(userName);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))


// promise five

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "1234"})
        }
        else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



async function getAllUsers() {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()



fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))