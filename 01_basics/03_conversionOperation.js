let score = "Rohan"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 

// "33" => 33
// "33abc" or "Rohan" => NaN
// true => 1; false => 0


let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Rohan" => true


let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ****************** Operations ******************

let value = 3
let negValue = -value
console.log(negValue);


console.log(2 + 2);
console.log(5 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(4 / 2);
console.log(4 % 2);


let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(+ true);
console.log(+ "");


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(num1);
console.log(num2);
console.log(num3);


let gameCounter = 100
++gameCounter;
console.log(gameCounter);





















