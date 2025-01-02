let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random * options.length)];
    return computerChoice;
} 

console.log(getComputerChoice());

let humanChoice = prompt("Choose rock, paper, or scissors");

function getHumanChoice() {
    if(humanChoice.toLowerCase() === "rock" || "paper" || "scissors") {
        return humanChoice.toLowerCase;
    }
    else {
        alert("not a valid choice!")
    }
}

console.log("---");
getHumanChoice();
console.log(`Your choice is ${humanChoice}`);