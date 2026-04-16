const clock = document.getElementById("clock")
// const clock = document.querySelector("#clock")

// let date = new Date();
// console.log(date.toLocaleTimeString());

const timeText = document.createTextNode("")
clock.appendChild(timeText)

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML = date.toLocaleTimeString();
    timeText.nodeValue = date.toLocaleTimeString();
}, 1000)