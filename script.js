const choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let random = Math.floor(Math.random()*choiceArray.length);
    if (random === 0) {
        return choiceArray[0];
    } else if (random === 1) {
        return choiceArray[1];
    } else {
        return choiceArray[2];
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    if (playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors") {
        return console.log(`It's a tie
        Your score: ${playerScore}
        Computer score: ${computerScore}`); }
        else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore ++;
            return console.log(`You win! ${player} beats ${computer}
            Your score: ${playerScore}
        Computer score: ${computerScore}`);
        }
        else {
            computerScore ++;
            return console.log(`You lose! ${computer} beats ${player}
            Your score: ${playerScore}
        Computer score: ${computerScore}`);
        }
    }

function game(playerSelect) {
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

     if (playerScore >= 5) {
        return console.log(`Congratulations! You win the game!`);
    } else if (computerScore >= 5) {
        return console.log(`You lost. Try again next time!`);
    }
}