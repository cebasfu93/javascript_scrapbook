let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3);
      let computer = computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
      let result =
        playerOne === computer
          ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nIt's a tie.`
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nComputer wins.`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nComputer wins.`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}.\nComputer: ${computer}.\nComputer wins.`
          : `playerOne: ${playerOne}.\nComputer: ${computer}.\nPlayer One wins.`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
