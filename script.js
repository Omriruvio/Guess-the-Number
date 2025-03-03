//choose a random number
let randomNumber = Math.trunc(Math.random() * 50) + 1;
let checkButton = document.querySelector(".checkButton");

let localHighScore = Number(localStorage.getItem("highScore"));

document.querySelector(".againButton").addEventListener("click", gameReset);
document
  .querySelector(".checkButton")
  .addEventListener("click", compareNumbers);

function compareNumbers() {
  const guessedNumber = Number(document.querySelector(".guessedNumber").value);

  if (!guessedNumber || guessedNumber > 50) {
    document.querySelector(".comment").textContent = "choose 1 - 50";
  } else if (guessedNumber === randomNumber) {
    document.querySelector(".comment").textContent = "you won!";
    updateHighScore();
    winningScreen();
  } else if (guessedNumber > randomNumber) {
    document.querySelector(".comment").textContent = "⬇";
    document.querySelector(".comment").style.color = "lightblue";
    updateScore();
  } else {
    document.querySelector(".comment").textContent = "⬆";
    document.querySelector(".comment").style.color = "lightblue";
    updateScore();
  }
}

function updateScore() {
  let score = Number(document.querySelector(".score").textContent);
  if (score === 1) {
    document.querySelector(".comment").textContent = "game over!";
    losingScreen();
    document.querySelector(".score").textContent = 0;
  } else {
    score -= 1;
    document.querySelector(".score").textContent = score;
  }
}

function updateHighScore() {
  let currScore = Number(document.querySelector(".score").textContent);
  let currHighScore = Number(document.querySelector(".highscore").textContent);
  if (currScore > currHighScore) {
    document.querySelector(".highscore").textContent = currScore;
  }
}

function gameReset() {
  document.querySelector(".guessedNumber").value = "";
  document.querySelector(".comment").textContent = "start";
  document.querySelector(".score").textContent = 50;
  randomNumber = Math.trunc(Math.random() * 50) + 1;
  checkButton.disabled = false;
  document.querySelector(".secretNumber").textContent = "???";
  document.querySelector(".comment").style.color = "#fff";
  document.querySelector("header").style.backgroundColor = "#fff";
}

function losingScreen() {
  document.querySelector(".comment").style.color = "red";
  document.querySelector("header").style.backgroundColor = "red";
  document.querySelector(".secretNumber").textContent = randomNumber;
  checkButton.disabled = true;
}

function winningScreen() {
  document.querySelector(".comment").style.color = "green";
  document.querySelector("header").style.backgroundColor = "green";
  document.querySelector(".secretNumber").textContent = randomNumber;
  checkButton.disabled = true;
}
