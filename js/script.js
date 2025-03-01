let bullets = 8;
let count = 0;

function gameOver() {
    window.open("./game-over.html", "_self")
} 

function gamePlay() {
    window.open("./game.html", "_self");
}

function gameStart() {
    setTimeout(() => {
        gamePlay();
      }, "2000");
    document.getElementById("quack").play();
}

function gameRestart() {
    setTimeout(() => {
        gamePlay();
      }, "2000");
    document.getElementById("quack").play();
}

function scoring() {
    document.getElementById("currentScore").innerHTML = ++count;
}

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

    window.onclick = function(e) {
        if (bullets > 0) {
            bullets--;
            document.getElementById("currentBullets").innerHTML = bullets;
        if(e.target.class !== "bird") {
                document.getElementById("miss").play();
                setTimeout(() => {
                    gameOver();
                  }, "9000");
            }
        } else if (bullets == -1) {
                setTimeout(gameOver, 2000);
        }
    }
