let bullets = 8;
let count = 0;

function shoot(bird) {
    if (bullets > 0) {
        bird.style.display = "none";
        document.getElementById("hit").play();
    }
}

    window.onclick = function(e) {
        bullets--;
        if (bullets >= 0) {
            if(e.target.id == "b1, b2, b3, b4, b5, b6, b7, b8") {
                document.getElementById("score") = console.log(`Score: ${++count}`);
            } else {
                document.getElementById("miss").play();
                document.getElementById("quack").play();
            }
        } else if (bullets == -1) {
            setTimeout(GameOver, 2000)
        }
    }

function GameOver() {
    window.open("./game-over.html", "_self")
    }

function GamePlay() {
    window.open("./game.html", "_self");
}

function play() {
    document.getElementById("quack").play();
    setTimeout(GamePlay, 2000)
    }