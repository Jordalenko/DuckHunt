document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

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

/* game play - hit birds */

function shoot(event) {
    const bird = event.currentTarget;
    console.log(bird);
    scoring();
}

window.onclick = function(e) {
    if (bullets > 0) {
       bullets--;
       bulletCounter.innerHTML = bullets;
        }
        
    if(e.target.classList !== "bird") {
        missScoring();
        document.getElementById("miss").play();
        setTimeout(() => {
             gameOver();
             }, 9000);
    } else if (e.target.classList == "bird") {
        shoot();
        document.getElementById("hit").play();
        setTimeout(() => {
             gameOver();
             }, 9000);
    }
};

/* function shoot(event) {
    const bird = event.currentTarget;
    console.log(bird);
    scoring();

    if (event.target.classList.contains("bird")) {
        bird.style.display = "none";
        document.getElementById("hit").play();
        setTimeout(() => {
            gameOver();
          }, 9000);
        } if (bullets > 0) {
            bullets--;
            bulletCounter.innerHTML = bullets;
    }
}

game play - hit birds - attempt 1

function shoot(event) {
    const bird = event.currentTarget;
    console.log("bird");
    if (bullets > 0) {
        scoring();
        bird.style.display = "none";
        document.getElementById("hit").play();
        setTimeout(() => {
            gameOver();
          }, "9000");
    }
}
          
/* game play - miss birds */

/* window.onclick = function(e) {
    if (bullets > 0) {
       bullets--;
       bulletCounter.innerHTML = bullets;
        }
        
    if(e.target.classList !== "bird") {
        missScoring();
        document.getElementById("miss").play();
        setTimeout(() => {
             gameOver();
             }, 9000);
        } else if (bullets == -1) {
                setTimeout(gameOver, 2000);
        }
}; */

/* game scoring */
          
function scoring() {
    count += 1;
    currentScoreDisplay.innerHTML = count;
}
          
function missScoring() {
    count -= 1;
    currentScoreDisplay.innerHTML = count;
}

/* game over */

function gameOver() {
    window.open("./game-over.html", "_self");
}
