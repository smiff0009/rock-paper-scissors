const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = 
    options[Math.floor((Math.random() * options.length))];
    return computerChoice;
}

function getHumanChoice() {
    let unvalidatedHumanChoice = 
    prompt("Choose rock, paper, or scissors");
    let lowerHumanChoice = unvalidatedHumanChoice.toLowerCase();
    if(lowerHumanChoice == "rock" ||
        lowerHumanChoice == "paper" ||
        lowerHumanChoice == "scissors") {
            return lowerHumanChoice;
        }
    else {
        alert("Not a valid choice!");
    }  
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function checkWinner(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if(computerChoice == "paper") {
                console.log("Computer wins! Paper beats rock!");
                return "Computer";
            }
            else if(computerChoice == "scissors") {
                console.log("You win! Rock beats scissors!");
                return "Human";
            }
            else {
                console.log("It's a tie!");
            }
        break;
        case "paper":
            if(computerChoice == "rock") {
                console.log("You win! Paper beats rock!");
                return "Human";
            }
            else if(computerChoice == "scissors") {
                console.log("Computer wins! Scissors beats paper!");
                return "Computer";
            }
            else {
                console.log("It's a tie!");
            }
        break; 
        case "scissors":
            if(computerChoice == "rock") {
                console.log("Computer wins! Rock beats scissors!");
                return "Computer";
            }
            else if(computerChoice == "paper") {
                console.log("You win! Scissors beats paper!");
                return "Human";
            }
            else {
                console.log("It's a tie!");
            }
        break;      
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = checkWinner(humanChoice, computerChoice);
    if(result == "Computer") {
        computerScore++;
    }
    else if(result == "Human") {
        humanScore++;
    }
    else {
    }
}

function playGame() {
    console.log("Welcome");
    for (let i = 0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Computer Score: ${computerScore}
            Your Score: ${humanScore}`);
    }
    console.log(recapGame());
}

function recapGame() {
    if(computerScore > humanScore) {
        console.log(`Computer wins the game 
            ${computerScore} to ${humanScore}!`);
    }
    else if(humanScore > computerScore) {
        console.log(`You win the game 
            ${humanScore} to ${computerScore}!`);
    }
    else {
        console.log("The game was a tie!");
    }
}
playGame();