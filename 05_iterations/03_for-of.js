// for-of loop

// ["", "", ""]
// [{}, {}, {}]


// for-of loop on array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


// for-of loop on String

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet === " ") continue
    console.log(`Each char is: ${greet}`);
}


// for-of loop on map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// For-of does not work on objects

const myObj = {
    Game1: 'NFS',
    Game2: 'FIFA',
    Game3: 'GTA5'
}
// console.log(myObj);

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }   


