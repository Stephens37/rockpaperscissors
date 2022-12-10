function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random()*options.length)];
}

let getPlayerChoice = prompt("Choose rock, paper, or scissors.");

let getComputerChoice = computerPlay();


function answer(){
    if (getPlayerChoice.toUpperCase() === "ROCK" && getComputerChoice === "SCISSORS") {
        return "You win! Rock beats scissors."
    }
    else if (getPlayerChoice.toUpperCase() === "ROCK" && getComputerChoice === "PAPER") {
        return "You lose! Paper beats rock."
    }
    else if (getPlayerChoice.toUpperCase() === "PAPER" && getComputerChoice === "ROCK") {
        return "You win! Paper beats rock."
    }
    else if (getPlayerChoice.toUpperCase() === "PAPER" && getComputerChoice === "SCISSORS") {
        return "You lose! Scissors beats paper."
    }
    else if (getPlayerChoice.toUpperCase() === "SCISSORS" && getComputerChoice === "PAPER") {
        return "You win! Scissors beats paper."
    }
    else if (getPlayerChoice.toUpperCase() === "SCISSORS" && getComputerChoice === "ROCK") {
        return "You lose! Rock beats scissors."
    }
    else return "Its a tie!"
    }

console.log(answer())
