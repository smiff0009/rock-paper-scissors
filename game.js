let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random * options.length)];
    return computerChoice;
} 

console.log(getComputerChoice());