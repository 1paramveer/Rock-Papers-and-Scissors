// Declarations
let scoreWin = 0;
let scoreLose = 0;
let scoreTie = 0;
let countPlayer = 0;
let countComputer = 0;
const rockbtn = document.querySelector(".rock-js");
const paperbtn = document.querySelector(".paper-js");
const scissorsbtn = document.querySelector(".scissors-js");
const resultContainer = document.querySelector(".resultContainer-js");
const resultText = document.querySelector(".resultText-js");
let userMoveShowCase = document.querySelector(".userMoveShowCase-js");
let computerMoveShowCase = document.querySelector(".computerMoveShowCase-js");
let movesText = document.querySelector(".movesText-js");

let restart;

// Blank result Showcase
function blankTextResetShowCase() {
  movesText.innerHTML = "Show em some Moves!";
  userMoveShowCase.innerText = `User Move: -`;
  computerMoveShowCase.innerText = `Computer Move: -`;
}
blankTextResetShowCase();

// Check Game end

let checkGameEnd = () => {
  if (countPlayer === 5 || countComputer === 5) {
    if (countPlayer === 5) {
      alert("Congrats!, You won the game.");
    } else {
      alert("Sorry!, Computer won the game.");
    }
    scoreWin = 0;
    scoreLose = 0;
    scoreTie = 0;
    countPlayer = 0;
    countComputer = 0;
    resultText.innerText = `Win: ${scoreWin} Lose: ${scoreLose} Tie: ${scoreTie}`;
    restart = confirm("Do you want to try again?");
    if (restart) {
      return true;
    } else {
      rockbtn.disabled = true;
      paperbtn.disabled = true;
      scissorsbtn.disabled = true;
      rockbtn.innerHTML = `<img src="assets/disabled.png" style="height:100px;width:100px;">`;
      paperbtn.innerHTML = `<img src="assets/disabled.png" style="height:100px;width:100px;">`;
      scissorsbtn.innerHTML = `<img src="assets/disabled.png" style="height:100px;width:100px;">`;
      blankTextResetShowCase();
      return false;
    }
  }
  return true;
};

// Computer Choice
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

// Play Round
let playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    movesText.innerText = `Thats a Tie! ${playerChoice} is equal to ${computerChoice}`;
    scoreTie++;
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    movesText.innerText = `You Win! ${playerChoice} beats ${computerChoice}`;
    scoreWin++;
    countPlayer++;
  } else if (
    (playerChoice == "scissors" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors")
  ) {
    movesText.innerText = `You Lose! ${computerChoice} beats ${playerChoice}`;
    scoreLose++;
    countComputer++;
  }
  resultText.innerText = `Win: ${scoreWin} Lose: ${scoreLose} Tie: ${scoreTie}`; // updated score
  const continueGame = checkGameEnd(); // checks game end
  if (!continueGame) {
    return;
  }
};


// rock-button
rockbtn.innerHTML = `<img src="assets/rock.png" style="height:100px;width:100px;" id="rock">`;
//paper-button
paperbtn.innerHTML = `<img src="assets/paper.png" style="height:100px;width:100px;" id="paper">`;
// scissors-button
scissorsbtn.innerHTML = `<img src="assets/scissors.png" style="height:100px;width:100px;" id="scissors">`;

[rockbtn, paperbtn, scissorsbtn].forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());

    if (restart) {
      blankTextResetShowCase();
      restart = false;
    } else{
      userMoveShowCase.innerText = `User Move: ${e.target.id}`;
      computerMoveShowCase.innerText = `Computer Move: ${getComputerChoice()}`;
    }
    resultText.innerText = `Win: ${scoreWin} Lose: ${scoreLose} Tie: ${scoreTie}`;
  })
})

//restart game
const restartbtn = document.querySelector(".restart-js");
restartbtn.innerHTML = `<img src="assets/restart.svg" style="height:100px;width:100px;">`;
restartbtn.addEventListener("click", () => {
  rockbtn.disabled = false;
  paperbtn.disabled = false;
  scissorsbtn.disabled = false;
  rockbtn.innerHTML = `<img src="assets/rock.png" style="height:100px;width:100px;">`;
  paperbtn.innerHTML = `<img src="assets/paper.png" style="height:100px;width:100px;">`;
  scissorsbtn.innerHTML = `<img src="assets/scissors.png" style="height:100px;width:100px;">`;
  scoreWin = 0;
  scoreLose = 0;
  scoreTie = 0;
  countPlayer = 0;
  countComputer = 0;
  blankTextResetShowCase();
  resultText.innerText = `Win: ${scoreWin} Lose: ${scoreLose} Tie: ${scoreTie}`;
});
