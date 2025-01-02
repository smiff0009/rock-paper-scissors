let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];
let computerChoice = options[(Math.floor(Math.random * 3))];

function getComputerChoice() {
    return computerChoice;
} 

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