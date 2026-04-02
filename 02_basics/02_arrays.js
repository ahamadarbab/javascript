const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcheros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(dcheros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcheros)
// console.log(allHeros);

// spread operator

const newHeros = [...marvelHeros, ...dcheros]
// console.log(newHeros);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const newArr1 = newArr.flat(2)      // can give Infinity as depth
console.log(newArr1);


console.log(Array.isArray("Delhi"));
console.log(Array.from("Delhi"));
console.log(Array.from({name: "David"}));       // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





