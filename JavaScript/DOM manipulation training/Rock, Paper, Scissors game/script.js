const options = ["Rock", "Paper", "Scissors"];
const rockBtn = document.getElementById("rock-btn");
const papperkBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const btnContainer = document.querySelector(".btn-container");
const resultsMsg = document.getElementById("results-msg");
const playerScoreBlock = document.getElementById("player-score");
const computerScoreBlock = document.getElementById("computer-score")

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScoreBlock.textContent = ++playerScore;
    resultsMsg.textContent = `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    resultsMsg.textContent = `It's a tie! Both chose ${userOption}`;
  } else {
    computerScoreBlock.textContent = ++computerScore;
    resultsMsg.textContent = `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

btnContainer.addEventListener("click", (e) => {
  const userOption = e.target.textContent; // локальная переменная
  console.log("Игрок выбрал:", userOption);
  getRoundResults(userOption); // передаём напрямую
});
