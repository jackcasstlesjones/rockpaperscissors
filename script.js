"use strict";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const myDiv = document.getElementById("div");
const playerResultElement = document.querySelector(".player-score");
const computerResultElement = document.querySelector(".computer-score");
const computerChoiceElement = document.querySelector(".computer-choice");
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  // console.log(randomNumber);
  if (randomNumber < 4) {
    return "rock";
  } else if (randomNumber < 7) {
    return "paper";
  } else return "scissors";
};

const computerChoice = getComputerChoice();

const scoreFunc = function () {
  playerResultElement.textContent = playerScore;
  computerResultElement.textContent = computerScore;
}; // This is what updates the text content of the result div!!!
// scoreFunc();

// console.log(computerChoice);

const playRound = function (player, computer) {
  // playerScore.textContent = 0;
  // myDiv.textContent = "You've played a round";
  console.log("You've played a round");
  if (playerScore > 4) {
    myDiv.style.backgroundColor = "#90EE90";
    return (myDiv.textContent = "You Win!!!");
  } else if (computerScore > 4) {
    myDiv.style.backgroundColor = "#F4364C";
    return (myDiv.textContent = "You lose!!!");
  } else if (player === computer) {
    myDiv.textContent = "It's a draw!";
    scoreFunc();
  } else if (player === "rock" && computer === "scissors") {
    myDiv.textContent = "You win! Rock beats scissors!";
    playerScore += 1;
    scoreFunc();
  } else if (player === "rock" && computer === "paper") {
    myDiv.textContent = "You lose! Paper beats rock!";
    computerScore += 1;
    scoreFunc();
  } else if (player === "paper" && computer === "scissors") {
    myDiv.textContent = "You lose! Scissors beats paper!";
    computerScore += 1;
    scoreFunc();
  } else if (player === "paper" && computer === "rock") {
    myDiv.textContent = "You win! Paper beats rock!";
    playerScore += 1;
    scoreFunc();
  } else if (player === "scissors" && computer === "paper") {
    myDiv.textContent = "You win! Scissors beats paper!";
    playerScore += 1;
    scoreFunc();
  } else if (player === "scissors" && computer === "rock") {
    myDiv.textContent = "You lose! Rock beats scissors!";
    computerScore += 1;
    scoreFunc();
  }
};

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

// const game = function () {
//   for (let i = 1; i < 6; i++) {
//     playRound(playerChoice(), computerChoice));
//   }
// };
