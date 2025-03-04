/* confirm dom loading */

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

/* dogAnimation(); */

/* variables for event listeners */

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const currentScoreDisplay = document.getElementById("currentScore");
const bulletCounter = document.getElementById("currentBullets");

/* local storage */

/* Example of saving a new high score
// const newScore = { name: “Player1”, score: 8 };
// Retrieve existing high scores
// const highScores = JSON.parse(localStorage.getItem(“highScores”)) || [];
// Add the new score
// highScores.push(newScore);
// Save back to localStorage
// localStorage.setItem(“highScores”, JSON.stringify(highScores)); */

/* event listeners */

b1.addEventListener("click", shoot);
b2.addEventListener("click", shoot);
b3.addEventListener("click", shoot);
b4.addEventListener("click", shoot);
b5.addEventListener("click", shoot);
b6.addEventListener("click", shoot);
b7.addEventListener("click", shoot);
b8.addEventListener("click", shoot);
/* getFinalScore.addEventListener("click", getScore); */

/* variable starting values */

let bullets = 8;
let count = 0;

/* dog animation */

/* function dogAnimation() {
    
    setTimeout(() => {
    document.getElementById("dog").play();
  }, 800);
}; */

/* game play - hit birds */

function shoot(e) {
  const bird = e.target;
  bird.style.display = "none";
  console.log(bird);
};

window.onclick = function (e) {
  if (bullets > 0) {
    bullets--;
    bulletCounter.innerHTML = bullets;
    setTimeout(() => {
      gameOver();
    }, 8500);
  }
  if (bullets > 0 && e.target.classList.contains("bird")) {
    console.log("hit");
    document.getElementById("hit").play();
    scoring();
    shoot(e);
  } else if (bullets > 0) {
    console.log("miss");
    missScoring();
    document.getElementById("miss").play();
  }
};

/* game scoring */

function scoring() {
  count += 1;
  currentScoreDisplay.innerHTML = count;
};

function missScoring() {
  count -= 1;
  currentScoreDisplay.innerHTML = count;
};

/* game over */

function gameOver() {
  document.getElementById("dog").play();
  const playerScore = currentScoreDisplay.innerHTML
  console.log(playerScore);
  setTimeout(() => {
    gameOverPage();
  }, 800);
};

function gameOverPage() {
  window.open("./game-over.html", "_self");
};