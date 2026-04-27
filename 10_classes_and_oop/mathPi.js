// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);


const obj  = {
    name: "peter",
    password: "1234",
    isAvailable: true,

    isLoggedIn: function() {
        console.log("User logged in");
    }
}

console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: false,

})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}

