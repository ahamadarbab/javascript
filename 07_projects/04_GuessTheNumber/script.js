let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".remaining")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")


let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if(guess < 1) {
        alert("Please enter a number greater than or equal to 1")
    }
    else if(guess > 100) {
        alert("Please enter a number smaller than or equal to 100")
    }
    else {
        prevGuess.push(guess)
        displayGuess(guess)
        checkGuess(guess)

        numGuess++

        if(numGuess > 10 && guess !== randomNumber) {
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed the number right`)
        endGame()
    }
    else if(guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        displayMessage("")
        playGame = true
    })
}