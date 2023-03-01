
// Arry of rock, paper, and scissors
const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

//const rock = document.getElementById("rockBtn");
//const paper = document.getElementById("paperBtn");
//const scissors = document.getElementById("scissorsBtn");

let results = document.getElementById("results");
let pScore = document.getElementById("playerScore");
let cScore = document.getElementById("computerScore");
//results.textContent = "Hello World"

let rock = document.getElementById("rockBtn").addEventListener("click", inputPlayerRock)
function inputPlayerRock() {
    let computerSelection = getComputerChoice(); 
    let playerSelection = 'rock';
    let result = playRound(playerSelection, computerSelection);
    return result;
}

let paper = document.getElementById("paperBtn").addEventListener("click", inputPlayerPaper)
function inputPlayerPaper() {
    let computerSelection = getComputerChoice(); 
    let playerSelection = 'paper';
    let result = playRound(playerSelection, computerSelection);
    return result;
}

let scissors = document.getElementById("scissorsBtn").addEventListener("click", inputPlayerScissors)
function inputPlayerScissors() {
    let computerSelection = getComputerChoice(); 
    let playerSelection = 'scissors';
    let result = playRound(playerSelection, computerSelection);
    return result;
}



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

    console.log(playerSelection);
    console.log(computerSelection);

    // If the player and computer have the same input, then it will return "It's a tie!"
    if (((player == "rock") && (computer == "rock")) || 
    ((player == "scissors") && (computer == "scissors")) ||
    ((player == "paper") && (computer == "paper"))) {
        return results.textContent = "It's a tie!";
    } 
    
    // All scenarios where the player wins and it will return "You win! x beats x."
    else if ((player == "rock") && (computer == "scissors")) {
        playerScore += 1;
        pScore.textContent = playerScore;
        return results.textContent = "You win! Rock beats Scissors.";
    } else if ((player == "scissors") && (computer == "paper")) {
        playerScore += 1;
        pScore.textContent = playerScore;
        return results.textContent = "You win! Scissors beats Paper.";
    } else if ((player == "paper") && (computer == "rock")) {
        playerScore += 1;
        pScore.textContent = playerScore;
        return results.textContent = "You win! Paper beats Rock.";
    } 
        
    // All scenarios where the player loses and it will return "You lose! x beats x."
    else if ((player == "rock") && (computer == "paper")) {
        computerScore += 1;
        cScore.textContent = computerScore;
        return results.textContent = "You lose! Paper beats Rock.";
    } else if ((player == "scissors") && (computer == "rock")) {
        computerScore += 1;
        cScore.textContent = computerScore;
        return results.textContent = "You lose! Rock beats Scissors.";
    } else if ((player == "paper") && (computer == "scissors")) {
        computerScore += 1;
        cScore.textContent = computerScore;
        return results.textContent = "You lose! Scissors beats Paper.";
    } 

    // If the player returns anything other than "Rock", "Paper". or "Scissors" then it will return "That is not a valid choice."
    else {
        return results.textContent = "That is not a valid choice.";
    }
        
}


/*
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

        // Calling the function playRound() with the options from the previous variables with a confirm screen
        confirm(playRound(playerSelection, computerSelection));
                
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
    
    // Assigns the final score to the finalScore variable
    const finalScore = "Player: " + playerScore + "      " + "Computer: " + computerScore;
    
    
    // If the player has more points than the computer then a confirmation message will say the player
    // won and if the player clicks "OK" then the page will reload and start a new game (vice versa)
    if (playerScore > computerScore) {
        const winGame = confirm("GAME OVER! You won the game! Click 'OK' to start a new game." + "\n" + finalScore);
        if (winGame == true) {
            window.location.reload();
        }
    } else if (playerScore < computerScore) {
        const loseGame = confirm("GAME OVER! You lost the game. Click 'OK' to start a new game." + "\n" + finalScore);
        if (loseGame == true) {
            window.location.reload();
        }
    } else {
        const tieGame = confirm("GAME OVER! You tied the computer. Click 'OK' to start a new game." + "\n" + finalScore);
        if (tieGame == true) {
            window.location.reload();
        }
    }
    
}*/

// Calling function called game()


