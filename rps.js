function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function getPlayerChoice()
console.log(getComputerChoice())