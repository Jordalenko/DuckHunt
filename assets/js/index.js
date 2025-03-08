/* add event listeners */

const startGame = document.getElementById("startButton");

startGame.addEventListener("click", gameStart);

/* game start */

function gameStart() {
  // delay launch of game page
  setTimeout(() => {
    gamePlay();
  }, "1200");
  // dog bark sound effect
  document.getElementById("doggie").play();
}

function gamePlay() {
  // open game.html in the same tab/window
  window.open("./game.html", "_self");
}
