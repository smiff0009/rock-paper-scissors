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
                return "Computer";
            }
            else {
                console.log("It's a tie!");
            }
        break;      
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound() {
    let result = checkWinner;
    if(result == "Computer") {
        computerScore++;
    }
    else if(result == "Human") {
        humanScore++;
    }
    else {
        console.log("It's a tie2!");
    }
}

function playGame() {
    console.log("Welcome");
    console.log(`Computer Score: ${computerScore}
                 Your Score: ${humanScore}`);
    for (let i = 0; i<5; i++) { 
        playRound();
        console.log(`Computer Score: ${computerScore}
            Your Score: ${humanScore}`);
        getComputerChoice();
        getHumanChoice();
    }
}

playGame();