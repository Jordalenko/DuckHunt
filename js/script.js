const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const currentScoreDisplay = document.getElementById("currentScore");
const startGame = document.getElementById("startButton");
const restartGame = document.getElementById("gameEnd");
const bulletCounter = document.getElementById("currentBullets");

startGame.addEventListener("click", gameStart);
restartGame.addEventListener("click", gameRestart);
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

    if (event.target.classList.contains("bird")) {
        scoring();
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

/* attempt 1 */

/* function shoot(event) {
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
} */
          
/* game play - miss birds */

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
        } else if (bullets == -1) {
                setTimeout(gameOver, 2000);
        }
}

/* game scoring */
          
function scoring() {
    count += 1;
    currentScoreDisplay.innerHTML = count;
}
          
function missScoring() {
    count -= 1;
    currentScoreDisplay.innerHTML = count;
}


/* game start */

function gameStart() {
    setTimeout(() => {
        gamePlay();
      }, "1200");
    document.getElementById("quack").play();
}

function gamePlay() {
    window.open("./game.html", "_self");
}

/* game over */

function gameOver() {
    window.open("./game-over.html", "_self");
}

/* game restart */

function gameRestart() {

    setTimeout(() => {
        gamePlay();
      }, "1500");
    document.getElementById("quack").play();
}

/* variable starting values */

/* let bullets = 8;
let count = 0;

const startGame = document.getElementById("startButton");

startGame.addEventListener("click", gameStart);

/* Fix this event listener */

/* const restartGame = document.getElementById("gameEnd")

restartGame.addEventListener("click", gameRestart)  */

/* game scoring */

/* /* function shoot(event) {
    const bird = event.currentTarget;
    console.log(bird);
    if (bullets > 0) {
        scoring();
        bird.style.display = "none";
        document.getElementById("hit").play();
        setTimeout(() => {
            gameOver();
          }, "9000");
    }
}

function scoring() {
    document.getElementById("currentScore").innerHTML = ++count;
}


const b1 = document.getElementById("b1")

b1.addEventListener("click", shoot)

const b2 = document.getElementById("b2")

b2.addEventListener("click", shoot)

const b3 = document.getElementById("b3")

b3.addEventListener("click", shoot)

const b4 = document.getElementById("b4")

b4.addEventListener("click", shoot)

const b5 = document.getElementById("b5")

b5.addEventListener("click", shoot)

const b6 = document.getElementById("b6")

b6.addEventListener("click", shoot)

const b7 = document.getElementById("b7")

b7.addEventListener("click", shoot)

const b8 = document.getElementById("b8")

b8.addEventListener("click", shoot)

/* game start */

/* function gameStart() {
    setTimeout(() => {
        gamePlay();
      }, "1200");
    document.getElementById("quack").play();
}

function gamePlay() {
    window.open("./game.html", "_self");
}



/* function missScoring() {
    document.getElementById("currentScore").innerHTML = --count;
} */

/* game play shoot birds */



/* game play miss birds */

    /* window.onclick = function(e) {
        if (bullets > 0) {
            bullets--;
            document.getElementById("currentBullets").innerHTML = bullets;
        
        if(e.target.class !== "bird") {
                /* missScoring(); */
                /* document.getElementById("miss").play();
                setTimeout(() => {
                    gameOver();
                  }, "9000");
            }
        } else if (bullets == -1) {
                setTimeout(gameOver, 2000);
        }
    };

/* game over */

/* function gameOver() {
    window.open("./game-over.html", "_self");
}

/* game restart */

/* function gameRestart() {

    setTimeout(() => {
        gamePlay();
      }, "1500");
    document.getElementById("quack").play();
}


    /* local storage score lists */

/* localStorage.setItem("finalTally", "7");

var finalTally = localStorage.getItem("finalTally"); */

/* function set_LocalStorage(finalScore) {
 //localStorage.setItem("name of variable", "value to store");
   localStorage.setItem(finalScore);
   console.log(finalScore);
}

function get_LocalStorage(finalScore) {
  return localStorage.getItem(finalScore);
  console.log(finalScore);
}

*/

/* const localStorageScoreKey = score.lists
let lists = JSON.parse(localStorage.getItem(localStorageScoreKey)) || []

function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(localStorageScoreKey, JSON.stringify(lists))
}
*/