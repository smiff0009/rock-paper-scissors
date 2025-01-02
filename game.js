let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random * options.length)];
    return computerChoice;
} 

console.log(getComputerChoice());

function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper, or scissors");
    if(humanInput.toLowerCase() === "rock" || "paper" || "scissors") {
        let humanChoice = humanInput.toLowerCase();
        return humanChoice;
    }
    else {
        alert("not a valid choice!")
    }
}

console.log("---");
getHumanChoice();
console.log(`Your choice is ${humanChoice}`);