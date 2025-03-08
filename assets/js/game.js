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
const restartGame = document.getElementById("gameEndered");

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
restartGame.addEventListener("click", gameRestart);

/* variable starting values */

let bullets = 8;
let count = 0;

/* dog animation */

/* dog animation function calls */

dogAnimation();
dogDisappear();
dogJump();
dogJumping();
dogJumped();
dogJumpedDis();

/* dog animation functions */

/* dog animation - walking left to right */

function dogAnimation() {
  //delay dog walking animation un-hide
  setTimeout(() => {
  //un-hide dog walking animation
  document.getElementById("dog-stopped").hidden = false;
}, 4000);
}

function dogDisappear() {
  //delay dog walking animation re-hide
  setTimeout(() => {
  //re-hide dog walking animation
  document.getElementById("dog-stopped").hidden = true;
}, 5000);
}

/* dog animation - jump */

function dogJump() {
  //delay dog jump 1 un-hide
  setTimeout(() => {
  //un-hide dog jump 1
  dogJumper.hidden = false;
}, 5000);
}

function dogJumping() {
  //delay dog jump 1 re-hide
  setTimeout(() => {
  //re-hide dog jump 1
  dogJumper.hidden = true;
}, 5250);
}

function dogJumped() {
  //delay dog jump 2 un-hide
  setTimeout(() => {
    //un-hide dog jump 2
    dogJumpered.hidden = false;
}, 5250);
}

function dogJumpedDis() {
  //delay dog jump 2 re-hide
  setTimeout(() => {
    //re-hide dog jump 2
    dogJumpered.hidden = true;
}, 5500);
}

/* game play  */

/* game play - hit birds */

function shoot(e) {
  const bird = e.target;
  //disappear bird on click
  bird.style.display = "none";
}

/* game play - shoot */

window.onclick = function (e) {
  if (bullets > 0) {
    //reduce bullet counter
    bullets--;
    bulletCounter.innerHTML = bullets;
    //trigger game over function delay
    setTimeout(() => {
      gameOver();
    }, 8500);
  }
  //trigger hit sound and score function for hitting a bird and disappear bird function
  if (bullets > 0 && e.target.classList.contains("bird")) {
    document.getElementById("hit").play();
    scoring();
    shoot(e);
  } 
  //play missed shot sound and deduct one point function
  else if (bullets > 0 && (!e.target.classList.contains("btn"))) {
      missScoring();
      document.getElementById("miss").play();
  }
};


/* game scoring */

function scoring() {
  //add one point to score
  count += 1;
  currentScoreDisplay.innerHTML = count;
}

function missScoring() {
  //deduct one point from score
  count -= 1;
  currentScoreDisplay.innerHTML = count;
}

/* game over functions */

function gamePlay() {
  //launch new game function
  window.open("./game.html", "_self");
}

/* game end text + button */

function gameOver() {
  //trigger laughing dog animation
  dogRises();
  //delay un-hide gameover text
  setTimeout(() => {
    //un-hide game over text
    document.getElementById("gameEnder").hidden = false;
}, 3500);
}

/* end dog animation */

function dogRises() {
  //un-hide dog animation
  document.getElementById("dog-up").hidden = false;
}

/* game restart function launch  */

function gameRestart() {
  //play dog bark sound
  document.getElementById("doggie").play();
  //delay start of game restart function
  setTimeout(() => {
    gamePlay();
}, 1500);
}
