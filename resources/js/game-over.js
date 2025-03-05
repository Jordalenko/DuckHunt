document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const restartGame = document.getElementById("gameEnd");

restartGame.addEventListener("click", gameRestart);

function gamePlay() {
  window.open("./game.html", "_self");
};

/* game restart */

function gameRestart() {
  setTimeout(() => {
    gamePlay();
  }, "1500");
  document.getElementById("doggie").play();
};
