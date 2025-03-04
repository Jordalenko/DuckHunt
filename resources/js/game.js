/* confirm dom loading */

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

/* variables for event listeners */

const dogJumper = document.getElementById("dog-jump-1");
const dogJumpered = document.getElementById("dog-jump-2");
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


/* event listeners */

b1.addEventListener("click", shoot);
b2.addEventListener("click", shoot);
b3.addEventListener("click", shoot);
b4.addEventListener("click", shoot);
b5.addEventListener("click", shoot);
b6.addEventListener("click", shoot);
b7.addEventListener("click", shoot);
b8.addEventListener("click", shoot);

/* variable starting values */

let bullets = 8;
let count = 0;

/* dog animation */

dogAnimation();
dogDisappear();
dogJump();
dogJumping();
dogJumped();
dogJumpedDis();

function dogAnimation() {
  setTimeout(() => {
  document.getElementById("dog-stopped").hidden = false;
}, 4000);
}

function dogDisappear() {
  setTimeout(() => {
  document.getElementById("dog-stopped").hidden = true;
}, 5000);
}

function dogJump() {
  setTimeout(() => {
  dogJumper.hidden = false;
}, 5000);
}

function dogJumping() {
  setTimeout(() => {
  dogJumper.hidden = true;
}, 5250);
}

function dogJumped() {
  setTimeout(() => {
    dogJumpered.hidden = false;
}, 5250);
}

function dogJumpedDis() {
  setTimeout(() => {
    dogJumpered.hidden = true;
}, 5500);
}

/* game play - hit birds */

function shoot(e) {
  const bird = e.target;
  bird.style.display = "none";
  console.log(bird);
}

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
  } 
  else if (bullets > 0) {
    console.log("miss");
    missScoring();
    document.getElementById("miss").play();
  }
};

/* game scoring */

function scoring() {
  count += 1;
  currentScoreDisplay.innerHTML = count;
}

function missScoring() {
  count -= 1;
  currentScoreDisplay.innerHTML = count;
}

/* game over functions */

/* get final score */

function gameOver() {
  const playerScore = currentScoreDisplay.innerHTML;
  console.log(playerScore);
  dogRises();
}

/* end dog animation */

function dogRises() {
  document.getElementById("dog-up").hidden = false;
  setTimeout(() => {
    gameOverPage();
  }, 3100);
}

/* game over page launch */

function gameOverPage() {
  window.open("./game-over.html", "_self");
}