// ******** array ********

const myArray = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["Hulk", "Thor", "DareDevil"]
const myArray2 = new Array(23, 34, 45, 56)

console.log(myArray2[2]);

// ****** Array methods ****** 

// myArray.push(7)
// myArray.push(8)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray);

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(6));

// const newArr = myArray.join(' + ')

// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

// Slice & Splice

console.log("A ", myArray);

const myArr1 = myArray.slice(1, 3)
console.log(myArr1);

console.log("B ", myArray);

const myArr2 = myArray.splice(0, 3)
console.log(myArr2);
console.log("C ", myArray);







