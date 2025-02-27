let bullets = 8;
let count = 0;

function scoring() {
    document.getElementById("currentScore").innerHTML = `Score: ${++count}`;
}

function shoot(bird) {
    if (bullets > 0) {
        /* scoring() */
        bird.style.display = "none";
        document.getElementById("hit").play();
    }
}

    window.onclick = function(e) {
        bullets--;
        if (bullets >= 0) {
            /* document.getElementById("currentBullets").innerHTML = `Bullets: ${bullets}`; */
        if(e.target.class !== "bird") {
                document.getElementById("miss").play();
            }
        } else if (bullets == -1) {
                setTimeout(GameOver, 2000);
        }
    }

 

function GameOver() {
    window.open("./game-over.html", "_self")
    }

function GamePlay() {
    window.open("./game.html", "_self");
}

function gameStart() {
    document.getElementById("quack").play();
    setTimeout(GamePlay, 2000);
    setTimeout(GameOver, 8000);
}
