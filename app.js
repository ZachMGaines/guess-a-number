// import functions and grab DOM elements
import {
    compareNumbers
} from './utils.js';


/*const startButton = document.getElementById('start-button');*/
const randomNumber = document.getElementById('random-number');
const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const winLose = document.getElementById('win-or-lose');



// initialize state
let numberOfGuessesLeft = 4;


const correctNumber = Math.ceil(Math.random() * 10);
    


guessButton.addEventListener ('click', () => {
    
    randomNumber.textContent = correctNumber;
    const myGuess = Number(userInput.value);
    const results = compareNumbers(myGuess, correctNumber);
    numberOfGuessesLeft--;

    
    if (results === -1) {
        alert('too low!');
    } else if (results === 1) {
        alert('too-high!'); 
    } else if (results === 0) {
        alert('you win!');
    } 
    if (numberOfGuessesLeft < 1) {
        alert('You LOSE');
    }

});

// set event listeners to update state and DOM
