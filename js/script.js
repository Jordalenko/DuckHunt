let bullets = 5;
let count = 0;

function shoot(bird) {
    if (bullets > 0) {
    bird.style.display = "none";
    document.getElementById("score").innerHTML = ++count;
    } else if (bullets == -1) {
            alert("Reload Page");
        }
    }

    window.onclick = function(e) {
        if(bullets >= 0) {
            bullets--;
            document.getElementById("bullets").innerHTML = bullets;
        }

            if(e.target.nodeName == "IMG") {
                document.getElementById("fire").play();
            }
            else() {
                document.getElementById("miss").play();
            }
    }