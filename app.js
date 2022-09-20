
// Arry of rock, paper, and scissors
const rockPaperScissors = ["Rock", "Paper", "Scissors"];

// Will randomly return either "Rock", "Paper". or "Scissors"
function getComputerChoice() {

    // .random gets a number from 0 to 1, muliplies by array length (.25 * 3 = .75, .50 * 3 = 1.50, .75 * 3 = 2.25)
    // .floor will round the down the number that is received from .random * array
    const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);

    // randomIndex is going going to be 0, 1 or 2. rockPaperScissors[] will call the full array item
    const randomChoice = rockPaperScissors[randomIndex];
    
    // Whenever getComputerChoice() is called, randomChoice will be returned
    return randomChoice;
}

// Funcation taking two parameters, one from player and one from the comptuter
function playRound(playerSelection, computerSelection) {

    // The parameters from the function will turn lower case so they can be case-insensitive
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // If the player and computer have the same input, then it will return "It's a tie!"
    if (((player == "rock") && (computer == "rock")) || 
    ((player == "scissors") && (computer == "scissors")) ||
    ((player == "paper") && (computer == "paper"))) {
        return "It's a tie!";
    } 
    
    // All scenarios where the player wins and it will return "You win! x beats x."
    else if ((player == "rock") && (computer == "scissors")) {
        return "You win! Rock beats Scissors.";
    } else if ((player == "scissors") && (computer == "paper")) {
        return "You win! Scissors beats Paper.";
    } else if ((player == "paper") && (computer == "rock")) {
        return "You win! Paper beats Rock.";
    } 
    
    // All scenarios where the player loses and it will return "You lose! x beats x."
    else if ((player == "rock") && (computer == "paper")) {
        return "You lose! Paper beats Rock.";
    } else if ((player == "scissors") && (computer == "rock")) {
        return "You lose! Rock beats Scissors.";
    } else if ((player == "paper") && (computer == "scissors")) {
        return "You lose! Scissors beats Paper.";
    } 
    
}



// Assigns variables for the players and computers choice
const playerSelection = "Paper";
const computerSelection = getComputerChoice();

// Calling the function with the variables from previously
console.log(playRound(playerSelection, computerSelection));