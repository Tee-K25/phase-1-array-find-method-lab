function superbowlWin(array) {
  let winningGame = array.find((item) => item.result === "W");
  if (winningGame) {
    return winningGame.year;
  }
}
superbowlWin(record);
