let score;
let scoreWin = 0;
let scoreLose = 0;
let scoreTie = 0;
let result;
let scoreInvalid = 0;

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
    } else if (
      (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") ||
      (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") ||
      (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors")
    ) {
      alert(
        "You Lose! " +
          computerChoice.toLowerCase() +
          " beats " +
          playerChoice.toLowerCase()
      );
      scoreLose++;
    } else if (
      playerChoice != "rock" ||
      playerChoice != "paper" ||
      playerChoice != "scissors"
    ) {
      alert("Enter Valid Answer");
      scoreInvalid++;
    }
    return result;
  };

  let computerChoice = getComputerChoice();
  let playerChoice = prompt("Rock, Paper or Scissors ?", "");

  if (playerChoice !== null) {
    playRound(playerChoice, computerChoice);
    score = `Win: ${scoreWin} Lose: ${scoreLose} Tie: ${scoreTie} Wrong Input: ${scoreInvalid}`;
    console.log(score);
  } else {
    console.log("Game canceled by the user");
    break;
  }
  playRound(playerChoice, computerChoice);
}
