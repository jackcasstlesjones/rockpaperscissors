// "use strict";
const randomNumber = Math.floor(Math.random() * 9) + 1;
const playerChoice = function () {
  return prompt("Rock, paper, or scissors?").toLowerCase();
};

// playerChoice();

const getComputerChoice = function () {
  console.log(randomNumber);
  if (randomNumber < 4) {
    return "rock";
  } else if (randomNumber < 7) {
    return "paper";
  } else return "scissors";
};

const computerChoice = getComputerChoice();

console.log(computerChoice);

const playRound = function (player, computer) {
  if (player === computer) {
    return "It's a draw!";
  } else if (player === "rock" && computer === "scissors") {
    return "You win! Rock beats scissors!";
  } else if (player === "rock" && computer === "paper") {
    return "You lose! Paper beats rock!";
  } else if (player === "paper" && computer === "scissors") {
    return "You lose! Scissors beats paper!";
  } else if (player === "paper" && computer === "rock") {
    return "You win! Paper beats rock!";
  } else if (player === "scissors" && computer === "paper") {
    return "You win! Scissors beats paper!";
  } else if (player === "scissors" && computer === "rock") {
    return "You lose! Rock beats scissors!";
  }
};

const game = function () {
  for (let i = 1; i < 6; i++) {
    console.log(playRound(playerChoice(), computerChoice));
  }
};

game();
