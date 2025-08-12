// const prompt=require("prompt-sync")({sigint:true});


// function getComputerChoice() {

//     let randomNum = Math.floor(Math.random() * 3);

//     switch (randomNum) {
//         case 0:
//             return "rock";
//         case 1:
//             return "paper"
//         case 2:
//             return "scissors"
//     }
// }

// function getHumanChoice () {
    
//     let isValidChoice = false;

//     while (isValidChoice === false) {
//         let humanChoice = prompt("\n Let's Play a Game! Enter - 0: rock,  1: paper, 2: scissors: ");
//         let humanChoiceNum = Number(humanChoice);

//         if (humanChoice >= 0 && humanChoice <= 2) {
//             switch (humanChoiceNum) {
//                 case 0:
//                     return "rock";
//                 case 1:
//                     return "paper"
//                 case 2:
//                     return "scissors"
//             }
//         }
//         else {
//             console.log("Invalid response. Try again.");
//             isValidChoice = false;
//         }
//     }

// }

// function playRound(humanChoice, computerChoice) {

//     if (map.get(humanChoice) === computerChoice) {
//         console.log('\x1b[36m%s\x1b[0m', `\n You win! ${humanChoice} beats ${computerChoice} \n`);
//         humanScore++;
//     }
//     else if (map.get(computerChoice) === humanChoice) {
//         console.log('\x1b[36m%s\x1b[0m', `\n You lose! ${computerChoice} beats ${humanChoice} \n`);
//         computerScore++;
//     }
//     else {
//         console.log('\x1b[36m%s\x1b[0m' ,`\n It's a tie! \n`)
//     }
// }

// function playGame(rounds) {
    
//     let roundCount = 0;
    
//     while (roundCount < rounds) {
        
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
        
        
        
//         playRound(humanChoice, computerChoice); 
//         console.log(`Your Score: ${humanScore}`);
//         console.log(`Computer's Score: ${computerScore}`);
        
//         roundCount++;
//     }
    
//     if (humanScore === 10) {
//         console.log("You won the game!")
//     } 
//     else {
//         console.log("You lost the game!")
//     }
// }
// const map = new Map();

// map.set("rock", "scissors");
// map.set("paper", "rock");
// map.set("scissors", "paper");


// let humanScore = 0;
// let computerScore = 0;

// playGame(10);

const map = new Map();

map.set("rock", "scissors");
map.set("paper", "rock");
map.set("scissors", "paper");


let humanScore = 0;
let computerScore = 0;


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

function playRound(humanChoice, computerChoice) {

    let playerPoints = document.querySelector("#player-score");
    let computerPoints = document.querySelector("#computer-score");
    let msg = document.querySelector("#msg-play");
    let playerOptions = document.querySelector(".player-options");

    if (map.get(humanChoice) === computerChoice) {
        console.log('\x1b[36m%s\x1b[0m', `\n You win! ${humanChoice} beats ${computerChoice} \n`);
        humanScore++;
        playerPoints.textContent = humanScore.toString();
        msg.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (map.get(computerChoice) === humanChoice) {
        console.log('\x1b[36m%s\x1b[0m', `\n You lose! ${computerChoice} beats ${humanChoice} \n`);
        computerScore++;
        computerPoints.textContent = computerScore.toString();
        msg.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else {
        console.log('\x1b[36m%s\x1b[0m' ,`\n It's a tie! \n`)
        msg.textContent =  `It's a tie!`;
    }


    if (humanScore >= 3) {
        msg.textContent = `You have WON the game! :)`;
        playerOptions.style.visibility = "hidden";

        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    else if (computerScore >= 3) {
        msg.textContent = `You have LOST the game! :(`;
        playerOptions.style.visibility = "hidden";

        setTimeout(() => {
            location.reload();
        }, 5000);
    }
}



const choices = document.querySelectorAll("img");

choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        let playerChoice = choice.getAttribute("id");
        let computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);

        // alert(`Player Choice: ${playerChoice}`);
        // alert(`Computer Choice: ${computerChoice}`);
    });
});