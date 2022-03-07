//Generate a computer choice
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

//Compare values to determine winner of a single round
function playRound(player, computer) {
    playerSelection = prompt('Choose rock paper or scissors...').toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You won - ${playerSelection} beats ${computerSelection}.`);
        return result = 'playerWin';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`You lost - ${computerSelection} beats ${playerSelection}.`);
        return result = 'computerWin';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log('You drew.');
        return result = 'draw';
    }
}

//Repeat 5x for a full game
function playFullGame() {
    for (let i = 0; i < 5; ++i) {
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
        console.log(`Computer chose ${computerSelection}. Player: ${playerWinCount} Computer: ${computerWinCount}`);
        computerSelection = computerPlay();
        if (playerWinCount === 3 || computerWinCount === 3) {
            return
        }
    }
}

//Compare wins to detemine overall winner
function printWhoWon() {
    if (playerWinCount > computerWinCount) {
        console.log('Player wins.');
    }
    else if (playerWinCount < computerWinCount){
        console.log('Computer wins.');
    }
    else if (playerWinCount === computerWinCount) {
        console.log('The game is a draw.');
    }
}

function main() {
    playFullGame();
    printWhoWon();
}

//Take player & computer choice, assign to a variable
let playerSelection = '';
let computerSelection = 'computerPlay()';


//Track who wins how many games, and how many are draws
let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;


main();