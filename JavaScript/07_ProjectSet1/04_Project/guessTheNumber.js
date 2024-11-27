let randomNum = parseInt(Math.random()*100+1)
const submit = document.querySelector('#guessSubmit')
const userInput = document.querySelector('#guessField')
const guessSlots = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.result')
const p = document.createElement('p')

let prevGuess = []
let count = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)|| guess<1 || guess>100){
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(count>=10){
            modify(guess)
            displayMessage(`Game over! The random number was ${randomNum}.`)
            endGame()
        }
        else{
            modify(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`Yayy! You won. You guessed the number in ${count} guesses.`)
        endGame()
    }
    else if(guess<randomNum){
        displayMessage(`The number is low, guess a higher number.`)
    }
    else{
        displayMessage(`The number is high, guess a lower number.`)
    }
}

function modify(guess){
    userInput.value = ''
    guessSlots.innerHTML += `${guess} `
    count++;
    remaining.innerHTML = `${11-count}`
}

function displayMessage(msg){
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button  style="border-radius: 5px; background-color: burlywood; color: black; font-weight: 600" id="newGame">Start a new game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100+1)
        displayMessage(``)
        count = 1
        prevGuess = []
        guessSlots.innerHTML = ''
        remaining.innerHTML = `${11-count}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}