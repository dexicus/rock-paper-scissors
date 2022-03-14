//Generate a computer choice
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

//Compare values to determine winner of a single round
function playRound(player, computer) {
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' &&
            computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        roundResult.textContent = (`You won - ${playerSelection} beats ${computerSelection}.`);
        return result = 'playerWin';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' &&
            computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        roundResult.textContent = (`You lost - ${computerSelection} beats ${playerSelection}.`);
        return result = 'computerWin';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' &&
            computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        roundResult.textContent = ('You drew.');
        return result = 'draw';
    }
}

//First to 5 wins, compare wins to detemine overall winner
function printWhoWon() {
    if (playerWinCount === 5 && playerWinCount > computerWinCount) {
        buttons.forEach((button) => {
            button.disabled = true
        });
        winner.textContent = 'You won.'
        createResetButton();
        return
    }
    else if (computerWinCount === 5 && playerWinCount < computerWinCount){
        console.log('Computer wins.');
        buttons.forEach((button) => {
            button.disabled = true
        });
        winner.textContent = 'Computer wins.'
        createResetButton();
        return
    }
    else return
}

//Button choice function
function chooseRpsOption () {
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            playerSelection = button.textContent.toLowerCase();
            playRound(playerSelection, computerSelection);
            if (result === 'playerWin') {
                ++playerWinCount
            }
            else if (result === 'computerWin') {
                ++computerWinCount
            }
            else if (result === 'draw') {
                ++drawCount
            }
            roundResult.textContent = `Computer chose ${computerSelection}. Player: ${playerWinCount} Computer: ${computerWinCount}`;
            computerSelection = computerPlay();
            printWhoWon();
            return
        });
    });
}

function createResetButton() {
    resetButton.classList.add('reset');
    resetButton.textContent = 'Reset';
    score.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        window.location.reload()
    });
}


function main() {
    chooseRpsOption();
}


//Take player & computer choice, assign to a variable
let playerSelection = '';
let computerSelection = computerPlay();


//Track who wins how many games, and how many are draws
let result = '';
let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');
const winner = document.querySelector('.winner');

//Reset button
const score = document.querySelector('.score');
const resetButton = document.createElement('button');


main();