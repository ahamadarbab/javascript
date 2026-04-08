// for-each loop


// for-each loop on array

const coding = ["js", "python", "java", "cpp", "ruby"]

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);    
})


function printMe(item) {
    console.log(item);    
}

coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})



// for-each loop on array of objects

const myCoding = [
    {
        langName: "JavaScript",
        langFileName: "js",
    },
    {
        langName: "Java",
        langFileName: "java",
    },
    {
        langName: "Python",
        langFileName: "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )



// for-each loop on map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('SA', "Saudia Arabia")

// map.forEach( (value) => {
//     console.log(value); 
// })

// map.forEach( (value, key) => {
//     console.log(value, key);  
// })

map.forEach( (value, key, map1) => {
    console.log(value, key, map1);
    
})
