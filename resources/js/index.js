document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

/* add event listeners */

const startGame = document.getElementById("startButton");

startGame.addEventListener("click", gameStart);

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
