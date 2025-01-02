let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

let computerChoice = 
    options[Math.floor((Math.random() * options.length))];

function getComputerChoice() {
    return computerChoice;
} 

getComputerChoice();
console.log(computerChoice);

let humanChoice = prompt("Choose rock, paper, or scissors");


function getHumanChoice() {
    if(humanChoice.toLowerCase() === "rock" 
    || humanChoice.toLowerCase() === "paper" 
    || humanChoice.toLowerCase() === "scissors") {
        return humanChoice.toLowerCase;
    }
    else {
        alert("not a valid choice!");
    }
}

console.log("---");
getHumanChoice();
console.log(`Your choice is ${humanChoice.toLowerCase()}`);
console.log("---");

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock": {
            if(computerChoice.toLowerCase() == "paper") {
                console.log("Computer wins! Paper beats rock!");
                computerScore++;
            }
            else if(computerChoice.toLowerCase() == "scissors") {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            }
            else {
                console.log("It's a tie!");
            }
        }
        break;
        case "paper": {
            if(computerChoice.toLowerCase() == "rock") {
                console.log("You win! Paper beats rock!");
                humanScore++;
            }
            else if(computerChoice.toLowerCase() == "scissors") {
                console.log("Computer wins! Scissors beats paper!");
                computerScore++;
            }
            else {
                console.log("It's a tie!");
            }
        }
        break;
        case "scissors": {
            if(computerChoice.toLowerCase() == "rock") {
                console.log("Computer wins! Rock beats scissors!");
                computerScore++;
            }
            else if(computerChoice.toLowerCase() == "paper") {
                console.log("You win! Scissors beats paper!");
                humanScore++;
            }
            else {
                console.log("It's a tie!");
            }
        }
        break;
    }
}

playRound(humanChoice, computerChoice);

console.log(humanScore);
console.log(computerScore);