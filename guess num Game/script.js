let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const inputField = document.querySelector('#input-field');
const submitBtn = document.querySelector('.btn');
const guesses = document.querySelector('.prev-guess');
const remaining = document.querySelector('.remaining');
const messageSection = document.querySelector('.message');
const newGame = document.querySelector('.newGame');
const startOver = document.querySelector('.newBtn')


//firstly check whether user is available for playing game or not 
let playGame = true;
let prevGuesses = []; 
let noOfGuesses = 1;

if (playGame) {   
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = parseInt(inputField.value);
        validateGuess(input);
    })
}

function validateGuess (input) {
    if (input === '' || input < 0 ||  input > 100 || isNaN(input)) {
        dispMessage(`Please Enter a Valid input`)
    } else {
        prevGuesses.push(input);
        if (noOfGuesses > 9) {
            //no remaining attempt
            endGame();
            cleanUp (input);
            dispMessage(`Game Over, Random number was ${randomNumber}`);
        } else {
            //having remaining attempt
            cleanUp(input);
            if ( input === randomNumber) {
                dispMessage (`You Guessed It Right`)
                prevGuesses.push(input)
                cleanUp(input);
                endGame();
            } else if (input < randomNumber) {
                dispMessage(`You guessed Too low...`);
            } else {
                dispMessage (`You guessed Too high`);
                cleanUp();
            }
        }
    }
}

function dispMessage (message) {
    messageSection.innerHTML = `${message}`;
}

function cleanUp (input) {
    inputField.value = "";
    guesses.innerHTML += `${input}, `;
    noOfGuesses++;
    remaining.innerHTML = `${11-noOfGuesses}`;
}

function endGame () {
    inputField.value = "";
    inputField.setAttribute ('disabled', '');
    submitBtn.setAttribute ('disabled', '');

    
    startOver.innerHTML = `<p class="newGame" style= "padding: 0.5rem 0.9rem;">New Game</p>`;

    console.log(startOver)
    
    playGame = false;

    newGameFn();

}

function newGameFn()   {
    const newGameBtn = document.querySelector('.newGame');
    newGameBtn.addEventListener ('click' , (e) => {
        let randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        noOfGuesses = 1;
        guesses.innerHTML = '';
        remaining.innerHTML = `${11 - noOfGuesses}`;
        inputField.removeAttribute ('disabled');
        submitBtn.removeAttribute( 'disabled');
        startOver.innerHTML = "";
        dispMessage("");

        playGame = true;
    });
}