const choiceArray = ["Rock", "Paper", "Scissors"];
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
    let player = playerSelection;
    let computer = computerSelection;
    if (playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors") {
        return `It's a tie`; }
        else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
            return `You win! ${player} beats ${computer}`;
        }
        else {
            return `You lose! ${computer} beats ${player}`;
        }
    }

function game(playerSelect) {
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if (roundResult.search("You win!")) {
        playerScore ++;
    } else if (roundResult.search("You lose!")) {
        computerScore ++;
    } 
}
