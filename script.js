let getComputerChoice = () => {
  let compChoice = Math.random();
  if (compChoice > 0 && compChoice <= 1 / 3) {
    compChoice = "rock";
  } else if (compChoice > 1 / 3 && compChoice <= 2 / 3) {
    compChoice = "paper";
  } else if (compChoice > 2 / 3 && compChoice <= 1) {
    compChoice = "scissors";
  }
  return compChoice;
};

let playGame = (playerChoice) => {
  let computerChoice = getComputerChoice();
  let result;
  if (computerChoice === "rock") {
    if (playerChoice.toLowerCase() === "rock") {
      result = "Tie";
    } else if (playerChoice.toLowerCase() === "paper") {
      result = "You Win";
    } else if (playerChoice.toLowerCase() === "scissors") {
      result = "You Lose";
    }
  } else if (computerChoice === "paper") {
    if (playerChoice.toLowerCase() === "rock") {
      result = "You Lose";
    } else if (playerChoice.toLowerCase() === "paper") {
      result = "Tie";
    } else if (playerChoice.toLowerCase() === "scissors") {
      result = "You Win";
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice.toLowerCase() === "rock") {
      result = "You Win";
    } else if (playerChoice.toLowerCase() === "paper") {
      result = "You Lose";
    } else if (playerChoice.toLowerCase() === "scissors") {
      result = "Tie";
    }
  }
  return result;
};
