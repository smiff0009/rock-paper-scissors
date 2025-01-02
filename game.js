let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];
/*
let computerChoice = 
    options[Math.floor((Math.random() * options.length))];
*/
function getComputerChoice() {
    let computerChoice = 
    options[Math.floor((Math.random() * options.length))];
    return computerChoice;
} 
/*
getComputerChoice();
console.log(computerChoice);
*/
/*
let unvalidatedHumanChoice = 
prompt("Choose rock, paper, or scissors");

let humanChoice = unvalidatedHumanChoice.toLowerCase();
*/

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function getHumanChoice() {
    let unvalidatedHumanChoice = 
    prompt("Choose rock, paper, or scissors");
    let humanChoice = unvalidatedHumanChoice.toLowerCase();
    if(humanChoice.toLowerCase() === "rock" 
    || humanChoice.toLowerCase() === "paper" 
    || humanChoice.toLowerCase() === "scissors") {
        return humanChoice.toLowerCase;
    }
    else {
        alert("not a valid choice!");
    }
}


function playRound(humanSelection, computerSelection) {
    switch(humanSelection) {
        case "rock": {
            if(computerSelection == "paper") {
                console.log("Computer wins! Paper beats rock!");
                computerScore++;
            }
            else if(computerSelection == "scissors") {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            }
            else {
                console.log("It's a tie!");
            }
        }
        break;
        case "paper": {
            if(computerSelection == "rock") {
                console.log("You win! Paper beats rock!");
                humanScore++;
            }
            else if(computerSelection == "scissors") {
                console.log("Computer wins! Scissors beats paper!");
                computerScore++;
            }
            else {
                console.log("It's a tie!");
            }
        }
        break;
        case "scissors": {
            if(computerSelection == "rock") {
                console.log("Computer wins! Rock beats scissors!");
                computerScore++;
            }
            else if(computerSelection == "paper") {
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


function game() {
    for(let i=0; i<5; i++) {
        getComputerChoice();
        getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Computer score is ${computerScore}
            and your score is ${humanScore}`);
    if(i == 4 && humanScore > computerScore) {
        console.log("Congratulations! You won!");
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Your Score: ${humanScore}`);
    }
    else if(i == 4 && computerScore > humanScore) {
        console.log("Sorry, the computer beat you!");
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Your Score: ${humanScore}`);
    }
    else {
        console.log("It's a tie!");
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Your Score: ${humanScore}`);
    }
}
}

game();