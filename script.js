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
        let humanChoice = prompt("\n Let's Play a Game! Enter - 0: rock,  1: paper, 2: scissors: ");
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
        console.log('\x1b[36m%s\x1b[0m', `\n You win! ${humanChoice} beats ${computerChoice} \n`);
        humanScore++;
    }
    else if (map.get(computerChoice) === humanChoice) {
        console.log('\x1b[36m%s\x1b[0m', `\n You lose! ${computerChoice} beats ${humanChoice} \n`);
        computerScore++;
    }
    else {
        console.log('\x1b[36m%s\x1b[0m' ,`\n It's a tie! \n`)
    }
}

function playGame(rounds) {
    
    let roundCount = 0;
    
    while (roundCount < rounds) {
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        
        
        playRound(humanChoice, computerChoice); 
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer's Score: ${computerScore}`);
        
        roundCount++;
    }
    
    if (humanScore === 10) {
        console.log("You won the game!")
    } 
    else {
        console.log("You lost the game!")
    }
}
const map = new Map();

map.set("rock", "scissors");
map.set("paper", "rock");
map.set("scissors", "paper");


let humanScore = 0;
let computerScore = 0;

playGame(10);