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

console.log(getComputerChoice());