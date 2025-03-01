/* variable starting values */

let bullets = 8;
let count = 0;

/* score lists */

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

/* game over */

function gameOver() {
    window.open("./game-over.html", "_self")
} 

/* game start */

function gamePlay() {
    window.open("./game.html", "_self");
}

function gameStart() {
    setTimeout(() => {
        gamePlay();
      }, "2000");
    document.getElementById("quack").play();
}

/* game restart */

function gameRestart() {
    setTimeout(() => {
        gamePlay();
      }, "2000");
    document.getElementById("quack").play();
}

/* game scoring */

function scoring() {
    document.getElementById("currentScore").innerHTML = ++count;
}

/* function missScoring() {
    document.getElementById("currentScore").innerHTML = --count;
} */

/* game play shoot birds */

function shoot(bird) {
    if (bullets > 0) {
        scoring()
        bird.style.display = "none";
        document.getElementById("hit").play();
        setTimeout(() => {
            gameOver();
          }, "9000");
    }
}

/* game play miss birds */

    window.onclick = function(e) {
        if (bullets > 0) {
            bullets--;
            document.getElementById("currentBullets").innerHTML = bullets;
        if(e.target.class !== "bird") {
                /* missScoring(); */
                document.getElementById("miss").play();
                setTimeout(() => {
                    gameOver();
                  }, "9000");
            }
        } else if (bullets == -1) {
                setTimeout(gameOver, 2000);
        }
    }
