let choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

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
    playerSelection = choiceArray[0];
    computerSelection = computerPlay();
    if (playerSelection === choiceArray[0] && computerSelection === choiceArray[0] || playerSelection === choiceArray[1] && computerSelection === choiceArray[1] || playerSelection === choiceArray[2] && computerSelection === choiceArray[2]) {
        return `It's a tie`; }
        else if (playerSelection === choiceArray[0] && computerSelection === choiceArray[2] || playerSelection === choiceArray[2] && computerSelection === choiceArray[1] || playerSelection === choiceArray[1] && computerSelection === choiceArray[0]) {
            playerScore ++;
            return `You win! ${playerSelection} beats ${computerSelection}! `;        
        } else {
            computerScore ++;
            return `You lose! ${computerSelection} beats ${playerSelection}!
            `;
        }
    }

console.log(playRound());