"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const againButton = document.querySelector(".again");
document.querySelector(".score").textContent = score;

//Update Message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Check Guess Functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When invalid input given
  if (!guess) {
    displayMessage("Invalid Guess");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct!!! You Win!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Too High! Guess Again" : "Too Low! Guess Again"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lose!");
    }
  }
});

//New Game Functionality
againButton.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
