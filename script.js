const prompt=require("prompt-sync")({sigint:true});


function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice () {
    
    let isValidChoice = false;

    while (isValidChoice === false) {
        let humanChoice = prompt("Let's Play a Game! Enter - 0: rock,  1: paper, 2: scissors: ");
        let humanChoiceNum = Number(humanChoice);

        if (humanChoice >= 0 && humanChoice <= 2) {
            switch (humanChoiceNum) {
                case 0:
                    return "rock";
                case 1:
                    return "paper"
                case 2:
                    return "scissors"
            }
        }
        else {
            console.log("Invalid response. Try again.");
            isValidChoice = false;
        }
    }

}

function playRound(humanChoice, computerChoice) {

    if (map.get(humanChoice) === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (map.get(computerChoice) === humanChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else {
        console.log(`It's a tie!`)
    }
}

const map = new Map();

map.set("rock", "scissors");
map.set("paper", "rock");
map.set("scissors", "paper");

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;


playRound(humanChoice, computerChoice); 
console.log(humanScore);
console.log(computerScore);