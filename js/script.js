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

    window.onclick = function() {
        bullets--;
        if(bullets >= 0) {
                document.getElementById("bullets").innerHTML = bullets;
        }
    }