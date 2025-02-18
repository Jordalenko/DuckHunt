let bullets = 8;
let count = 0;

function shoot(bird) {
    if (bullets > 0) {
    bird.style.display = "none";
    document.getElementById("score").innerHTML = `Score: ${++count}`;
    } else if (bullets == -1) {
            alert("Reload Page");
        }
    }

    window.onclick = function(e) {
        bullets--;
        if(bullets >= 0) {
                document.getElementById("bullets").innerHTML = `Bullets: ${bullets}`;
                if(e.target.nodeName == "IMG") {
                    document.getElementById("hit").play();
                } else {
                    document.getElementById("miss").play();
                }
        } 
    }


function GamePlay () {
    window.open("./game.html", "_self");
}
function play() {
    document.getElementById("quack").play();
    setTimeout(GamePlay, 2000)
    }