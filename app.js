
// Arry of rock, paper, and scissors
const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;


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
    let log = "";
    

    // The parameters from the function will turn lower case so they can be case-insensitive
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // If the player and computer have the same input, then it will return "It's a tie!"
    if (((player == "rock") && (computer == "rock")) || 
    ((player == "scissors") && (computer == "scissors")) ||
    ((player == "paper") && (computer == "paper"))) {
        log = "It's a tie!";
    } 
    
    // All scenarios where the player wins and it will return "You win! x beats x."
    else if ((player == "rock") && (computer == "scissors")) {
        log = "You win! Rock beats Scissors.";
    } else if ((player == "scissors") && (computer == "paper")) {
        log = "You win! Scissors beats Paper.";
    } else if ((player == "paper") && (computer == "rock")) {
        log = "You win! Paper beats Rock.";
    } 
    
    // All scenarios where the player loses and it will return "You lose! x beats x."
    else if ((player == "rock") && (computer == "paper")) {
        log = "You lose! Paper beats Rock.";
    } else if ((player == "scissors") && (computer == "rock")) {
        log = "You lose! Rock beats Scissors.";
    } else if ((player == "paper") && (computer == "scissors")) {
        log = "You lose! Scissors beats Paper.";
    } 

    // If the player returns anything other than "Rock", "Paper". or "Scissors" then it will return "That is not a valid choice."
    else {
        log = "That is not a valid choice.";
    }

    // The function will return whatever log equals
    return log;
}


// Function that will play 5 rounds of rock paper scissors
function game() {

    // For loop that will repeat whatever is in the for loop 5 times, making it so the game has 5 rounds
    for (let i = 0; i < 5; i++) {

        // Will announce the current round before user submits their choice
        console.log("Round " + (i + 1));

        // Used to be outside the function. Moved it inside so it repeatly asks the user what 
        // choice they want to make and so the computer has different choices every round as well
        const playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'!");
        const computerSelection = getComputerChoice();
        // Call the text that comes from playRound() function, the "You win...", "You lose...", "You tied..."
        let roundResult = playRound(playerSelection, computerSelection);

        // Calling the function playRound() with the options from the previous variables
        console.log(playRound(playerSelection, computerSelection));
                
        // Searchs if roundResult includes "win" or "lose", it'll add 1 to either playerScore 
        // or computerScore (variables set to 0 in the beginning of script) appropriatley
        if (roundResult.search("win") >= 0) {
            playerScore++;
        } else if (roundResult.search("lose") >= 0) {
            computerScore++;
        }
        
        // Calling the current score of the round
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    
    }
}

// Calling function called game()
game();
