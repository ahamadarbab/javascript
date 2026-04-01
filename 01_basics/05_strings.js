const name = "Arjun"
const repoCount = 10

// console.log(name + " has " + repoCount + " Repo");

// String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("arjun-km-web")

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(5, 7)
console.log(anotherString);

const newStringOne = "    arjun    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/arjun%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('web'));

console.log(gameName.split('-'));












