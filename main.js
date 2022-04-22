const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const humanResult = document.getElementById("human-results");
const computerResult = document.getElementById("computer-results");
const winner = document.getElementById("winner");
const score = document.getElementById("score");
const gameValues = ["Rock", "Paper", "Scissors"];
let attempt = 0;
let humanScore = 0;
let humanvaValue;

score.innerText = `${humanScore}/${attempt}`;

function game(value) {
  let random = Math.floor(Math.random() * gameValues.length);
  let computerValue = gameValues[random];
  computerResult.innerText = computerValue;
  attempt++;

  //   if (computerValue == value) {
  //     winner.innerText = `it's a tie`;
  //   } else if (computerValue == "Rock" && value == "Scissors") {
  //     winner.innerText = `Computer Wins`;
  //   } else if (computerValue == "Scissors" && value == "Paper") {
  //     winner.innerText = `Computer Wins`;
  //   } else if (computerValue == "Paper" && value == "Rock") {
  //     winner.innerText = `Computer Wins`;
  //   } else {
  //     winner.innerText = `You Win`;
  //     humanScore++;
  //   }

  if (computerValue == value) {
    winner.innerText = `it's a tie`;
  } else if (
    (computerValue == "Rock" && value == "Scissors") ||
    (computerValue == "Scissors" && value == "Paper") ||
    (computerValue == "Paper" && value == "Rock")
  ) {
    winner.innerText = `Computer Wins`;
  } else {
    winner.innerText = `You Win`;
    humanScore++;
  }

  score.innerText = `${humanScore}/${attempt}`;
}

rockButton.addEventListener("click", () => {
  humanvaValue = gameValues[0];
  humanResult.innerText = humanvaValue;
  game(humanvaValue);
});

paperButton.addEventListener("click", () => {
  humanvaValue = gameValues[1];
  humanResult.innerText = humanvaValue;
  game(humanvaValue);
});

scissorsButton.addEventListener("click", () => {
  humanvaValue = gameValues[2];
  humanResult.innerText = humanvaValue;
  game(humanvaValue);
});
