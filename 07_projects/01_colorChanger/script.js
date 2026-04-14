const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener("click", function(e) {
        console.log(e);
        console.log(e.target);

        // if(e.target.id === "grey") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "seagreen") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "blue") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "brown") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "violet") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "aqua") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "orange") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "blueviolet") {
        //     body.style.backgroundColor = e.target.id;
        // }

        switch(e.target.id) {
            case "grey" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "seagreen" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "blue" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "brown" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "violet" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "aqua" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "orange" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            case "blueviolet" : {
                body.style.backgroundColor = e.target.id
                break;
            }
            default : {
                console.log("Unknown color");
                
            }
        }
    })
    
})