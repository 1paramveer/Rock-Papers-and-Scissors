for (let i = 1; i <= 5; i++) {
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

  let playRound = (playerChoice, computerChoice) => {
    let result;
    // Previous Logic
    /*
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
    */

    // Better Logic

    if (playerChoice === computerChoice) {
      alert("Tie");
      scoreTie++;
    } else if (
      (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
      (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") ||
      (playerChoice.toLowerCase() == "scissors" && computerChoice == "paper")
    ) {
      alert(
        "You Win! " +
          playerChoice.toLowerCase() +
          " beats " +
          computerChoice.toLowerCase()
      );
      scoreWin++;
    } else {
      alert(
        "You Lose! " +
          computerChoice.toLowerCase() +
          " beats " +
          playerChoice.toLowerCase()
      );
      scoreLose++;
    }
    return result;
  };

  let computerChoice = getComputerChoice();
  let playerChoice = prompt("Rock, Paper or Scissors ?", "");
  let score;
  let scoreWin = 0;
  let scoreLose = 0;
  let scoreTie = 0;
  playRound(playerChoice, computerChoice);
  score = `Win: ${scoreWin} Lose: ${scoreLose} Tie: ${scoreTie}`;
  console.log(score);
}
