// for-in loop


// for-in loop on object

const myObj = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    cpp: "C++"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


// for-in loop on array

const langArr = ["js", "cpp", "py", "java", "rb"]

for (const key in langArr) {
    console.log(langArr[key]);    
}


// For-in does not work on maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('SA', "Saudia Arabia")

for (const key in map) {
    // console.log(map[key]);
}