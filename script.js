let computerScore = 0;
let playerScore = 0;

let result = document.querySelector(".result-text");
let choices = document.querySelector(".choices-container");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let playAgainBtn = document.querySelector("#play-again");

let event = new CustomEvent("game");

choices.addEventListener("click", (e) => {
    let target = e.target;

    let validChoices = ["rock", "paper", "scissors"];
    let playerChoice;

    if (validChoices.includes(target.id)) {
        playerChoice = e.target.id;
    } else {
        return;
    }

    let computerChoice = getComputerChoice();
    let outcome = playRound(computerChoice, playerChoice);

    updateImage(computerChoice, playerChoice);

    if (outcome == "win") {
        result.textContent = `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
        playerScore++;
    } else if (outcome == "lose")
    {
        result.textContent = `You Win! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}.`;
        computerScore++;
    } else {
        result.textContent = "It's a Tie!";
    }

    if (computerChoice = 5 || playerScore == 5) {
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";
        playAgainBtn.style.display = "initial";

        result.textContent = (playerScore == 5) ? "Congrats! You Won the game!" : "Sorry, you lost.";
        document.querySelector(".choices-text").style.display = "none";
    }

    updateHealthBar();


}) 

playAgainBtn.addEventListener("click", () => {
    rockBtn.style.display = "initial";
    paperBtn.style.display = "initial";
    scissorsBtn.style.display = "initial";
    playAgainBtn.style.display = "none";

    document.querySelector(".choices-text").style.cssText = "display: initial";

    computerScore = 0;
    playerScore = 0;

    result.style.cssText = "font-size: 32px;";
    result.textContent = "Rock Paper Scissors!";
    updateImage();
    updateHealthBar();
})


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch(choice) {
        case 0:
            return "rock";
         
        case 1:
            return "paper";
        
        case 2:
            return "scissors";       

    }

} 

function playRound(computerChoice, playerChoice) {
    let outcome;
    if (computerChoice == playerChoice) {
        outcome = "tie";
    } else if (computerChoice == "rock" && playerChoice == "scissors"
        || computerChoice == "scissors" && playerChoice == "paper"
        || computerChoice == "paper" && playerChoice == "rock"
    ) {
        outcome = "lose";
    }

    else {
        outcome = "true";
    }

    return outcome;
}


function updateImage(computerChoice = "default", playerChoice = "default") {
    let computerImage = document.querySelector("#computer-choice-image");
    let playerImage = document.querySelector("#player-choice-image");

    if (computerChoice == "default") {
        computerImage.src = "./img/rock-front.png";
        playerImage.src = "./img/rock-back.png";
        computerImage.style.cssText = "filter: saturate(0)";
        playerImage.style.cssText = "filter: saturate(0)";

    } else {
        computerImage.src = `./img/${computerChoice}-front.png`;
        playerImage.src = `./img/${playerChoice}-back.png"`;
        computerImage.style.cssText = "filter: saturate(1)";
        playerImage.style.cssText = "filter: saturate(1)";

    }
}

function updateHealthBar() {
    let computerHealthbar = document.querySelector("#computer-health-bar");
    let playerHealthbar = document.querySelector("#player-health-bar");

    computerHealthbar.style.cssText = `width: ${(5 - playerScore) * 20}%;`;
    playerHealthbar.style.cssText = `width: ${(5 - computerScore) * 20}%;`;

    if (playerScore > 3) {
        computerHealthbar.style.backgroundColor = "#FF3939";
    } else if (playerScore > 1) {
        computerHealthbar.style.backgroundColor = "#FFCA39";
    } else {
        computerHealthbar.style.backgroundColor = "#40FF39";
    }

    if (computerScore > 3) {
        playerHealthbar.style.backgroundColor = "#FF3939";
    } else if (computerScore > 1) {
        playerHealthbar.style.backgroundColor = "#FFCA39";
    } else {
        playerHealthbar.style.backgroundColor = "#40FF39";
    }
}