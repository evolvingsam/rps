console.log("Rock Paper Scissors Game");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice;
  do {
    choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!choices.includes(choice)) {
      alert("Invalid choice. Please try again.");
      console.log("Invalid choice. Please try again.");
    }
  } while (!choices.includes(choice));
  return choice;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    alert("It's a tie!");
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert(`You win this round! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    alert(`Computer wins this round! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        if (humanScore === 3 || computerScore === 3) {
        break;
        }
    }
    
    if (humanScore > computerScore) {
        alert("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        alert("Computer wins the game! Better luck next time!");
    } else {
        alert("The game is a tie!");
    }
  
}
playGame();

console.log("Game Over");
console.log("Thank you for playing!");
console.log("Please refresh the page to play again.");
